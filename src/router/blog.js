const { getList,getDetail } = require('../controller/blog.js')
const  { SuccessModel, ErrorModel } = require('../model/resModel.js')

const handleBlogRouter = (req,res) => {
    const method = req.method  // GET POST
    // const url = req.url
    // const path = url.split('?')[0]

    // 获取博客列表
    if(method === 'GET' && req.path === '/api/blog/list') {
        console.log('req.query:', JSON.stringify(req.query))
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)

        return new SuccessModel(listData)
    }

    // 获取博客详情
    if(method === 'GET' && req.path === '/api/blog/detail') {
        const id = req.query.id
        const data = getDetail(id)
        return  new SuccessModel(data)
    }

    // 新建一篇博客
    if(method === 'POST' && req.path === '/api/blog/new') {
        console.log('req.body:', JSON.stringify(req.body))
        return {
            msg: '这是新建博客的接口'
        }
    }

    // 更新一篇博客
    if(method === 'POST' && req.path === '/api/blog/update') {
        return {
            msg: '这是更新博客的接口'
        }
    }
    
    // 删除一篇博客
    if(method === 'POST' && req.path === '/api/blog/del') {
        return {
            msg: '这是删除博客的接口'
        }
    }

}

module.exports = handleBlogRouter