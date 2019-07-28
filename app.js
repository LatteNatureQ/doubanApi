const express = require('express')
const app = express()
const path = require('path')
const router = require('./routers/dbHomeRouter')
const otherRouter = require('./routers/otherRouter')
const bodyParser = require('body-parser')
const cors = require('cors')
// 实现静态资源托管
app.use(express.static(path.join(__dirname, 'static/')))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/douban', router)
app.use('/other', otherRouter)
app.use(cors())
// app.use('',cors())

app.all('/*/', (req, res) => {
    // app.use(cors())
    res.send('<h1>404</h1>')
})

app.listen('8080', '127.0.0.1', err => {
    if (err) throw err
    console.log('服务开启成功,请访问127.0.0.1:8080')
})