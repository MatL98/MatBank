const ContenedorSequelize = require("../../controllers/container/ContainerDB");
const {Operation} = require("../operation")
const {User} = require("./daoUser")

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
  getOperations = async (id) =>{
    const results = await User.findAll({
      where: { id: id },
      include: [{ model: Operation, limit: 10, order: [["id", "DESC"]] }],
    });
    const data = JSON.stringify(results, null, 4);
    return data;
  }
}

module.exports = OperationsDaoDB;
