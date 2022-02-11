const express = require("express");
const { Router } = express;
const router = new Router();
const moment = require("moment");
const Container = require("../controllers/dao/daoOperation");
const bank = new Container();


router.get("/home",async (req, res) => {
  const results = await bank.getAllOp(1)
  const sum = await bank.sumCash(1)
  res.json({ data: results,  sum: sum   });
});

router.post("/form",async (req, res) => {
  const { concept, amount, type, UserId } = req.body;
  const operation = {
    concept: concept,
    amount: amount,
    date: moment().format("D/MM/YY"),
    type: type,
    UserId
  };

  const checkType = async (operation) => {
    let cash = await bank.sumCash(operation.UserId);
    if (operation.type === "entry") {
      await bank.save(operation);
      await bank.sumCash(operation.UserId);
    } else if (operation.type === "out") {
      const newOp = { ...operation, amount: -Math.abs(operation.amount) };
      if (cash != null || cash > operation.amount) {
        await bank.save(newOp);
        await bank.sumCash(operation.UserId);
      } else {
        res.json("No puedes retirar este monto");
      }
    }
  };

  await checkType(operation);
});

router.patch("/:id", (req, res) => {
  const { concept, amount } = req.body;
  const id = +req.params.id;
  const updateOp = {
    concept: concept,
    amount: +amount,
  };

  bank.update(id, updateOp);
  res.status(200).send("se actualizó con exito");
});

router.delete("/:id", (req, res) => {
  const id = +req.params.id;
  bank.delete(id);
  res.status(200).send("se eliminó con exito");
});

module.exports = router;
