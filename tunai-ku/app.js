require("dotenv").config();
process.env.TZ;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");
const { Loan } = require("./src/models");

app.use(bodyParser.json());
app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  await Loan.sync({ alter: true });
  console.log(`App listening on ${PORT}`);
});
