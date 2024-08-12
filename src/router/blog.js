const { getList,getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog.js')
const  { SuccessModel, ErrorModel } = require('../model/resModel.js')

const handleBlogRouter = (req,res) => {
    const method = req.method  // GET POST
    const id = req.query.id
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
        const data = getDetail(id)
        return  new SuccessModel(data)
    }

    // 新建一篇博客
    if(method === 'POST' && req.path === '/api/blog/new') {
        console.log('req.body:', JSON.stringify(req.body))
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }

    // 更新一篇博客
    if(method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBlog(id, req.body)
        if(result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('更新博客失败')
        }
    }
    
    // 删除一篇博客
    if(method === 'POST' && req.path === '/api/blog/del') {
        const result = delBlog(id)
        if(result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('删除博客失败')
        }
    }

}

module.exports = handleBlogRouter