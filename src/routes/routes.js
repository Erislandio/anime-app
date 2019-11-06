const routes = require("express").Router();
const userController = require("../api/controllers/user/userController");
const authController = require("../api/controllers/auth/authController");
const authMiddleware = require("../api/middlewares/auth");

routes.post("/register", userController.store);
routes.post("/user/find", authMiddleware, userController.indexUser);
routes.post("/login", authController.login);

module.exports = routes;
