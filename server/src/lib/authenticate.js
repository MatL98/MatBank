const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Container = require("../controllers/dao/daoUser");
const bank = new Container()
const encrypt = require("./encrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config()

passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const { mail } = req.body;
      const result = await bank.getAll()
      console.log(result);
      const dataParsed = JSON.parse(result)
      const getUser = dataParsed.filter((usr)=>{ return usr.mail === mail})
      if (getUser[0]) {
        const user = getUser[0];
        const pass = await encrypt.comparePassword(password, user.password);
        if (pass) {
          let token = jwt.sign({user: user}, process.env.SESSION_SECRET,{
            expiresIn: "2h"
          })
          user.token = token
          done(null, user);
        } else {
          done(null, false);
        }
      } else {
        return done(null, false);
      }
    }
  )
);

passport.use(
  "local-signUp",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const { mail } = req.body;
      const newUser = {
        username,
        mail,
        password,
      };
      newUser.password = await encrypt.encryptPassword(password);
      const result = await bank.save(newUser)
      const dataParsed = JSON.parse(result)
      newUser.id = dataParsed.id;
      let token = jwt.sign({user: newUser}, process.env.SESSION_SECRET,{
        expiresIn: "2h"
      })
      newUser.token = token
      return done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const usr = await bank.getById(id)
  done(null, usr);
});
