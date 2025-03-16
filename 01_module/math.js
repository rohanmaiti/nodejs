// function add(a,b){
//     return a+b;
// }
// module.exports = add;


// ** Multople exports , can we write like this ?
// Can we export
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// module.exports = add;
// module.exports = sub;

// ** type-01 of export multiple exports
// module.exports = {
//     addFn : add,
//     subFn : sub
// }


// ** type-02 of export multiple exports , can import in two ways 1.like a obj | 2.using destructure
// module.exports = {add, sub};

// ** type-03 
// exports.add = function (a,b){
//     return a + b;
// }
// exports.sub = function(a,b){
//     return a-b;
// }