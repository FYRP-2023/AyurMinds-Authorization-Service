const mongoRepository = require("../database/mongoRepository");
const logger = require("../helpers/appLogger");

const authController = {
  getUser: async (req, res) => {
    try {
      const user = await mongoRepository.user.findByIdWithoutPassword(req.user.id);
      res.status(200).json(user);
    } catch (error) {
      // Log an error
      logger.error(error);
      res.status(500).json({ msg: error.message });
    }
  },
  isAuth: async (req, res) => {
    try {
      res.status(200).json(true);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ msg: error.message });
    }
  },
  isDoctor: async (req, res) => {
    try {
      res.status(200).json(true);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ msg: error.message });
    }
  },
  isSuperAdmin: async (req, res) => {
    try {
      res.status(200).json(true);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ msg: error.message });
    }
  },
  isAdmin: async (req, res) => {
    try {
      res.status(200).json(true);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ msg: error.message });
    }
  },
  isPharmacis: async (req, res) => {
    try {
      res.status(200).json(true);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ msg: error.message });
    }
  },
  info: async (req, res) => {
    try {
      const user = await mongoRepository.user.findByIdWithoutPassword(req.user.id);
      res.status(200).json({ user });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = authController;