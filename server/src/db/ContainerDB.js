const User = require("../Models/user");
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
      const usrSaved = await User.create(usr)
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
  
  getUserMail = async (mail) =>{
    try {
      const getUsr = await User.findAll({where:{mail:mail}})
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
