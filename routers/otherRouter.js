const express = require('express')
const router = express.Router()
const controls = require('../controls/otherContols')

// 个性网名路由
router.get('/femaleName', controls.getFemaleName)

module.exports = router