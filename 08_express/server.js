// * GET USING FORM 
// const express = require("express");
// const app = express();
// app.listen(4000,(err)=>{
//     if(err) throw err;
//     else console.log("server started at 4000");
// })

// app.get("/login",(req,res)=>{
//     console.log(req.query);
//     res.send("Get request accepted");
// })

// * GET USING FETCH
// const express = require("express");
// const app = express();
// app.listen(4000,(err)=>{
//     if(err) throw err;
//     else console.log("server started at 4000");
// })

// // *have to use cors here
// const cors = require("cors");
// app.use(cors());
// app.get("/login",(req,res)=>{
//     console.log(req.query);
//     res.json({msg:"Get request accepted"});
// })

// * POST USING FORM
// const express = require("express");
// const app = express();
// app.listen(4000,(err)=>{
//     if(err) throw err;
//     else console.log("server started at 4000");
// })
// app.use(express.json());
// app.use(express.urlencoded());
// app.post("/login",(req,res)=>{
//     console.log(req.body);
//     res.send("post request accepted");
// })

// *POST USING FETCH
const express = require("express");
const app = express();
app.listen(4000,(err)=>{
    if(err) throw err;
    else console.log("server started at 4000");
})
// *have to use cors here
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded()); // if sending through fetch no need of express.urlencoded()
app.post("/login",(req,res)=>{
    console.log(req.body);
    res.json({msg:"Post request accepted"});
})