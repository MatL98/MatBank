
const knex = require("../db/db")

class Bank {
  constructor(table) {
    this.table = table;
  }

  save = (op) => {
    knex("operations")
      .insert(op)
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  };

  getAll = () => {
    const newData = knex("operations").select("*").orderBy("id", "desc").limit("10");
    const data = JSON.parse(newData)
    return data;
  };

  update =  (id, updateOp) => {
    knex("operations")
      .where({ id: id })
      .update({ concept: updateOp.concept, amount: updateOp.amount })
      .then((data)=> console.log({data}))
      .catch((err) => err);
  };

  addCash = () => {
    knex("operations")
      .sum({ total: "amount" })
      .then((data) => {
        console.log(data.map((x) => console.log(x)));
      })
      .catch((err) => err);
  };
}

module.exports = Bank;
