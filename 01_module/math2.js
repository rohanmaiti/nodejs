// export const a = "Rohan";

// function add(a,b){
//     return a+b;
// }
// export default add;
// ** differance b/w export add and export default add;
/**
 **         export
            Used for named exports, where multiple values can be exported from a module.
            Each exported value must be explicitly imported using its exact name.
            Example:

            // myModule.js
            export const a = 10;
            export const b = 20;

            // Importing
            import { a, b } from './myModule.js';
**
 

**          export default
            Used for default exports, where a module exports a single value or entity.
            The default export can be imported with any name.
            Example:

            // myModule.js
            export default function greet() {
              console.log("Hello!");
            }

            // Importing
            import greetFunction from './myModule.js';
            greetFunction(); // Outputs: Hello!
 **

 
 */


// ** for multiple exports 
// function sub(a,b){
//     return a - b;
// }
// export {sub};

// function mul(a,b){
//     return a * b;
// }
// export {mul};