const Users = require("../models/userModel");

const authAdmin = async (req, res, next) => {
  try {
    // Get user information by id
    const user = await Users.findOne({
      _id: req.user.id,
    });
    if (user.role === "admin") {
      next();
    } else {
        logger.error("Admin resources access denied");
      return res.status(400).json({ msg: "Admin resources access denied" });
    }
  } catch (err) {
    logger.error(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authAdmin;
