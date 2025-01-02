const express = require("express");
const app = express();
app.listen(3000, () => {    
    console.log("server is running on port 3000");
});

// application level middlewire
app.use((req, res, next) => {
    console.log("this is application level middlewire");
    req.username = "Rohan"
    next();
    // return res.json({message: "returning not going to next middlewire"});
});

function abc(req, res, next) {
    console.log("this is middlewire2");
    console.log(req.username);
    next();
}
app.use(abc);

// route level middlewire
app.get("/", (req, res,next) => {
    res.send(req.username);
    next();
});

app.use((req, res, next) => {
    console.log("this is middlewire3");
    next();  // onece off this code and run the server
});

app.get("/about", (req, res ) => {
    res.send("about page");

});

app.all("*", (req, res) => {
    res.send("404 page not found");
});