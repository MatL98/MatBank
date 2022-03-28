const ContenedorSequelize = require("../../controllers/container/ContainerDB");
const {Operation} = require("../operation")

class OperationsDaoDB extends ContenedorSequelize {
  constructor() {
    super(Operation);
  }

  sumCash = async (id) => {
    try {
      const sum = await Operation.sum("amount", { where: { UserId: id } });
      return sum;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = OperationsDaoDB;
