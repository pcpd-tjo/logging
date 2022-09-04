require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("TJO - Logging Server");
});

app.use("/", require("./loggingRouter.js"));

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
  console.log(listener.address())
});

module.exports = app;