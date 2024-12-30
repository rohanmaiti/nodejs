const log = require("./index");
const EventEmitter = require("events");
let event = new EventEmitter();

event.on("hello",()=>{
    console.log("hello caught in demofile");
})
log();