const getList = (author, keyword) => {
    // 先返回假数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1542217283331,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1542217283314,
            author: 'lisi'
        },
    ]
}

const getDetail = (id) => {
    // 先返回假数据
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1542217283331,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    console.log('newBlog blogData...', blogData)
    // blogData是一个博客对象  包含title content属性
    return {
        id: 3 // 表示新建博客，插入到数据表里面的id
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log('updateBlog blogData...', blogData)
    // blogData是一个博客对象  包含title content属性
    return false
}

const delBlog = (id) => {
    // id 就是要删除的博客的id
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}