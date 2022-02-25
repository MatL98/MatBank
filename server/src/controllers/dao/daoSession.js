const ContenedorSequelize = require("../ContainerDB");

class SessionDaoDB extends ContenedorSequelize {
  constructor() {
    super("session");
  }
}

module.exports = SessionDaoDB;
