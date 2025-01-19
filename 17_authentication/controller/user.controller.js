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




module.exports = {
    handleLoginGet ,
    handleSigninGet,
    handleAboutGet,
    handleDashboardGet
};

