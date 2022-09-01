const lyricsFinder = require("lyrics-finder");

async function getWords(req, res, next) {
  try {
    const songs = JSON.parse(req.query.songs);

    let words = [];

    for (let song of songs) {
      console.log(song);
      const lyrics = (await lyricsFinder(song.artist, song.track)) || null;

      if (lyrics) {
        for (let lyric of lyrics.split(/\r\n\s\n/)) {
          words = [...words, ...lyric.split(" ")];
        }
        console.log(words);
      } else {
        console.log("no lyrics :(");
      }
    }
    req.words = words;
    return next();
  } catch (e) {
    return res.status(400).json({ message: e.message, stack: e.stack });
  }
}

module.exports = getWords;
