const moment = require("moment");

async function getInstallment(req, res) {
  const { Date, Amount, Period } = req.body;

  if (!Date || !Amount || !Period) return res.status(400).send();

  let interest = 0;

  if (Number.parseInt(Period) > 18) interest = (Amount * 1.59) / 100;
  else interest = (Amount * 1.68) / 100;

  let report = [];

  for (let i = 0; i < Period; i++) {
    const Capital = Amount / Period;
    report = [
      ...report,
      {
        DueDate: moment(Date)
          .add(i + 1, "months")
          .format("YYYY-MM-DD"),
        Capital,
        Interest: interest,
        Total: Capital + interest
      }
    ];
  }

  return res.send({
    report,
    Capital: Amount,
    Interest: interest * Period,
    Total: Amount + interest * Period
  });
}

module.exports = {
  getInstallment
};
