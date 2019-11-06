const routes = require("express").Router();
const userController = require("../api/controllers/userController");

routes.get("/io", (req, res) => {
  return res.send("Olá");
});

routes.get("/register", userController.store);

module.exports = routes;
