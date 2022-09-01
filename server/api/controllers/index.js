const auth = require("./auth");
const lyrics = require("./lyrics");
const sentimentAnalysis = require("./sentimentAnalysis");

const controllers = {
  auth,
  lyrics,
  sentimentAnalysis,
};

module.exports = controllers;
