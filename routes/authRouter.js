const { Router } = require("express");
const route = Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

route.get("/getUser", auth, authController.getUser);
route.get("/", auth, authController.info);
route.post("/isAuth", auth, authController.isAuth);
route.post("/isAdmin", auth, authController.isAdmin);
route.post("/isDoctor", auth, authController.isDoctor);
route.post("/isSuperAdmin", auth, authController.isSuperAdmin);
route.post("/isPharmacis", auth, authController.isPharmacis);


module.exports = route;
