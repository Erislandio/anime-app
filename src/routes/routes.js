const routes = require("express").Router();

routes.get("/io", (req, res) => {
  return res.send("Olá");
});

module.exports = routes;
