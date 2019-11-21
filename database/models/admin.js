var Sequelize= require("sequelize");
var db = require("../config/dbConn.js");

module.exports= db.defineModel("admin",{
    id:{
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nickName:Sequelize.STRING(128),
    telphone:Sequelize.STRING(11),
    email:Sequelize.STRING(100),
    password:Sequelize.STRING(100)

})