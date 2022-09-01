const auth = require("./auth");
const lyrics = require("./lyrics");
const sentimentAnalysis = require("./sentimentAnalysis");
const mostCommonWords = require("./mostCommonWords");

const controllers = {
  auth,
  lyrics,
  sentimentAnalysis,
  mostCommonWords,
};

module.exports = controllers;
