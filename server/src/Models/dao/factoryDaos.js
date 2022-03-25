let operationDao;
let sessionDao;
let userDao;

let contenedor = "sequelize";
switch (contenedor) {
  case "local":
    productsDao = new ProductsDaoLocal();
    cartDao = new CartDaoLocal();
    break;
  case "sequelize":
    const OperationSequelize = require("./daoOperation");
    const SessionSequelize = require("./daoSession");
    const UserSequelize = require("./daoUser");

    operationDao = new OperationSequelize()
    sessionDao = new SessionSequelize()
    userDao = new UserSequelize()
    break;
}

exports.operation = operationDao;
exports.session = sessionDao;
exports.user = userDao;
