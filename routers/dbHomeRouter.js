const express = require('express')
const router = express.Router()
const controls = require('../controls/dbHomeControls')

// 豆瓣首页路由
router.get('/homeData', controls.getHomeData)
// 豆瓣groupData路由
router.get('/groupData',controls.getGroupData)
module.exports = router