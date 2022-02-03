const ContenedorSequelize = require("../ContainerDB");

class UserDaoDB extends ContenedorSequelize {
  constructor() {
    super("users");
  }
}

module.exports = UserDaoDB;
