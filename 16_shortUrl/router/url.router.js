const express = require("express");
const router = express.Router();
const  generateNewUrl  = require("../controller/url.controller");
const getAnalatic = require("../controller/url.controller")

router.post("/",generateNewUrl);
router.get("/details/:shortId",getAnalatic);
module.exports = router;