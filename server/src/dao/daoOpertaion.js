const ContenedorSequelize = require("../db/ContainerDB");

class OperationsDaoDB extends ContenedorSequelize {
  constructor() {
    super("operations");
  }
}

module.exports = OperationsDaoDB;
