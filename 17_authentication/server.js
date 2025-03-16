const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
app.listen(5000,(err)=>{
    err?console.log(err.message) : console.log("server started at 5000");
})
const uri = "mongodb+srv://rohan:rohan123@cluster0.qzw60o2.mongodb.net/jwtAuthenticate"
const connectToMongoDb = require("./db/db.js");
const userRoutes = require("./routes/user.route");
const authRouter = require("./routes/authUserRoutes.js")
const User = require("./models/user.model.js")


connectToMongoDb(uri).then(()=>{
    console.log("mongoose connected");
}).catch((err)=>{
    console.log("error connecting to bd",err.message);
})

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(express.static("./"));

app.use("/",userRoutes);
app.use("/",authRouter)