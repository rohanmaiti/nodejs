
const jwt = require("jsonwebtoken");
function checkAuth(req,res,next){
    const token = req.cookies.token1; // Extract token from cookies
    if (!token) return res.status(403).json({ message: "Token required" });
    console.log(token);
    try{
        const decode =  jwt.verify(token,"secret");
        res.user = decode;
        next();
    }catch(err){
        res.status(401).json({message:"Invalid token"});
    }
}

function isNotLogin(req,res,next){
const token = req.cookies.token1;
if(!token){
   return next();
}
try {
        const decode = jwt.verify(token, "secret");
        req.user = decode;
        res.redirect("/home");
} catch (error) {
    next();
}
}

module.exports = {
    checkAuth,
    isNotLogin
};