const fs = require("fs");

// fs.readFile("./abc.txt",(err,content)=>{         // with 2 parameter useually 3 parameter 
//     if(err)
//         console.log("err is ",err);
//     else{
//         console.log(content);
//         console.log(content.toString());
//     }
// })


// fs.readFile("./abc.txt","utf-8",(err,content)=>{
//     if(err){
//         console.log("err is",err);
//     }
//     else{
//         console.log("content is = ",content);
//     }
// })


// MCQ : what would be the out put ?
// setTimeout(()=>{
//     console.log("setTime out function")
// },100)

// fs.readFile("./abc.txt","utf-8",(err,content)=>{
//     if(err){
//         console.log("err is",err);
//     }
//     else{
//         console.log("content is = ",content);
//     }
// })
// console.log("Hello");
// console.log("Hii");

// setTimeout(()=>{
//     console.log("setTime out function")
// },100)


// let x = fs.readFileSync("./abc.txt","utf-8");
// console.log(x);

// let x = fs.readFileSync("./abc.txt");
// console.log(x);

// Syncronus
// console.log("rahul")
// let x = fs.readFileSync("./abc.txt","utf-8");
// console.log(x);
// console.log("rohan")


// ** WRITE FILE
// fs.writeFile("./abc.txt","hii there!!",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// ** MCQ
// fs.writeFile("./demo.txt","hello Rohan",(err)=>{  // overwrite it 
// if(err){
//     console.log("err",err);
// }
// console.log("inside callbeack function")
// })
// console.log("Hello");

// ** MCQ
// fs.writeFileSync("./demo2.txt","this is demo2 file")
// console.log("hello");

// ** APPEND FILE 
// fs.appendFile("./abc.txt","\nthis is append file content",(err)=>{
//     console.log(err);
//     console.log("append file done");
// })
// console.log("hii there");
// fs.appendFileSync("./abc.txt","\twelcome to chitkara university");

// ** RENAME FILE
// fs.renameSync("./abc.txt","abc.txt");
// fs.rename("dyc","abc",(err)=>{
//     console.log("renamed");
// })

// ** DELETE FILE
// fs.unlink("demo2.txt",(err)=>{
//     console.log(err);
// });
// fs.unlinkSync("xyz.txt")


// ask rakhi maam about blocking code and non blocking code
// *Blocking code vs Non Blocking code 
// in Node js some task takes time so there we have two choices 
// 1. wait untill the line of code completes its execution 
// 2. move that work to background and do execute next line of code. when that code will complete move back from background 