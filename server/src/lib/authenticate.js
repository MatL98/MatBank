const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Container = require("../controllers/dao/daoUser");
const users = new Container();
const encrypt = require("./encrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
      const result = await users.getAll();
      const dataParsed = JSON.parse(result);
      const getUser = dataParsed.filter((usr) => {
        return usr.mail === mail;
      });
      if (getUser[0]) {
        const user = getUser[0];
        const pass = await encrypt.comparePassword(password, user.password);
        if (pass) {
          let token = jwt.sign({ user: user }, process.env.SESSION_SECRET, {
            expiresIn: "2h",
          });
          user.token = token;
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
      const dataUser = await users.getAll();
      const dataUserParse = JSON.parse(dataUser);
      const userMail = dataUserParse.find((usr)=>{
        return usr.mail === mail
      })
      if (userMail === undefined) {
        newUser.password = await encrypt.encryptPassword(password);
        const result = await users.save(newUser);
        const dataParsed = JSON.parse(result);
        newUser.id = dataParsed.id;
        let token = jwt.sign({ user: newUser }, process.env.SESSION_SECRET, {
          expiresIn: "2h",
        });
        newUser.token = token;
        return done(null, newUser);
      } else{
        return done(null, false)
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const usr = await users.getById(id);
  done(null, usr);
});
