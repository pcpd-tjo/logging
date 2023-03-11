require("dotenv").config();

const { readdirSync } = require("node:fs");
const { join } = require("node:path");

const { onRequest } = require("firebase-functions").https;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("TJO Logging Server: v2");
});

const routesPath = join(__dirname, 'logging-server');
const routeFiles = readdirSync(routesPath).filter(file => file.endsWith('.js'));

for (const file of routeFiles) {
  const filePath = join(routesPath, file);
  const route = require(filePath);
  //console.log(file.split(".")[0])
  app.use("/logging/" + file.split(".")[0], route)
}

const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
    console.log("Local Development: http://localhost:" + listener.address().port+"/");
});

module.exports = app;