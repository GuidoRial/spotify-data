const getToken = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    req.optionsObject = {
      headers: {
        Authorization: req.headers.authorization,
        // 'Content-Type': 'application/json',
      },
    };
  }

  return next();
};

module.exports = getToken;
