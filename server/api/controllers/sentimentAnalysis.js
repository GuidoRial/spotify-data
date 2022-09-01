var Analyzer = require("natural").SentimentAnalyzer;
var stemmer = require("natural").PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");
// getSentiment expects an array of strings

// 0.6666666666666666

module.exports = {
  async getSentimentAnalysis(req, res) {
    try {
      let lyrics = req.lyrics;
      lyricsArray = lyrics.split(" ");

      songSentimentAnalysis = analyzer.getSentiment(lyricsArray);

      return res.status(200).json({ lyrics, songSentimentAnalysis });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
