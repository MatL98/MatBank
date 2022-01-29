const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("bank", "root", "", {
  dialect:"mysql",
  host: "localhost",
})


module.exports = sequelize

