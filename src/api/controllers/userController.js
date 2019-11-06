const User = require("../models/user");

module.exports = {
  async store(req, res) {
    return res.send({
      ok: true
    });
  }
};
