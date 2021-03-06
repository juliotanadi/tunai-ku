const express = require("express");
const router = express.Router();
const { loan: loanController } = require("../src/controllers");

router.get("/get-loan-application", loanController.getLoanApplicationByDate);
router.post("/", loanController.insert);

module.exports = router;
