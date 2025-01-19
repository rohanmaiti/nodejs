const express = require("express");
const router = express.Router();
const {handleLoginGet , handleSigninGet , handleAboutGet,handleDashboardGet} = require("../controller/user.controller");

router.get("/login",handleLoginGet)
router.get("/signin",handleSigninGet)
router.get("/about",handleAboutGet)
router.get("/dashboard",handleDashboardGet)
module.exports = router;