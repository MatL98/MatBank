const express = require("express");
const { Router } = express;
const router = new Router();
const passport = require("passport");
const Container = require("../controllers/dao/daoSession")
const session = new Container()



router.post("/login", async (req, res, next) => {
  passport.authenticate("local-login", (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json("invalid");
    } else {
      req.logIn(user, (err) => {
        const user = {
          id: 1,
          user: req.user
        }
        res.json(req.user);
        session.save(user)
      }); 
    }
  })(req, res, next);
});

router.post("/signUp", (req, res, next) => {
  passport.authenticate("local-signUp", (err, user) => {

    if (err) throw err;
    if (!user) {
      res.json("no");
    } else {
      req.logIn(user, (err) => {
        res.json("ok");
      });
    }
  })(req, res, next);
});


router.get("/logOut", async (req, res)=>{
  await session.delete(1)
})

module.exports = router;
