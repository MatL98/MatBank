const { DataTypes } = require("sequelize");
const db = require("../db/db");

const Operation = db.define(
  "Operation",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    concept: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    date: DataTypes.STRING,
    type: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = Operation;
