let Analyzer = require("natural").SentimentAnalyzer;
let stemmer = require("natural").PorterStemmer;
let englishAnalyzer = new Analyzer("English", stemmer, "afinn");
let spanishAnalyzer = new Analyzer("Spanish", stemmer, "afinn");

module.exports = {
  async getSentimentAnalysis(req, res) {
    try {
      let language = req.query.language;
      let lyrics = req.lyrics;
      let lyricsFound = true;
      if (lyrics === "no lyrics found") {
        lyricsFound = false;
      }
      lyricsArray = lyrics.split(" ");
      let songSentimentAnalysis;

      if (language === "English") {
        songSentimentAnalysis = englishAnalyzer.getSentiment(lyricsArray);
      } else {
        songSentimentAnalysis = spanishAnalyzer.getSentiment(lyricsArray);
      }

      return res
        .status(200)
        .json({ lyrics, songSentimentAnalysis, lyricsFound });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
