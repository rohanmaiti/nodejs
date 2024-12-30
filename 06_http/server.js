// ** get using form

// const http = require("http");
// const fs = require("fs");
// const url  = require("url")
// const queryString = require("querystring")
// http.createServer((req,res)=>{
//     console.log("req.url = ",req.url)
//     let parseUrl = url.parse(req.url,true);
//     console.log(parseUrl)
//     console.log("querstring.parse() = ",queryString.parse(req.url))
//     if(req.url == '/')
//     {
//         res.setHeader("content-type","text/html");
//         res.end(fs.readFileSync("./getMethod/form1.html"));
//     }
//     else if(parseUrl.pathname == "/formdata"){
//     console.log("data is ",parseUrl.query);
//     res.end();
//     }

// }).listen(3000,()=>{
//     console.log("server started at 3000")
// })

// ** get usign FETCH

// const http = require("http");
// const fs = require("fs");
// const url  = require("url")
// const queryString = require("querystring")
// http.createServer((req,res)=>{
//     let parseUrl = url.parse(req.url,true);
//     if(req.url == '/')
//     {
//         res.setHeader("content-type","text/html");
//         res.end(fs.readFileSync("./getMethod/form2.html"));
//     }
//     else if(parseUrl.pathname == "/formdata"){
//     console.log("data is ",parseUrl.query);
//     res.setHeader('content-type',"application/json")
//     res.end(JSON.stringify(parseUrl.query));
//     }

// }).listen(3000,()=>{
//     console.log("server started at 3000")
// })
// ** WHEN TO USE "Acess-Control-Allow-Origin" --> when form and server is not in same port 
// const http = require("http");
// const fs = require("fs");
// const url  = require("url")
// const queryString = require("querystring")
// http.createServer((req,res)=>{
//     let parseUrl = url.parse(req.url,true);
//     if(parseUrl.pathname == "/formdata"){
//     res.setHeader("Access-Control-Allow-Origin","*"); // it should be beforer sending anything to the client 
//     console.log("data is ",parseUrl.query);
//     res.setHeader('content-type',"application/json")
//     res.end(JSON.stringify(parseUrl.query));
//     }

// }).listen(3000,()=>{
//     console.log("server started at 3000")
// })

// ** IMPORTANT -> document.write(["one","two"]); this will render as one,two in screen but 
// ** document.write({name:"Rohan"}); // this will render as [object : Object] cause browser cant render object 

// ** POST using form
// const http = require("http");
// const fs = require("fs");
// const queryString = require("querystring")
// http.createServer((req,res)=>{
//     let str = "";
//     if(req.url == '/')
//     {
//         res.setHeader("content-type","text/html");
//         res.end(fs.readFileSync("./postMethod/form1.html"));
//     }
//     else if(req.url == "/formdata"){
//     req.on("data",(chunk)=>{
//        str += chunk;
//     })
//     req.on("end",()=>{
//         console.log(str);
//         console.log(queryString.parse(str));
//     })
//     res.end()
//     }

// }).listen(3000,()=>{
//     console.log("server started at 3000")
// })

// ** POST using fetch
// const http = require("http");
// const fs = require("fs");
// const queryString = require("querystring")
// http.createServer((req,res)=>{
//     let str = "";
//     if(req.url == '/')
//     {
//         res.setHeader("content-type","text/html");
//         res.end(fs.readFileSync("./postMethod/form2.html"));
//     }
//     else if(req.url == "/formdata"){
//     console.log("hello")
//     res.setHeader("Access-Control-Allow-Origin","*");

//     req.on("data",(chunk)=>{
//        str += chunk;
//     })
//     req.on("end",()=>{
//         console.log(str);
//         let obj = JSON.parse(str);
//         console.log(obj);
//     })  
//     res.end();
//     }

// }).listen(3000,()=>{
//     console.log("server started at 3000")
// })


// const http = require("http");
// const fs = require("fs");
// http.createServer((req, res) => {
   // // Serve the form
//     if (req.url == '/') {   
//         res.setHeader("content-type", "text/html");
//         res.end(fs.readFileSync("./postMethod/form2.html"));
//     }
//     // Handle POST request to /formdata
//     else if (req.url == "/formdata" && req.method === "POST") {
//         let str = "";

//         req.on("data", (chunk) => {
//             str += chunk;
//         });

//         req.on("end", () => {
//             console.log("Received data:", str);
//             try {
//                 let obj = JSON.parse(str); // Parse the JSON data
//                 console.log("Parsed object:", obj);

//                 // Sending response back to the client
//                 res.setHeader("Access-Control-Allow-Origin", "*"); // CORS
//                 res.setHeader("Content-Type", "application/json");
//                 res.end(JSON.stringify({ message: "Data received", data: obj }));
//             } catch (error) {
//                 console.error("Error parsing JSON:", error);
//                 res.writeHead(400, { "Content-Type": "application/json" });
//                 res.end(JSON.stringify({ error: "Invalid JSON" }));
//             }
//         });

//     } else {
//         // Fallback for any other routes
//         res.setHeader("content-type", "text/html");
//         res.writeHead(404);
//         res.end("<h1>404 Not Found</h1>");
//     }

// }).listen(3000, () => {
//     console.log("Server started on port 3000");
// });
