const express = require("express");
const app = express();
const urlRouter = require("./router/url.router");
const reDirectedUrl = require("./router/redirect.route");
const connectToMongoDB = require("./connection/connection")

app.use(express.json());
app.listen(3000,(err)=>{
    err ? console.log(err.message) : console.log("server started at 3000");
})
connectToMongoDB("mongodb://127.0.0.1:27017/shortUrl")
.then(()=>{
    console.log("mongoose connected");
}).catch((err)=>{console.log("error connecting mongoose",err.message)});

app.use("/url",urlRouter);
app.use("/url",reDirectedUrl)


