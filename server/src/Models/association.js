const User = require("../Models/user");
const Operation = require("../Models/operation");
const sequelize = require("../db/db")

User.hasMany(Operation);
Operation.belongsTo(User, {constraints: false});

sequelize.sync({ force: false })
  .then(() => {
    console.log("connected data base");
  })
  .catch((err) => err);
