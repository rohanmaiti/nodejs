const express = require("express");
const router = express.Router();
const {isNotLogin} = require("../middlewire/auth.middlewire");
const {
    handleLoginGet,
    handleSigninGet, 
    handleAboutGet, 
    handleDashboardGet, 
    handleLoginPost,
    handleSigninPost,
    handleLogoutPost
    } = require("../controller/user.controller");

router.get("/login",isNotLogin,handleLoginGet);
router.get("/",handleLoginGet);
router.post("/login",handleLoginPost);
router.get("/signin",isNotLogin,handleSigninGet);
router.post("/signin",handleSigninPost);
router.post("/logout",handleLogoutPost);

module.exports = router;