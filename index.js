require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("TJO - Logging Server");
});

app.use("/", require("./loggingRouter.js"));

<<<<<<< HEAD
const listener = app.listen(51969, () => {
=======
const listener = app.listen(process.env.PORT, () => {
>>>>>>> 6ff4490e6f1e5ec6409a3845c2ffe5a0dc9a9b26
  console.log("Your app is listening on port " + listener.address().port);
  console.log(listener.address())
});

module.exports = app;