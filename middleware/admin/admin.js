const sequelize = require("../../database/models/admin.js")

exports.signin = (req,res)=>{
    if (!req.body) return res.sendStatus(400)
    sequelize.create(
        {
            nickName:req.body.nickName,
            telphone:req.body.telphone,
            email:req.body.email,
            password:req.body.password,
            createUser:req.body.nickName,
            updateUser:req.body.nickName
        }
    )
    res.json({
        code:200,
        message:"注册成功"
    })
} 