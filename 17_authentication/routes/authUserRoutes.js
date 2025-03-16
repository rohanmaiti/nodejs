const express = require("express");
const router = express.Router();
const {handleHomePage, handleAboutPage, handleDashboardPage} = require("../controller/handleUser");
const {checkAuth} = require("../middlewire/auth.middlewire");
router.get("/home",checkAuth,handleHomePage);
router.get("/about",checkAuth,handleAboutPage);
router.get("/dashboard",checkAuth,handleDashboardPage);
module.exports = router;