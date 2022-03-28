const {User} = require("../Models/user");
const {Operation} = require("../Models/operation");
const sequelize = require("../db/db")

User.hasMany(Operation, {foreignKey: "UserId"} );
Operation.belongsTo(User, {constraints: false, foreignKey: "UserId", 
  allowNull: true,
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
});
