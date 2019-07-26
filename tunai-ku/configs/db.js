const sequelize = require("sequelize");

module.exports = new sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres"
  }
);
