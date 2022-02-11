const ContenedorSequelize = require("../ContainerDB");

class OperationsDaoDB extends ContenedorSequelize {
  constructor() {
    super("operations");
  }
}

module.exports = OperationsDaoDB;
