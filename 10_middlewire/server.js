const express = require("express");
const app = express();
app.listen(3000, () => {    
    console.log("server is running on port 3000");
});

// * application level middlewire
// app.use((req, res, next) => {
//     console.log("this is application level middlewire");
//     req.username = "Rohan"
//     next();
//     // return res.json({message: "returning... not going to next middlewire"});
// });
// app.get("/",(req,res)=>{
//     console.log("application middlewore data = ", req.username);
//     res.json({message:"/ Endoint hit", data:req.username});
// })

// * creating another applicatio level middlewire...
// function abc(req, res, next) {
//     console.log("this is middlewire2");
//     console.log(req.username);
//     next();
// }
// app.use(abc);

// * route level middlewire
// app.get("/", (req, res,next) => {
//     res.send(req.username);
//     next();
// });

// app.use((req, res, next) => {
//     console.log("this is middlewire3");
//     next();  // onece off this code and run the server
// });

// app.get("/about", (req, res ) => {
//     res.send("about page");

// });

// * route level middle wire creation:
// function authUser(req,res,next){
//     if(req.query.name){
//     console.log(req.query);
//     next();
//     }
//     else{
//         return res.json({message:"User not found"});
//     }
// }
// app.get("/login",authUser,(req,res)=>{
// res.json({authUser:req.query})
// })


// * Global catches
app.get("/login",(req,res)=>{
// some logic 
// if some error occurs it will directly do to the last middlewire . and it is called global catche
console.log(name); // as name is not define it will go out side this route and the below middle wire will catch it
res.send("Login route");
})
app.use((err, req, res, next)=>{
    res.send({message:"An internal server Error"})
})

// * Route chaining
// app.route("/user")
// .get((req,res)=>{
//     res.json({msg:"/get request"});
// })
// .post((req,res)=>{
//     res.json({msg:"/post request"});
// })

// * Defautl handler
// app.all("*", (req, res) => {
//     res.send("404 page not found");
// });