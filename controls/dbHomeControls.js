const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const dataPath = path.resolve(__dirname, '../static')
// 豆瓣首页控制器
exports.getHomeData = (req, res) => {
    res.sendFile(path.join(dataPath, 'data/homeData.json'))
}
// groupData控制器
exports.getGroupData = (req, res) => {
    res.sendFile(path.join(dataPath, 'data/groupData.json'))
}