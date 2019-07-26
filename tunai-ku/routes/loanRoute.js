const express = require("express");
const router = express.Router();
const { loan: loanController } = require("../src/controllers");

router.post("/", loanController.insert);

module.exports = router;
