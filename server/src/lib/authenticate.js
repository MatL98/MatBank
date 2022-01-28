const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Container = require("../dao/daoUser");
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
      const result = await bank.getAll()
      const dataParsed = JSON.parse(result)
      const getUser = dataParsed.filter((usr)=>{ return usr.mail === mail})
      if (getUser[0]) {
        const user = getUser[0];
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
      const result = await bank.save(newUser)
      const dataParsed = JSON.parse(result)
      console.log(dataParsed)
      newUser.id = dataParsed.id;
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
