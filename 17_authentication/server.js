const express = require("express");
const app = express();
app.listen(3000,(err)=>{
    err?console.log(err.message) : console.log("server started at 3000");
})
const cors = require("cors");
const userRoutes = require("./routes/user.route");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(express.static("./"));

app.use("/",userRoutes);


