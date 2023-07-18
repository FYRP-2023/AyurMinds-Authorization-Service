const { Router } = require("express");
const route = Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/admin");
const authDoctor = require("../middleware/doctor");
const authSuperAdmin = require("../middleware/super_admin");
const authPharmacist = require("../middleware/pharmacist");

route.get("/getUser", auth, authController.getUser);
route.get("/", auth, authController.info);
route.post("/isAuth", auth, authController.isAuth);
route.post("/isAdmin", auth,authAdmin, authController.isAdmin);
route.post("/isDoctor", auth,authDoctor, authController.isDoctor);
route.post("/isSuperAdmin", auth,authSuperAdmin, authController.isSuperAdmin);
route.post("/isPharmacis", auth,authPharmacist, authController.isPharmacis);


module.exports = route;
