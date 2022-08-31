const auth = require("./auth");
const lyrics = require("./lyrics");
const spotify = require("./spotify");
const controllers = {
  auth,
  lyrics,
  spotify,
};

module.exports = controllers;
