const User = require("../../models/user");
const fs = require("fs");

module.exports = {
  async saveFile(req, res) {
    const { file, email } = req.body;

    try {
      const userFind = await User.findOne({ email });
      console.log(userFind);

      if (!userFind) {
        return res.send({
          error: true,
          message: "Usuário não encontrado!"
        });
      }

      await userFind.updateOne({
        img: {
          data: fs.readFileSync(file.path),
          contentType: "image/png"
        }
      });

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
