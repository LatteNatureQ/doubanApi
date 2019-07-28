const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const axios = require('axios')
// app.use(cors())
const dataPath = path.resolve(__dirname, '../static')
// 豆瓣首页控制器
exports.getHomeData = (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.sendFile(path.join(dataPath, 'data/homeData.json'))
}
// groupData控制器
exports.getGroupData = (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    res.sendFile(path.join(dataPath, 'data/groupData.json'))
}