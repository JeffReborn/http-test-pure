const serverHandle = (req, res) => {
  // 设置返回格式
  res.setHeader('Content-type', 'application/json')

  const resData = {
    name: 'Jeff-',
    site: 'frontEnd Learning'
  }

  res.end(JSON.stringify(resData))
}

module.exports = serverHandle