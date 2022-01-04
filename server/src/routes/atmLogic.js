const express = require("express")
const { Router } = express
const router = new Router()
const moment = require("moment")
const knex = require("../db/db")
const Container = require("../db/ContainerKnex")
const bank = new Container()



router.get("/home", async (req, res)=>{
  const results = await knex.from("operations").select("*").orderBy('id','desc').limit("10")
  const sum = await knex('operations').sum({total: 'amount'})
  res.json({data: results, sum: sum[0].total})
  })


router.post("/form", (req, res)=>{
  const {concept, amount, type} = req.body
  const operation = {
    concept: concept,
    amount: amount,
    date: moment().format('D/MM/YY, h:mm:ss'),
    type: type
  }
  
  const checkType = (operation) =>{
    let cash = 0
    if ( operation.type === 'entry' ) {
        bank.save(operation)
        cash = bank.addCash()
      } else if(operation.type === 'cashOut'){
        const newOp = {...operation,
          amount: -Math.abs(operation.amount)
        }
        if ( cash === 0 || cash > newOp.amount) {
          res.json("No puedes retirar este monto")
        } else{
          bank.save(newOp)
          bank.addCash()
        }
      }
    }
  
  checkType(operation)
})

router.patch("/:id", (req, res)=>{
  const {concept, amount} = req.body
  const id = +req.params.id
  const updateOp = {
    concept: concept,
    amount: +amount
  }
  
  bank.update(id, updateOp)
  res.status(200).send("se actualizó con exito")
})


router.delete("/:id", (req, res)=>{
  const id = +req.params.id
  bank.delete(id)
  res.status(200).send("se eliminó con exito")
})

module.exports = router