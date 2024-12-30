const http = require("http");
const fs = require("fs");
http.createServer((req,res)=>{
    if(req.url == "/")
    {
        res.setHeader("content-type","text/html");
        res.write(fs.readFileSync("./home.html","utf-8"));
    }
    else if(req.url == "/style.css")
    {
        res.setHeader("content-type","text/css");
        res.write(fs.readFileSync("./style.css","utf-8"));
    }
    else if(req.url == "/img.jpg")
    {
        console.log(req.url)
        res.setHeader("Content-Type","image/jpg");
        res.write(fs.readFileSync("./img.jpg"));
    }
    res.end();
}).listen(3000)