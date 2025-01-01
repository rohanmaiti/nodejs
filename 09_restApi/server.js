const express = require("express");
const app = express();
const users = require("./data.json");  // for .json file it does not require export statement 
app.listen(4000,(err)=>{
    console.log("server started at 4000");
})

// *TASK-1 : GET  /api/users - list all users JSON  | /users -> HTML render
app.get("/api/users",(req,res)=>{
    res.json(users);
})
app.get("/users",(req,res)=>{
    const result = `
    <ul>
    ${users.map(usr=>{
        return `<li>${JSON.stringify(usr)}</li>`
    })}
    </ul>
    `
    res.send(result);
})

// *TASK-2 : GET  /users/1 - get the user with ID 1
app.get("/users/:id",(req,res)=>{
    let id = req.params.id;
    let user = users.find(obj=> obj.id == id);
    return res.json(user);
})

// *TASK-3 : POST /users/1 - Edit the user with id 1
app.use(express.json());
app.use(express.urlencoded());
app.post("/users/:id",(req,res)=>{
    console.log(req.body)
    let id = req.params.id;
    let user1 = users.find(obj=> obj.id == id);
    let result =  {before : user1}
    console.log(req.body);
    users.forEach(obj=> {
        if(obj.id == id){
            obj.password = req.body.password;
        }
    });
    let user2 = users.find(obj=> obj.id == id);
    result.after = user2;
    res.json(result);
})