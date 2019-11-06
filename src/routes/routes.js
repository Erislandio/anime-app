const routes = require("express").Router();
const userController = require("../api/controllers/userController");

routes.get("/io", (req, res) => {
  return res.send("Olá");
});

routes.post("/register", userController.store);
routes.post("/user/find", userController.indexUser);

module.exports = routes;
