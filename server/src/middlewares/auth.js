const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {

  if (!req.headers.authorization) {
    res.status(504).json({ msg: "denied" });
  } else {
    let token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
      if (err) {
        res.status(504).json("error with token");
      } else {
        next();
      }
    });
  }
};
