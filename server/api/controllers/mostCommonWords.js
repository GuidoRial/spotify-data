module.exports = {
  async getMostCommonWords(req, res) {
    try {
      let words = req.words;

      let wordAppearances = {};

      for (let word of words) {
        if (!wordAppearances[word]) {
          wordAppearances[word] = 1;
        } else {
          wordAppearances[word] += 1;
        }
      }


      return res.status(200).json(wordAppearances);
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
