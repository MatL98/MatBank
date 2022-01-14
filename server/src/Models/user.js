const  { DataTypes } = require("sequelize");
const db = require("../db/db");


const User = db.define('User', {
    mail:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
    })

module.exports = User;