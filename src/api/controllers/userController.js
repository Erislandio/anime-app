const User = require("../models/user");

module.exports = {
  async store(req, res) {
    const { name, email, password, img, zipcode, tel, birth, genre } = req.body;

    try {
      const findUser = await User.findOne({ email });

      if (findUser) {
        return res.send({
          error: "Usuário/email já foi cadastrado"
        });
      }

      const user = await new User({
        name,
        email,
        password,
        img,
        zipcode,
        tel,
        birth,
        genre
      });

      await user.save();

      return res.status(200).send(user);
    } catch (error) {
      return res.send({
        error
      });
    }
  }
};
