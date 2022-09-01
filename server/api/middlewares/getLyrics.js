const lyricsFinder = require("lyrics-finder");

async function getLyrics(req, res, next) {
  try {
    const lyrics =
      (await lyricsFinder(req.query.artist, req.query.track)) ||
      "no lyrics found";

    req.lyrics = lyrics;
    return next();
  } catch (e) {
    return res.status(400).json({ message: e.message, stack: e.stack });
  }
}

module.exports = getLyrics;
