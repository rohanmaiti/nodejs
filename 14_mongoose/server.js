const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.listen(4000,(req,res)=>{
    console.log("server started at 4000");
})
app.use(express.urlencoded());
app.use(express.json());

// creating schema and model
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
const User = mongoose.model("user", userShcema);

// connection 
mongoose.connect("mongodb+srv://rohan:rohan123@cluster0.qzw60o2.mongodb.net/mongooseDataBase")
.then(()=>{
    console.log("mongoose connected");
})
.catch((err)=>{
    console.log("mongoose error",err.message);
})


// CRUD operations
// ** CREATE

function createUser(){
    const user = new User({
        name:"Rahul Maiti",
        age:21,
        email:"rahul@gmail.com",
        address: "rakhilya"
    })
    
    console.log(user);
    user.save();
}
// createUser();

