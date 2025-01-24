function handleHomePage(req,res,fileName){
 res.sendFile("home.html",{root:"./html"})
}

function handleAboutPage(req,res,fileName){
    res.sendFile("about.html",{root:"./html"})
}

function handleDashboardPage(req,res,fileName){
    res.sendFile("dashboard.html",{root:"./html"})
}
handleDashboardPage
handleAboutPage
module.exports = {handleHomePage, handleAboutPage, handleDashboardPage};