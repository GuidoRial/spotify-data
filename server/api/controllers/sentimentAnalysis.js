let Analyzer = require("natural").SentimentAnalyzer;
let stemmer = require("natural").PorterStemmer;
let englishAnalyzer = new Analyzer("English", stemmer, "afinn");
let spanishAnalyzer = new Analyzer("Spanish", stemmer, "afinn");

module.exports = {
  async getSentimentAnalysis(req, res) {
    try {
      let language = req.query.language;
      let lyrics = req.lyrics;
      if (lyrics === "no lyrics found") {
        return res.status(404).json({ message: lyrics });
      }
      lyricsArray = lyrics.split(" ");
      let songSentimentAnalysis;

      if (language === "English") {
        songSentimentAnalysis = englishAnalyzer.getSentiment(lyricsArray);
      } else {
        songSentimentAnalysis = spanishAnalyzer.getSentiment(lyricsArray);
      }

      return res.status(200).json({ lyrics, songSentimentAnalysis });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
