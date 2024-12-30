// const http = require("http");
// http.createServer((req,res)=>{
//     if(req.url == "/")
//     {
//         console.log(req.method);
//         res.setHeader("content-type","text/html")
//         res.write("<h1>Welcome to / end point </h1>")
//         res.end();
//     }
//     else{
//         res.setHeader("content-type","text/html")
//         res.write("<h1>404 page not found</h1>")
//         res.end();
//     }
// }).listen(3000,()=>{console.log("server started at 3000")})


// ** HANDING STATIC FILE IN HTTP

const http = require("http");
const fs = require("fs");
http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url == '/'){
        res.setHeader("content-type","text/html");
        res.write(fs.readFileSync("./SRC/index.html")); // writing utf-8 in case of html,css and js is optional
    }
    else if(req.url == '/img.jpg'){
        res.setHeader("content-type","image/jpg");
        res.end(fs.readFileSync("./SRC/img.jpg"));
        // res.end(fs.readFileSync("./SRC/img.jpg","utf-8 ")) // do not write utf-8 while sending image as response
    }
    else if(req.url == '/style.css'){
        res.setHeader("content-type","text/css");
        // let x = fs.readFile("./SRC/style.css","utf-8",(err)=>{console.log("image readed")})
        res.end(fs.readFileSync("./SRC/style.css"))
    }
    else if(req.url == '/script.js')
    {
        res.setHeader("content-type","application/javascript");
        res.end(fs.readFileSync("./SRC/script.js"));
    }
    else{
        res.setHeader("content-type","text/html");
        res.end("<h1>404 Not found</h1>");
    }
    res.end();  
}).listen(3000,()=>{
    console.log("server started at 3000")
})

// ** important notes : 
// writing res.end() in different positions are important .. carefull writing it 
//  do not write utf-8 while sending image as response
