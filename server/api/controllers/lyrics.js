module.exports = {
  async getLyrics(req, res) {
    // Maybe move this to a middleware and analyze lyrics here?
    try {
      const lyrics =
        (await lyricsFinder(req.query.artist, req.query.track)) ||
        "no lyrics found";
      res.status(200).json({ lyrics });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
