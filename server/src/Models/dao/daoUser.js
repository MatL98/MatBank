const ContenedorSequelize = require("../../controllers/container/ContainerDB");
const {User} = require("../user")
const Operation = require("../operation")

class UserDaoDB extends ContenedorSequelize {
  constructor() {
    super(User);
  }
}

module.exports = UserDaoDB;
