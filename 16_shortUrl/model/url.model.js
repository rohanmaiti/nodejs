const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        require:true,
        unique:true
    },
    reDirectedUrl:{
        type:String,
        require:true,
    },
    visitHistory:[ {timeStamp:Number} ]

}
,{timestamps:true}
)

const Url = mongoose.model("url",urlSchema); // url will be the name of collection
module.exports = Url;