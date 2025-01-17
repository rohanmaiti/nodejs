const express = require('express');
const Url = require("../model/url.model")
const router = express.Router();

router.get("/:shortId",async (req,res)=>{
    const shortId = req.params.shortId;
    console.log("shortID = ",shortId);
    const entry = await Url.findOneAndUpdate({shortId: shortId},{$push:{
        visitHistory:{
            timeStamp:Date.now()
        }
    }})
    res.redirect(entry.reDirectedUrl);
})



module.exports = router;