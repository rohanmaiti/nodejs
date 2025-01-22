const express = require("express");
const app = express();
app.listen(5000,(err)=>{
    err?console.log(err.message) : console.log("server started at 5000");
})
const uri = ""
const cors = require("cors");
const userRoutes = require("./routes/user.route");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(express.static("./"));

app.use("/",userRoutes);