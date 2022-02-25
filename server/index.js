const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const sequelize = require("./src/db/db")
const routerAtm = require("./src/routes/atmLogic");
const routerLogin = require("./src/routes/login");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");


const app = express();
require("./src/lib/authenticate");

async function dbConnection(){
  try {
    await sequelize.authenticate();
    console.log('Connection success.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

require("dotenv").config()
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());
require("./src/Models/association")
dbConnection()
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 300000}
  })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cors());
app.use("/", routerLogin);
app.use("/api", routerAtm);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
