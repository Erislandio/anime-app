const { Schema, model } = require("mongoose");

const FavoritesSchema = new Schema({
  anime: {
    type: String
  }
})

module.exports = model('Favorite', FavoritesSchema)