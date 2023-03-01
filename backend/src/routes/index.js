const express = require("express");
const feriadoController = require("../controller/feriadoController")
const router = express.Router();

router
  .get("/", feriadoController.getAllFeriados)

module.exports = router;