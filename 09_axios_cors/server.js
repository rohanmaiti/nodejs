const express = require("express");
const app = express();
app.listen(3000,(err)=>{
    err ? console.log(err.message) : console.log('server started at 3000');
})
