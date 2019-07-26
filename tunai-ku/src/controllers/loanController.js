const moment = require("moment");
const sequelize = require("sequelize");
const { Loan } = require("../models");

async function getLoanApplicationByDate(req, res) {
  const { Date } = req.body;

  if (!Date)
    return res.status(400).send({
      errors: [`Date is required`]
    });

  try {
    const startDate = moment(Date).subtract(7, "days");
    const endDate = moment(Date);

    const loan = await Loan.findAll({
      attributes: [
        [sequelize.fn("sum", sequelize.col("amount")), "Summary"],
        [sequelize.fn("count", sequelize.col("id")), "Count"],
        [sequelize.fn("avg", sequelize.col("amount")), "Average"]
      ],
      raw: true,
      created_at: {
        $between: [startDate, endDate]
      }
    });

    if (loan.length === 0) return res.send({ loan });

    return res.send({
      Count: loan[0].Count,
      Summary: Math.round(loan[0].Summary * 100) / 100,
      Average: Math.round(loan[0].Average * 100) / 100
    });
  } catch (error) {
    console.log(error);
  }
}

async function insert(req, res) {
  const errors = validateKtpNumber(req.body);

  if (errors.length !== 0)
    return res.status(400).send({ errors, Status: `Not valid` });

  const { Date, KTP, BirthDate, Gender, Name, Amount, Period } = req.body;

  try {
    await Loan.create({
      date: Date,
      ktp: KTP,
      birth_date: BirthDate,
      gender: Gender,
      name: Name,
      amount: Amount,
      period: Period
    });
  } catch (error) {
    return res.status(500).send({
      error
    });
  }

  return res.send({ KTP, Status: `Valid` });
}

function validateKtpNumber(data) {
  const { KTP, BirthDate, Gender } = data;

  let errors = [];

  //valida KTP length
  const ktpSplited = KTP.match(/.{2}/g);

  if (ktpSplited.length !== 8) return [...errors, `KTP number is not valid`];

  //validate province

  //validate city

  //validate sub district code

  const birthDateSplited = BirthDate.split("-");
  //validate date of birth
  const date = Number.parseInt(birthDateSplited[2]);
  if (Number.parseInt(ktpSplited[3]) > 40 && Gender === "Male")
    return [...errors, `Date of birth date is not valid`];

  if (
    Number.parseInt(ktpSplited[3]) > 40 &&
    Number.parseInt(ktpSplited[3]) !== date - 40
  )
    return [...errors, `Date of birth date is not valid`];
  else if (Number.parseInt(ktpSplited[3]) !== date)
    return [...errors, `Date of birth date is not valid`];

  //validate month of birth
  const month = Number.parseInt(birthDateSplited[1]);
  if (
    Number.parseInt(ktpSplited[4]) < 01 ||
    Number.parseInt(ktpSplited[4]) > 12
  )
    return [...errors, `Month of birth date is not valid`];

  if (Number.parseInt(ktpSplited[4]) !== month)
    return [...errors, `Month of birth date is not valid`];

  //validate year of birth
  const year = Number.parseInt(birthDateSplited[0].substring(2, 4));
  if (Number.parseInt(ktpSplited[5]) !== year)
    return [...errors, `Year of birth date is not valid`];

  return errors;
}

module.exports = {
  getLoanApplicationByDate,
  insert
};
