const logger = require("../helpers/appLogger");
const Users = require("../models/userModel");

const authSuperAdmin = async (req, res, next) => {
  try {
    // Get user information by id
    const user = await Users.findOne({
      _id: req.user.id,
    });
    if (user.role === "super_admin") {
      next();
    } else {
      logger.error("Super Admin resources access denied");
      return res.status(400).json({ msg: "Super Admin resources access denied" });
    }
  } catch (err) {
    logger.error(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authSuperAdmin;
