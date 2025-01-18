const express = require("express");
const router = express.Router();
const  generateNewUrl  = require("../controller/url.controller");
const getAnalatic = require("../controller/url.controller")
const Url = require("../model/url.model")

router.post("/",generateNewUrl);
// router.get("/details/:shortId",getAnalatic);

router.get("/getDetails",async (req,res)=>{
    const detail = await Url.find({});
    res.json(detail);
})

module.exports = router;