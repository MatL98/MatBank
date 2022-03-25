class Bank {
  constructor(table) {
    console.log(table);
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

  update = async (id, updateOp) => {
    try {
      const updateData = {
        concept: updateOp.concept,
        amount: updateOp.amount,
      };
      const data = await this.table.update(updateData, { where: { id: id } });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  delete = async (id) => {
    try {
      const data = await (
        await this.table.findOne({ where: { id: id } })
      ).destroy();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = Bank;
