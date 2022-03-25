const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const encrypt = require("./encrypt");
const jwt = require("jsonwebtoken");
const { saveUser, getAllUser, getUserById } = require("../services/userServices");
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
      const result = await getAllUser()
      const getUser = result.filter((usr) => {
        return usr.mail === mail;
      });
      if (getUser) {
        const user = getUser[0];
        const pass = await encrypt.comparePassword(password, user.password);
        if (pass) {
          let token = jwt.sign({ user }, process.env.SESSION_SECRET, {
            expiresIn: "1h",
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
      const dataUser = await getAllUser()
      const userMail = dataUser.find((usr)=>{
        return usr.mail === mail
      })
      if (userMail === undefined) {
        newUser.password = await encrypt.encryptPassword(password);
        const result = await saveUser(newUser)
        newUser.id = result.id;
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
  const usr = await getUserById(id)
  console.log(usr);
  done(null, usr);
});
