const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.listen(4000,(req,res)=>{
    console.log("server started at 4000");
})

const userShcema = new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        require: true,
    },
    address : {
        type:String,
        default:"West Bengal"
    },
    email:{
        type:String,
        unique: true
    }

})

const user = mongoose.model("user", userShcema);

// connection 
mongoose.connect("mongodb://127.0.0.1:27017/demoDatabase-01")
.then(()=>{
    console.log("mongoose connected");
})
.catch((err)=>{
    console.log("mongoose error",err.message);
})