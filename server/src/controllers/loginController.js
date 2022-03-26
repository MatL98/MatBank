const passport = require("passport");
const { saveSession, deleteSession } = require("../services/sessionServices");

const authLogin = (req, res, next) => {
    passport.authenticate("local-login", (err, user) => {
      if (err) throw err;
      if (!user) {
        res.json("invalid");
      } else {
        req.logIn(user, async (err) => {
          const userData = {
            id: req.user.id,
            user: {id: req.user.id, user: req.user.mail},
          };
          res.json({
            mail: user.mail,
            token: user.token,
            idUser: user.id
          });
          await saveSession(userData);
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
		let dlt = await deleteSession()
    res.status(200).json(dlt)
}

module.exports = {authLogin, authSignUp, authLogOut}
