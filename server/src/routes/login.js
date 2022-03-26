const express = require("express");
const { authLogin, authSignUp, authLogOut } = require("../controllers/loginController");
const { verifyToken } = require("../middlewares/auth");
const { Router } = express;
const router = new Router();

router.post("/login", authLogin);

router.post("/signUp", authSignUp);

router.get("/logOut", authLogOut);

module.exports = router;
