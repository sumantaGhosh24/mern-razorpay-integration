const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const paymentRoute = require("./paymentRoute");

const app = express();

mongoose.connect("mongodb://localhost:27017/paymentorder", (err) => {
  if (err) throw err;
  console.log("database connection successful");
});

app.use(bodyParser.json());
app.use(cors());

app.use("/api", paymentRoute);

app.listen(5000, () => {
  console.log(`App is running at 5000 port`);
});
