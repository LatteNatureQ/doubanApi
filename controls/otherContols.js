const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const dataPath = path.resolve(__dirname, '../static')
const url = require('url')
// 个性网名接口
exports.getFemaleName = (req, res) => {
    let page = url.parse(req.url, true).query.page
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    if (page) {
        axios.get('https://www.apiopen.top/femaleNameApi', {
            page
        }).then(response => {
            res.send(response.data)
        }, err => {
            res.send('error')
        })
    } else {
        res.json({
            code: 404,
            message: '缺少page参数'
        })
    }

}