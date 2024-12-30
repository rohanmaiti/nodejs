const path = require("path");

// console.log(__dirname); // return absolute directry name 
// console.log(__filename);// return absolute file name 

// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));

// console.log(path.dirname(__dirname));
// console.log(path.dirname(__filename));

// console.log(path.extname("index.html"));  // return extention of file 

// console.log(1,path.parse(__filename))  // return obj containing information of the file like filename , extantion name
// console.log(path.format(path.parse(__filename)))  

// console.log(path.isAbsolute(__filename));  // wheather the path is absolute path or not ?
// console.log(path.isAbsolute("./index.js"));

// console.log(path.join('abc','xyz'));
// console.log(path.join('abc','xyz','rohan.js'));

// console.log(path.resolve("abc","xyz","rohan","fullStack"));
// console.log(path.resolve("/abc","xyz","rohan","fullStack"));
// console.log(path.resolve("/abc","/xyz","rohan","fullStack"));
// console.log(path.resolve("/abc","//xyz","rohan","fullStack"));
// console.log(path.resolve("abc","/xyz","rohan","../fullStack")); // also normalise the path
// console.log(path.resolve(__dirname,"newfile.txt"))

// console.log(path.resolve("abc","xyz","rohan","fullStack"));
// console.log(path.resolve("/abc","xyz","rohan","fullStack"));
// console.log(path.resolve("/abc","/xyz","rohan","fullStack"));
// console.log(path.resolve("abc","/xyz","//rohan","../fullStack")); // also normalise the path
// console.log(path.resolve(__dirname,"newfile.txt"))
