const express = require("express");
const router = express.Router();
const loanRoute = require("./loanRoute");

router.use("/loan", loanRoute);

module.exports = router;
