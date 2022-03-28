const express = require("express");
const { Router } = express;
const router = new Router();
const {
  getOperation,
  saveOperations,
  updateOperations,
  deleteOperations,
} = require("../controllers/atmController");
const { verifyToken } = require("../middlewares/auth");

router.get("/home", verifyToken, getOperation);

router.post("/form", verifyToken, saveOperations);

router.patch("/:id", verifyToken, updateOperations);

router.delete("/:id", verifyToken, deleteOperations);

module.exports = router;
