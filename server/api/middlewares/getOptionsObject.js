const getOptionsObject = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
    req.optionsObject = {
      headers: {
        Authorization: req.headers.authorization,
      },
    };
  }

  return next();
};

module.exports = getOptionsObject;
