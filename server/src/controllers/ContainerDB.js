const User = require("../Models/user");
const Operation = require("../Models/operation");


class Bank {
  constructor(table) {
    if (table === "users") {
      this.table = User;
    } else if (table === "operations") {
      this.table = Operation;
    }
  }

  save = async (op) => {
    try {
      const saved = await this.table.create(op);
      const data = JSON.stringify(saved, null, 4);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  getById = async (id) => {
    try {
      const getUsr = await this.table.findOne({ id: id });
      const data = JSON.stringify(getUsr, null, 4);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  getAll = async () => {
    try {
      const results = await this.table.findAll();
      const data = JSON.stringify(results, null, 4);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  getAllOp = async (id) => {
    try {
      const results = await User.findAll({where: {id:id}, include: [{model: Operation}]});
      const data = JSON.stringify(results, null, 4);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  update = async (id, updateOp) => {
    try {
      const updt = await this.table.findOne({ where: { id: id } }).update({
        concept: updateOp.concept,
        amount: updateOp.amount,
      });
      return updt;
    } catch (error) {
      console.log(error);
    }
  };

  sumCash = async (id) => {
    try {
      const sum = await this.table.sum("amount", { where: { UserId: id } });
      return sum
    } catch (error) {
      console.log(error);
    }
  };

  delete = async (id) => {
    try {
      const dlt = await (
        await this.table.findOne({ where: { id: id } })
      ).destroy();
      return dlt;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = Bank;