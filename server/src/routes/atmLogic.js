const express = require("express")
const { Router } = express
const router = new Router()
const moment = require("moment")
const knex = require("../db/db")
const Container = require("../db/ContainerKnex")
const bank = new Container(knex("operations"))



let getCashTotal = 0

router.get("/home", async (req, res)=>{
  const results = await knex.from("operations").select("*").orderBy('id','desc').limit("10").then((data)=> {res.json({data})})
  /* let result = await bank.getAll().then((data)=>{
    console.log(data);
  }) */
  
  })

router.post("/form", (req, res)=>{
  const {concept, amount, type} = req.body
  const operation = {
    concept: concept,
    amount: amount,
    date: moment().format('Do MM YY, h:mm:ss a'),
    type: type
  }
  /* knex("operations").insert(operation).then((data)=>{
    res.json({data});
  }).catch(err=>console.log(err)) */
  
  const checkType = async (operation) =>{
    if ( operation.type === 'entry' ) {
      bank.save(operation)
        const cash = await knex('operations').sum({total: 'amount'}).then((data)=> console.log(data[0].total))
      } else if(operation.type === 'cashOut'){
        const newOp = {
          concept: operation.concept,
          amount: -Math.abs(operation.amount),
          date: operation.date,
          type: operation.type
        }
        bank.save(newOp)
        const cash = await knex('operations').sum({total: 'amount'}).then((data)=> console.log(data[0].total))
        console.log(cash);
      }
    }
    
  checkType(operation)
})

router.put("/:id", (req, res)=>{
  const {concept, amount} = req.body
  const newOperation = {concept, amount}
  const id = req.params.id

  /* knex.from("operations").where("id", id).update(newOperation).then((data)=> {data})
  .catch((err)=> err) */
  res.send("se actualizo con exito")
})

module.exports = router