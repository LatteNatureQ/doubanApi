const express = require('express')
const app = express()
const path = require('path')
const router = require('./routers/dbHomeRouter')
const cors = require('cors')
const bodyParser = require('body-parser')
// 实现静态资源托管
app.use(express.static(path.join(__dirname, 'static/')))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/douban', router)
app.use(cors())
app.all('/*/', (req, res) => {
    res.send('<h1>404</h1>')
})
app.listen('8080', '127.0.0.1', err => {
    if (err) throw err
    console.log('服务开启成功,请访问127.0.0.1:8080')
})