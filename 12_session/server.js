const session = require("express-session");
const express = require("express");
const app = express();
app.listen(4000, (err)=>{
    err ? console.log("error", err) 
    : console.log("server started at port 4000");
})

// initialising session 
app.use(session({
    secret : "secret",
    resave : false,
    saveUninitialized:false
}))
/**
 * *saveUninitialized:
 *  If set to false, it prevents uninitialized sessions (sessions with no data) from being saved to the store.
 * *resave: 
 *  If set to false, the session will not be saved back to the server if it hasn’t been modified during the   request.
 * *secret: 
 * A string used to sign the session ID cookie for security. It ensures that session data can't be tampered with.
 * 
 */


