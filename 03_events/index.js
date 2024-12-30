// class Customer{
//     name;
//     constructor(n){
//         this.name = n;
//         console.log("constructor called")
//     }
//     displayName(){
//         console.log(this.name);
//     }
// }

// let  c = new Customer("Rohan Maiti");
// c.displayName()

// function a(){

// }

const events = require("events");
// console.log(typeof events);
// console.log(typeof a);
// console.log(typeof Customer);


const EventEmitter = require("events");
// on() // emit()
let event = new EventEmitter();



// *MCQ
// event.on("hello",()=>{
//     console.log("Hello caught");
// })
// event.emit("hello");

// event.emit("hello");
// event.on("hello",()=>{
//     console.log("Hello caught2");
// })
// event.emit("hello");
// event.emit("hello");

// *MCQ
//  function log(){
//      console.log("log function called");
//      event.emit("hello");
//  }
//  event.on("hello",()=>{
//      console.log("hello caught")
//  })
//  module.exports = log;   
//  *Extending EventEmitter cl  ss 
//  class newEventEmitter extends EventEmitter{
//    log(){
//      console.log("log function called");
//      this.emit("hii");
//    }
//  }   
//  let ne  Event = new newEventEmitter();
//  newEvent.log();
//  newEvent.on("hii",()=>{
//      console.log("hii caught");
//  })
//  newEvent.log(); 
//  *MCQ jaake aage li  hbe seta aage call hobe 
//  event.on("hii",(data1,number)=>{
//      console.log(data1,number);
//  })
//  event.on("hii",()=>{
//      console.log("empty parameter")
//  })
//  event.on("hii",(data1,number,array)=>{
//      console.log(data1,number,array)
//  })
//  event.emit("hii","data1",123,[1,2,3])  
  


  


