const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Container = require("../db/ContainerKnex");
const bank = new Container();
const encrypt = require("./encrypt");

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

      const result = await bank.getUserMail(mail);
      if (result[0]) {
        const user = result[0];
        const pass = await encrypt.comparePassword(password, user.password);
        if (pass) {
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
      const result = await bank.saveUsr(newUser);
      newUser.id = result[0];
      return done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const usr = await bank.getUser(id);
  done(null, usr);
});
