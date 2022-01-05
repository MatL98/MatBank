const knex = require("../db/db");

class Bank {
  constructor(table) {
    this.table = table;
  }

  save = async (op) => {
    try {
      const opSaved = knex("operations").insert(op);
      return opSaved;
    } catch (error) {
      console.log(error);
    }
  };

  update = async (id, updateOp) => {
    try {
      const updt = await knex("operations")
        .where({ id: id })
        .update({ concept: updateOp.concept, amount: updateOp.amount });
      return updt;
    } catch (error) {
      console.log(error);
    }
  };

  sumCash = async () => {
    try {
      const sum = await knex("operations").sum({ total: "amount" });
      return sum[0].total;
    } catch (error) {
      console.log(error);
    }
  };

  delete = async (id) => {
    try {
      const dlt = await knex("operations").where({ id: id }).delete();
      return dlt;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = Bank;
