const passport = require("passport");
const { saveSession, deleteSession } = require("../services/sessionServices");

const authLogin = (req, res, next) => {
    passport.authenticate("local-login", (err, user) => {
      if (err) throw err;
      if (!user) {
        res.json("invalid");
      } else {
        req.logIn(user, (err) => {
          const user = {
            id: user.id,
            user: req.user,
          };
          console.log(user);
          res.json({
            dataUser: user.mail,
            token: user.token,
            idUser: user.id,
          });
          saveSession(user);
        });
      }
    })(req, res, next);
};

const authSignUp = (req, res, next) =>{
		passport.authenticate("local-signUp", (err, user) => {
			if (err) throw err;
			if (!user) {
				res.json("no");
			} else {
				req.logIn(user, (err) => {
					res.json(req.user.mail);
				});
			}
		})(req, res, next);
}

const authLogOut = async (req, res) =>{
		let id = req.body.id
		await deleteSession(id)
}

module.exports = {authLogin, authSignUp, authLogOut}
