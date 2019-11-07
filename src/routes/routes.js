const routes = require("express").Router();
const userController = require("../api/controllers/user/userController");
const authController = require("../api/controllers/auth/authController");
const authMiddleware = require("../api/middlewares/auth");
const uploadFileImageUser = require("../api/controllers/user/uploadUserFile");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, res, cb) {
    cb(null, "uploads/");
  }
});

const upload = multer({ storage: storage });

routes.post("/register", userController.store);
routes.post("/user/find", authMiddleware, userController.indexUser);
routes.post("/login", authController.login);
routes.post("/upload", upload.single("file"), uploadFileImageUser.saveFile);

module.exports = routes;
