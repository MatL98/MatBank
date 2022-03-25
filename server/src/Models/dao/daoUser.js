const ContenedorSequelize = require("../../controllers/container/ContainerDB");
const {User} = require("../user")

class UserDaoDB extends ContenedorSequelize {
  constructor() {
    super(User);
  }
}

module.exports = UserDaoDB;
