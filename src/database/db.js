const mongoose = require("mongoose");
const credential = require("./credentials");
const mongodbUri = credential.mongo.development.connectionString;
const chalk = require("chalk");
const env = require("./.env");

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  env
});

const conn = mongoose.connection;

conn.on("error", console.error.bind(console, "Error!"));

conn.once("open", () => {
  console.log(chalk.bgMagenta(`connected to mlab!`));
});

mongoose.Promise = global.Promise;
module.exports = mongoose;
