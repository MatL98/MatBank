const User = require("../Models/user");
const Operation = require("../Models/operation");
const sequelize = require
class Bank {
  constructor(table) {
    this.table = table;
  }

  save = async (op) => {
    try {
      const opSaved = await Operation.create(op);
      return opSaved;
    } catch (error) {
      console.log(error);
    }
  };

  saveUsr = async (usr) => {
    try {
      const usrSaved = await User.create(usr);
      return usrSaved;
    } catch (error) {
      console.log(error);
    }
  };

  getUser = async (id) => {
    try {
      const getUsr = await User.findOne({ id: id });
      return getUsr;
    } catch (error) {
      console.log(error);
    }
  };

  getUserMail = async (mail) => {
    try {
      const getUsr = await User.findAll({ where: { mail: mail } });
      return getUsr;
    } catch (error) {
      console.log(error);
    }
  };

  getOperations = async () => {
    try {
      const results = await Operation.findAll();
      return results;
    } catch (error) {
      console.log(error);
    }
  };

  update = async (id, updateOp) => {
    try {
      const updt = await Operation.findOne({ where: { id: id } }).update({
        concept: updateOp.concept,
        amount: updateOp.amount,
      });
      return updt;
    } catch (error) {
      console.log(error);
    }
  };

  sumCash = async () => {
    try {
      const totalCash = await Operation.findAll({
        attributes: [
          [sequelize.fn("sum", Operation.col("amount")), "totalCash"],
        ],raw: true
      });
      return totalCash;
    } catch (error) {
      console.log(error);
    }
  };

  delete = async (id) => {
    try {
      const dlt = await (
        await Operation.findOne({ where: { id: id } })
      ).destroy();
      return dlt;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = Bank;
