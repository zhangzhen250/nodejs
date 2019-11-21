const express = require('express')
const router = express.Router();
const admin = require("../middleware/admin/admin.js")

var bodyParser = require('body-parser')

// 创建 application/json 解析
var jsonParser = bodyParser.json();

// 创建 application/x-www-form-urlencoded 解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.use( (req, res, next)=> {
    console.log('Time: ', Date.now())
    // throw res.end("cuowule");

    next()
  })

  // define the 
  router.get('/login', function (req, res) {
    res.send('我是用来登录的')
  })
  // define the 
  router.post('/signin',jsonParser,admin.signin)
  
  module.exports = router