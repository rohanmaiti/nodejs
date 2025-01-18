const Url = require("../model/url.model");
const shortid = require("shortid");

module.exports = async function generateNewUrl(req,res){
const body = req.body;
console.log("hii");
if(!body.url) res.status(401).json({msg:"url is required"});    
// if(!body.url.contains("https://www")){
// body.url = "https://www" + body.url;
// }
const shortId = shortid();
const result = await Url.create({
    shortId:shortId,
    reDirectedUrl:body.url,
    visitHistory:[]
})
res.json({id:shortId});
}

// module.exports = async function getAnalatic(req,res){
//     const shortId = req.params.shortId;
//     const urldetails = await Url.findOne({shortId:shortId});
//     res.json(
//         {noOfClicks : urldetails.visitHistory.length , viewDetail : urldetails}
//     )
// }