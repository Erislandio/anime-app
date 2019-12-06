const routes = require("express").Router();
const userController = require("../api/controllers/user/userController");
const authController = require("../api/controllers/auth/authController");
const authMiddleware = require("../api/middlewares/auth");
const uploadFileImageUser = require("../api/controllers/user/uploadUserFile");
const favorite = require("../api/controllers/favorites/favorites");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, res, cb) {
    cb(null, "uploads/");
  }
});

const upload = multer({ storage: storage });

routes.post("/register", userController.store);
routes.get("/user/find", authMiddleware, userController.indexUser);
routes.post("/login", authController.login);
routes.post("/upload", upload.single("file"), uploadFileImageUser.saveFile);
routes.post("/user/add/favorite", favorite.store);
routes.post("/user/list/favorite", favorite.index);
routes.post("/user/remove/favorite", favorite.remove);

module.exports = routes;
