const {
  sumOperation,
  getAllOperation,
  saveOperation,
  updateOperation,
  deleteOperation,
} = require("../services/operationServices");
const { getSessionById } = require("../services/sessionServices");
const moment = require("moment");

const getOperation = async (req, res) => {
  const id = await getSessionById();
  const results = await getAllOperation(id);
  const sum = await sumOperation(id);
  res.status(200).json({ data: results, sum: sum });
};

const saveOperations = async (req, res) => {
  const { concept, amount, type, UserId } = req.body;
  const operation = {
    concept: concept,
    amount: amount,
    date: moment().format("D/MM/YY"),
    type: type,
    UserId,
  };
  const checkType = async (operation) => {
    let cash = await sumOperation(operation.UserId);
    if (operation.type === "entry") {
      await saveOperation(operation);
      await sumOperation(operation.UserId);
    } else if (operation.type === "out") {
      const newOp = { ...operation, amount: -Math.abs(operation.amount) };
      if (cash != null || cash > operation.amount) {
        await saveOperation(newOp);
        await sumOperation(operation.UserId);
      } else {
        res.json("No puedes retirar este monto");
      }
    }
  };

  await checkType(operation);
};

const updateOperations = async (req, res) => {
  const { concept, amount } = req.body;
  const id = +req.params.id;
  const updateOp = {
    concept: concept,
    amount: +amount,
  };
  await updateOperation(id, updateOp);
  res.status(200).send("se actualizó con exito");
};

const deleteOperations = async (req, res) => {
  const id = +req.params.id;
  await deleteOperation(id);
  res.status(200).send("se eliminó con exito");
};
module.exports = {
  getOperation,
  saveOperations,
  updateOperations,
  deleteOperations,
};
