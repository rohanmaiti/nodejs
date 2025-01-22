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
    let user = User.find({email:req.body.email, password:req.body.password});
    if(!user){
        res.json({msg:"User not exists"});
    }
    else{
        // authentication starts here 
        res.redirect("/home");
    }
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
    handleSigninPost
};

