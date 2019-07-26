const express = require("express");
const router = express.Router();
const { installment: installmentController } = require("../src/controllers");

router.get("/get-installment", installmentController.getInstallment);

module.exports = router;
