const ContenedorSequelize = require("../../controllers/container/ContainerDB");
const {Session} = require("../session")

class SessionDaoDB extends ContenedorSequelize {
  constructor() {
    super(Session);
  }
}

module.exports = SessionDaoDB;
