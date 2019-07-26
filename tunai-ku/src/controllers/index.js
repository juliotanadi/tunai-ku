const loanController = require("./loanController");
const installmentController = require("./installmentController");

module.exports = {
  installment: installmentController,
  loan: loanController
};
