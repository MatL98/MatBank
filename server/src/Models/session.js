const { DataTypes } = require("sequelize");
const db = require("../db/db");

const Sessions = db.define(
  "Session",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
			autoIncrement: true
    },
    user: DataTypes.JSON,
  },
  {
    timestamps: false,
  }
);

module.exports = Sessions;
