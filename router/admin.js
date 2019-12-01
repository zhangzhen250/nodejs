const express = require("express");
const router = express.Router();
const admin = require("../middleware/admin/admin.js");

var bodyParser = require("body-parser");

// 创建 application/json 解析
var jsonParser = bodyParser.json();

// 创建 application/x-www-form-urlencoded 解析
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.use(jsonParser, (req, res, next) => {
  let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g;
  // console.log("Time: ", Date.now());
  console.log(req.body.nickName.length);
  if (req.body.nickName.length < 2) {
    throw res.json({
      code: 100,
      message: "昵称最少两个字符"
    });
  } else if (!reg.test(req.body.email) ) {
    throw res.json({
      code: 100,
      message: "请输入正确的邮箱"
    });
  } else {
    next();
  }
});

// define the
router.post("/signin", jsonParser, admin.signin);

module.exports = router;
