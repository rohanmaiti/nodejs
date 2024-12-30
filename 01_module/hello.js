// console.log("Hello Rohan");
// ** learned about what is the purpose of package.json . How we can add our own script in there

// ** Modules in Node js 
// *  3 types of modules >> userdefined >> core >> thirdparty
// *  userdefined module of 2 types >> common js >> ES5 
// *  for common js , neNow talk about ES5ed to add typy:module in package.json or make the extention to .mjs


// function add(a,b){
//     return a+b;
// }
// console.log(add(2,5));

// const add = require("./math");
// console.log(add);
// console.log("sum of 2 and 3 is :" , add(2,3));


// ** type-1 of export and import 
// const math = require("./math");
// console.log(math);
// console.log(math.addFn(10,2));
// console.log(math.subFn(10,2));

// ** type-2 
// const math = require("./math");
// console.log(math);
// console.log(math.add(10,2));
// console.log(math.sub(10,2));

// ** type-3
// const {add , sub} = require("./math");
// console.log(add(10,2));
// console.log(sub(10,2));

// ** type-4
// const math = require("./math");
// console.log(math);
// console.log(math.add(10,2));
// console.log(math.sub(10,2));

// *USING ES-5  || math2.js folder
// import add from "./math2.js";
// console.log(add)

// if exporting without default stattement 
// import {add , sub} from "./math2.js";
// console.log(add);
// console.log(sub);

