const { DataTypes } = require("sequelize");
const db = require("../db/db");

const Session = db.define(
  "Session",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user: DataTypes.JSON,
  },
  {
    timestamps: false,
  }
);

module.exports = {Session};
