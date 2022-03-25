const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  let bearerToken = req.get('authorization')
  if (!bearerToken) {
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

module.exports = {verifyToken}