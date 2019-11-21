var Sequelize = require('sequelize');
var db = require('../config/dbConn.js');

module.exports = db.defineModel('todolist', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: Sequelize.STRING(100),
    academy: Sequelize.STRING(100),
    start_date: Sequelize.STRING(10),
    end_date: Sequelize.STRING(10),
    days: Sequelize.DECIMAL(10, 1),
    place: Sequelize.STRING(20),
    owner: Sequelize.STRING(10),
    operator: Sequelize.STRING(10),
    is_fee: Sequelize.BIGINT(1),
    state: Sequelize.BIGINT(2),  // 开启，关闭
    bz: Sequelize.STRING(255),
});