const ContenedorSequelize = require("../db/ContainerDB");

class UserDaoDB extends ContenedorSequelize {
  constructor() {
    super("users");
  }
}

module.exports = UserDaoDB;
