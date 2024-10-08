const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog.js')
const handleUserRouter = require('./src/router/user.js')

// for handling post data by using promise
const getPostData = (req) => {
  const promise = new Promise((resolve,reject) => {
      if(req.method !== 'POST') {
          resolve({})
          return
      }
      if(req.headers['content-type'] !== 'application/json') {
          resolve({})
          return
      }
      let postData = ''
      // 这里监听事件分片获取
      req.on('data', chunk => {
          postData += chunk
      })
      req.on('end', () => {
        if(!postData) {
          resolve({})
          return
        }
        resolve(
          JSON.parse(postData)
        )
      })
  })
  return promise
}

const serverHandle = (req, res) => {

  // 设置返回格式
  res.setHeader('Content-type', 'application/json')

  // 获取path
  const url = req.url
  req.path = url.split('?')[0]
  
  // 解析query
  req.query = querystring.parse(url.split('?')[1])

  // handle post data
  getPostData(req).then(postData => {
    req.body = postData
    console.log(req.body)

    // 处理blog路由
    const blogData = handleBlogRouter(req,res)
    if(blogData) {
      res.end(
        JSON.stringify(blogData)
      )
      return
    }

    // 处理user路由
    const userData = handleUserRouter(req,res)
    if(userData) {
      res.end(
        JSON.stringify(userData)
      )
      return
    }

    // 未命中路由，返回404
    res.writeHead(404, {"Content-type": "text/plain"})
    res.write("404 Not Found\n")
    res.end()

  })

  
}

module.exports = serverHandle

// process.env.NODE_ENV