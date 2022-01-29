const User = require("../Models/user");
const Operation = require("../Models/operation");
const sequelize = require("../db/db")

User.hasMany(Operation);
Operation.belongsTo(User, {constraints: false});

sequelize.sync({ alter: true })
  .then(() => {
    console.log("Tabla creada");
  })
  .catch((err) => err);
