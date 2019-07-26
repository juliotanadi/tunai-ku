const sequelize = require("sequelize");
const db = require("../../configs/db");

module.exports = db.define(
  "Loan",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: sequelize.STRING,
    ktp: sequelize.STRING,
    birth_date: sequelize.STRING,
    gender: sequelize.STRING,
    name: sequelize.STRING,
    amount: sequelize.INTEGER,
    period: sequelize.STRING
  },
  {
    createdAt: `created_at`,
    updatedAt: `updated_at`
  }
);
