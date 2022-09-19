const auth = require("./auth");
const lyrics = require("./lyrics");
const sentimentAnalysis = require("./sentimentAnalysis");
const mostCommonWords = require("./mostCommonWords");
const spotify = require("./spotify");

const controllers = {
  auth,
  lyrics,
  sentimentAnalysis,
  mostCommonWords,
  spotify,
};

module.exports = controllers;
