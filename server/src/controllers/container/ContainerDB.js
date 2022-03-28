const { User } = require("../../Models/user");
class Bank {
  constructor(table) {
    this.table = table;
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

  getOperationsByUser = async (id) => {
    try {
      const results = await User.findAll({
        where: { id: id },
        include: [{ model: this.table, limit: 10, order: [["id", "DESC"]] }],
      });
      const data = JSON.stringify(results, null, 4);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  update = async (id, updateOp) => {
    try {
      const updateData = {
        concept: updateOp.concept,
        amount: updateOp.amount,
      };
      const results = await this.table.update(updateData, { where: { id: id } });
      const data = JSON.stringify(results, null, 4);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  delete = async (id) => {
    console.log(id);
    try {
      if (id) {
        const results = await (
          await this.table.findOne({ where: { id: id } })
        ).destroy();
        const data = JSON.stringify(results, null, 4);
        return data
      }else{
        const results = await this.table.destroy()
        const data = JSON.stringify(results, null, 4);
        return data
      }
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = Bank;
