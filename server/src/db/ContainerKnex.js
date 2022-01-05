const knex = require("../db/db");

class Bank {
  constructor(table) {
    this.table = table;
  }

  save = async (op) => {
    try {
      const opSaved = await knex("operations").insert(op);
      return opSaved;
    } catch (error) {
      console.log(error);
    }
  };
  
  saveUsr = async (usr) => {
    try {
      const usrSaved = await knex("users").insert(usr);
      return usrSaved;
    } catch (error) {
      console.log(error);
    }
  };

  getUser = async (id) =>{
    try {
      const getUsr = await knex("users").where({id: id})
      return getUsr
    } catch (error) {
      console.log(error);
    }
  }

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
