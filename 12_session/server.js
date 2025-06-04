const session = require("express-session");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.listen(4000, (err)=>{
    err ? console.log("error", err) 
    : console.log("server started at port 4000");
})
// json parsing 
app.use(express.json());
app.use(express.urlencoded());
// initialising session 
app.use(session({
    secret : "secret",
    resave : false,
    saveUninitialized:false,
}))

// initialising mongoose 
const uri = "mongodb+srv://rohan:rohan123@cluster0.qzw60o2.mongodb.net/AuthSession?retryWrites=true&w=majority&appName=Cluster0";
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:String
})

const User = mongoose.model("user",userSchema);
mongoose.connect(uri).then(()=>{
    console.log("mongoose connected");
}).catch((err)=>{
    console.log("Error connecting to mongoose", err.message);
})

// creating middlewire for authentication
function authUser(req,res,next){
    // login for authenticate
if(req.session.user){
next();    
}
else{
    res.redirect("/login");
}
}

// prevent user to get login page if already login
function checkLogin(req,res,next){
    if(req.session && req.session.user){
        res.redirect("/home")
    }
    else{
        next();
    }
}


app.get("/login",checkLogin,(req,res)=>{
    res.sendFile("login.html",{root: "./html"})
})

app.post("/login",async (req,res)=>{
    console.log(req.body);
    const {email, password} = req.body;
    const user = await User.findOne({email:email, password:password});
    if(!user){ // user not found 
        res.redirect("/");
    }
    else{
        // initialising session
        // By default, express-session creates a session that lasts until the client’s browser is closed. 
        req.session.user = req.body;
        res.redirect("/dashboard");
    }
})

app.get("/dashboard",authUser,(req,res)=>{
    res.sendFile("dashboard.html",{root:"./html"});
})
app.get("/",authUser,(req,res)=>{
    res.sendFile("home.html",{root:"./html"});
})
app.get("/about",authUser, (req,res)=>{
    res.sendFile("about.html",{root:"./html"});
})


// for logout as it is comming from fetch , then have to handle in home.html
app.post("/logout",(req,res)=>{
    console.log(req.session);
    req.session.destroy();
    console.log(req.session);
    res.redirect("/");
})

app.all("*",(req,res)=>{
    res.send("404 not found");
})