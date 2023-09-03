const mongoRepository = require("../database/mongoRepository");
const logger = require("../helpers/appLogger");
const Disease = require("../models/disease");
const User = require("../models/user");

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
      let user = await mongoRepository.user.findByIdWithoutPassword(req.user.id);
      let specializedInData =[]
      if (user.doctor.specializedIn && user.doctor.specializedIn.length > 0) {
        for (const d of user.doctor.specializedIn) {
          const disease = await Disease.findById(d);
          specializedInData.push(disease);
        }
      }
   
     user.doctor.specializedIn = specializedInData;
     res.status(200).json({ user });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = authController;