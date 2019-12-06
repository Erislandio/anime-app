const User = require("../../models/user");
module.exports = {
  async store(req, res) {
    const { id, anime } = req.body;

    const user = await User.findById(id);

    const findFav = await user.favorites.find(fav => {
      return fav.id === anime.id;
    });

    console.log(findFav);

    if (findFav) {
      return res.send({
        error: true,
        message: "Anime duplicado!"
      });
    }

    await user.updateOne({
      $push: {
        favorites: anime
      }
    });
    await user.save();

    return res.send(user);
  },
  async index(req, res) {
    const { id } = req.body;

    const fav = await User.findById(id);

    return res.status(200).send(fav.favorites);
  },
  async remove(req, res) {
    const { id, anime_id } = req.body;

    const user = await User.findById(id);

    await user.favorites.forEach(fav => {
      if (fav.id === anime_id) {
        user.favorites.splice(fav, 1);
      }
    });

    await user.save();

    return res.send({
      removal: true,
      user
    });
  }
};
