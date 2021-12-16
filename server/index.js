const express = require("express")
const bodyParser = require("body-parser")
const port = process.env.PORT || 3001
const routerAtm = require("./src/routes/atmLogic")
const cors = require('cors')
const app = express()



app.use(bodyParser.json({limit: "10mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "10mb", extended: true}))
app.use(express.json())
app.use(cors())



app.use("/", routerAtm)

app.listen(port, ()=>{
  console.log(`Server is running on ${port}`)
})
