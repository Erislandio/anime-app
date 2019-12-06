const User = require("../../models/user");
const fs = require("fs");

module.exports = {
  async saveFile(req, res) {
    const { file } = req;
    const { email } = req.body;

    try {
      const update = { img: { data: fs.readFileSync(file.path) } };

      const userFind = await User.findOneAndUpdate(email, update).select(
        "-password"
      );

      await userFind.save();

      return res.send({
        userFind
      });
    } catch (error) {
      return res.send({
        error: true,
        message: "Não foi possivel carregar a imagem",
        description: error
      });
    }
  }
};

//   var newItem = new Item();
//   newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//   newItem.img.contentType = ‘image/png’;
//   newItem.save();
