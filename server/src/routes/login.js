const express = require("express");
const { Router } = express;
const router = new Router();
const passport = require("passport");
const Container = require("../db/ContainerKnex");
const bank = new Container();



router.post(
  "/login",(req, res, next)=>{
		passport.authenticate("local-login",(err, user) =>{
			if(err) throw err
			if (!user) {
				res.send("No pudo logearse")
			} else {
				req.logIn(user, err =>{
					res.json(req.user.mail)
				})
			}
		})(req, res, next)
});

router.post(
  "/signUp",(req, res, next)=>{
		passport.authenticate("local-signUp",(err, user) =>{
			if(err) throw err
			if (!user) {
				res.json("no")
			} else {
				req.logIn(user, err =>{
					res.json("ok")
				})
			}
		})(req, res, next)
});


module.exports = router;
