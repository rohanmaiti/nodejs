const express = require("express");
const app = express();
const zod = require("zod");
const { string } = require("zod/v4");
app.listen(3000,(err)=>{
    err ? console.log(err.message) : console.log("server started at 3000")
})
// decribing array[number] schema for  validation
// const arraySchema = zod.array(zod.number());
// let array = [1,2,3,4,""];
// app.get("/login",(req,res)=>{
// logic to checking manually.. or we can use zod
// check weather the the array is a number array or not  
// checking using zod
// const response = arraySchema.safeParse(array);
// res.send(response);
// })


// how you will veryfy obj like this ?
// {
//     name:string,
//     password:string,
//     country:"IN" or "US"
// }

const objSchmea = zod.object({
    email:zod.string().email(),
    password:zod.string(),
    country:zod.literal("IN").or(zod.literal("US"))
})
app.use(express.json());
app.post("/login",(req,res)=>{
const obj = req.body;
const response = objSchmea.safeParse(obj);
if(!response.success){
console.log(response.error.issues)
throw new Error(response.error.issues[0].message)
}
return res.send(response);
})

app.use((err,req,res,next)=>{
    res.json({message:err.message})
})