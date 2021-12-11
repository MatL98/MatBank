const express = require("express")
const { Router } = express
const router = new Router()
const moment = require("moment")
const knex = require("../db/db")
const Container = require("../db/ContainerKnex")
const bank = new Container(knex)



let getCashTotal = 0

router.get("/home", async (req, res)=>{
  //const results = await knex.from("operations").select("*").orderBy('id','desc').limit("10").then((data)=> {res.json({data})})
  let result = await bank.getAll().then((data)=>{
    console.log(data);
  })
  
  })

router.post("/form", (req, res)=>{
  const {concept, amount, type} = req.body
  const operation = {
    concept: concept,
    amount: amount,
    date: moment().format('Do MM YY, h:mm:ss a'),
    type: type
  }

 /*  knex("operations").insert(operation).then((data)=>{
    res.json({data});
  }).catch(err=>console.log(err)) */
  
  const checkType = (operation) =>{
    if ( operation.type === 'entry' ) {
        //const cash = knex('operations').sum({total: 'amount'}).then((data)=> { data[0].total })
        console.log(`Tu saldo es de ${cash}`);
      } else if(operation.type === 'cashOut'){
        console.log(-Math.abs(operation.amount));
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