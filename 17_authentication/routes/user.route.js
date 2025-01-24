const express = require("express");
const router = express.Router();
const {
    handleLoginGet,
    handleSigninGet, 
    handleAboutGet, 
    handleDashboardGet, 
    handleLoginPost,
    handleSigninPost
    } = require("../controller/user.controller");

router.get("/login",handleLoginGet);
router.post("/login",handleLoginPost);
router.get("/signin",handleSigninGet);
router.post("/signin",handleSigninPost);
router.get("/about",handleAboutGet);
router.get("/dashboard",handleDashboardGet);

module.exports = router;