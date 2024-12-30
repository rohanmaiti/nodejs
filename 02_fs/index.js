const fs = require("fs")

// non blocking code
// fs.readFile("./abcd.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("err msg : ",err.message);
//     }
//     else{
//         console.log(data);
//     }
// })

// blocking code ..
// let data = fs.readFileSync("./abc.txt","utf-8");
// console.log(data);



// let content = "This is new Content";
// fs.writeFile("abc.txt",content,(err)=>{
//     if(err){
//         console.log("err MSG : ", err.message);
//     }
//     else{
//         console.log("Writing file done");
//     }
// })

// fs.writeFileSync("abc.txt","Hii, I am Rohan");


 
// fs.appendFile("abc.txt","content",(err)=>{
//     if(err){
//         console.log("err MSG : ", err.message);
//     }
//     else{
//         console.log("append file done");
//     }
// })

// ** NOTE : if file does not exists then automatically file will be created
// fs.appendFileSync("xyz.txt" , "Content");


// fs.rename("abc.txt", "abc2.txt", (err)=>{
//     if(err){
//         throw err;
//     }
//     else {
//         console.log("rename sucessfull")
//     }
// })
// fs.renameSync("abc2.txt","abc.txt");

// fs.unlink("xyz.txt",(err)=>{
//     if(err) throw err;
//     else console.log("file deleted sucessfully");
// })
// fs.unlinkSync("xyz.txt");


// ** Learn what is blocking code and non blocking code 