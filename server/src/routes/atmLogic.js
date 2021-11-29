const express = require("express")
const { Router } = express
const router = new Router()
const moment = require("moment")
const knex = require("../db/db")


let arrMoney = []
let getCashTotal = 0

router.get("/home", async (req, res)=>{
    const results = await knex.from("operations").select("*").orderBy('id','desc').limit("10").then((data)=> {res.json({data})})
  })

router.post("/form", (req, res)=>{
  const {concept, amount, type} = req.body
  const operation = {
    concept: concept,
    amount: amount,
    date: moment().format('Do MM YY, h:mm:ss a'),
    type: type
  }

  knex("operations").insert(operation).then((data)=>{
    res.json({data});
  }).catch(err=>console.log(err))
  
  const checkType = (operation) =>{
      if ( operation.type === 'entry' ) {
        knex
          .from("operations")
          .select("amount")
          .then((data)=>{
          let cashDB = data.map(x => x.amount)
          let cashTotal = cashDB.reduce((acc, i)=> acc + i)
          getCashTotal = cashTotal
          console.log(`Su saldo es de ${getCashTotal}`); 
          })
      } else{
        if (getCashTotal === 0 || operation.amount > getCashTotal) {
          console.log(`No puedes retirar este monto`);
        } else {
          const removeCash = getCashTotal - operation.amount
          getCashTotal = removeCash
        }
      }
  }
  
  
  checkType(operation)
})

router.put("/:id", (req, res)=>{
  const {concept, amount} = req.body
  const newOperation = {concept, amount}
  const id = req.params.id

  knex.from("operations").where("id", id).update(newOperation).then((data)=> {data})
  .catch((err)=> err)
  res.send("se actualizo con exito")
})

module.exports = router