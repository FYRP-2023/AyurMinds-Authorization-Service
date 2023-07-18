const jwt = require("jsonwebtoken");
const logger = require("../helpers/appLogger");

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      logger.error("Invalid Authentication : Token not found");
      return res
        .status(400)
        .json({ msg: "Invalid Authentication : Token not found" });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) {
        logger.error(err);
        return res.status(400).json({ msg: "Invalid Authentication" });
      }

      req.user = user;
      next();
    });
  } catch (err) {
    logger.error(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = auth;
