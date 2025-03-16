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
// ** Create
app.post("/signup",async (req,res)=>{
    
    const {name , age, address, email} = req.body;
    console.log(req.body);
    try {
        // type-01
        const user =await new User({name:name, age:age, address:address, email:email});
        await user.save();
        console.log(user);
    } catch (error) {
        
    }

    res.send("ok");
})