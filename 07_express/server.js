const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs");
const app = express();
app.use(express.static("*"));
// app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))
app.listen(4000,(err)=>{
    if(err)
        console.log(err)
    console.log("server started at 4000")
});

app.get("/",(req,res)=>{
res.send("hii there")
res.sendFile("./index.html",{root:__dirname});
})

app.post("/formdata",(req,res)=>{
    console.log("post")
    console.log(req.body);
    let data = JSON.parse(fs.readFileSync("./data.json","utf-8"));
    // data.forEach(obj=>{
    //     if(obj.name == req.query.name && obj.password == req.query.password)
    //     {
    //         res.status(200).json({message:"true"});
    //     }
    // })
    let x = data.filter((obj)=> obj.name == req.body.name && obj.password == req.body.password)
    if(x)
    {
         res.status(200).json({message:"true"});
    }
    res.end();
})

app.all("*",(req,res)=>{
    res.send("Hii");
})