const express = require("express");
const router = express.Router();
const loanRoute = require("./loanRoute");
const installmentRoute = require("./installmentRoute");

router.use("/installment", installmentRoute);
router.use("/loan", loanRoute);

module.exports = router;
