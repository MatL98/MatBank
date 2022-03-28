const { DataTypes } = require("sequelize");
const db = require("../db/db");

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mail: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);


module.exports = {User};
