const User = require("../models/user.model")
const jwt = require("jsonwebtoken");
const secretKey = "secret";
function handleLoginGet(req,res){
    res.sendFile("login.html",{root:"./html"});
}
function handleSigninGet(req,res){
    res.sendFile("signin.html",{root:"./html"});
}
function handleAboutGet(req,res){
    res.sendFile("about.html",{root:"./html"});
}
function handleDashboardGet(req,res){
    res.sendFile("dashboard.html",{root:"./html"});
}

async function  handleLoginPost(req,res){
    let user = await User.findOne({email:req.body.email, password:req.body.password});
    console.log("userr = ",user);
    if(!user){
        res.json({msg:"bad request"});
    }
    else{
        //JWT authentication code here starts here
        const payload = {
            id:user._id,
            email:user.email
        }
        const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
        res.cookie("token1",token);
        res.redirect("/home");
    }
}

function handleLogoutPost(req,res){
    res.clearCookie("token1");
    res.redirect("/login");
}

async function handleSigninPost(req,res) {
    let user = await User.create({
        email:req.body.email, 
        password:req.body.password
    })
    if(user){
        res.json({msg:"Account created sucessfully"});
    }
    else{
        res.json({msg:"Error creating Account"});
    }
}


module.exports = {
    handleLoginGet ,
    handleSigninGet,
    handleAboutGet,
    handleDashboardGet,

    handleLoginPost,
    handleSigninPost,

    handleLogoutPost
};

