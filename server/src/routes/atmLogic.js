const express = require("express")
const { Router } = express
const router = new Router()
const moment = require("moment")
const knex = require("../db/db")
const Container = require("../db/ContainerKnex")
const bank = new Container(knex("operations"))



router.get("/home", async (req, res)=>{
  const results = await knex.from("operations").select("*").orderBy('id','desc').limit("10")
  const sum = await knex('operations').sum({total: 'amount'})
  res.json({data: results, sum: sum[0].total})
  })

router.get("/sum",  async (req, res)=>{
  let result = await bank.getAll()
  res.json(result)
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
        await knex('operations').sum({total: 'amount'}).then((data)=> console.log(data[0].total))
      } else if(operation.type === 'cashOut'){
        const newOp = {...operation,
          amount: -Math.abs(operation.amount)
        }
        bank.save(newOp)
        await knex('operations').sum({total: 'amount'}).then((data)=> console.log(data[0].total))
      }
    }
  
  checkType(operation)
})

router.put("/:id", (req, res)=>{
  const {concept, amount} = req.body
  const id = req.params.id
  const updateOp = {
    concept: concept,
    amount: amount
  }

  console.log(updateOp, id);

  //bank.update(id, updateOp)
  res.send("se actualizo con exito")
})

module.exports = router