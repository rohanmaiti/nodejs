const express = require("express");
const app = express();
app.listen(3000,(err)=>{
    if(err) throw err;
    else console.log("server started at 3000");
})

// *HANDLING GET REQUEST
// app.get("/home",(req,res)=>{
// res.send("<h1>Welcome to Home page</h1>")
// })

// *SENDING FILES IN RESPONSE
app.get("/home",(req,res)=>{
res.sendFile("home.html",{root:__dirname});
})

// *HANDLING STATIC FILES
app.use(express.static(__dirname)); // name the directory which files should be static

// *HANDLING STATIC FILES- 02
app.use(express.static(__dirname+"images"));
// this directory is now static so go to the browser and type: ** http:localhost:3000/images/img1.jpg | http:localhost:3000/images/img2.jpg