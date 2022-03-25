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
  },
  {
    UserId: DataTypes.INTEGER,
    allowNull: true,
    references:{
      model: "users",
      key: "id"
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  },
);

module.exports ={ Operation};
