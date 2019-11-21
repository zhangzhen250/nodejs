var express = require("express");
var app = express();
var cors =require("cors");

const admin = require("./router/admin")

// 设置跨域配置项
app.use(
  cors({
    origin: ["http://localhost:8080"],
    methods: ["GET", "POST"],
    alloweHeaders: ["Conten-Type", "Authorization"]
  })
);

app.use(express.static('./public'));

// 登录注册路由
app.use('/admin', admin);



app.listen(2500, function() {
    console.log("服务已启动");
  });
  