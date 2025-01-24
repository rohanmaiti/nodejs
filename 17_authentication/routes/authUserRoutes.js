const express = require("express");
const router = express.Router();
const {handleHomePage, handleAboutPage, handleDashboardPage} = require("../controller/handleUser");

router.get("/home",handleHomePage);
router.get("/about",handleAboutPage);
router.get("/dashboard",handleDashboardPage)
module.exports = router;