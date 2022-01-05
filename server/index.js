const express = require("express")
const bodyParser = require("body-parser")
const port = process.env.PORT || 3001
const routerAtm = require("./src/routes/atmLogic")
const routerLogin = require("./src/routes/login")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const cors = require('cors')
const passport = require('passport')

const app = express()
require('./src/lib/authenticate')




app.use(bodyParser.json({limit: "10mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "10mb", extended: true}))
app.use(express.json())
app.use(cookieParser('xhiperMegaSecreTx'))
app.use(session({
  secret: 'xhiperMegaSecreTx',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())



app.use("/", routerLogin)
app.use("/", routerAtm)

app.listen(port, ()=>{
  console.log(`Server is running on ${port}`)
})
