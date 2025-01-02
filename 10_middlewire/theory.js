/**
 * client --------------------------> middlewire ----------------------------> server
 *   ^         request             process of request       <-----------------
 *   |                                                             response
 *   <-------------------request can revert back from here 
 * 
 *   0. middlewire is funciton that runs on every request and response
 *   1. middlewire is a function that takes request and response object and next function as argument
 *   2. middlewire can change the request and response object
 *   3. middlewire can end the request response cycle
 *   4. there are two types of middlewire
 *     a. application level middlewire | app.use() this is an application level middlewire
 *     b. route level middlewire  | app.get() this is a route level middlewire | here the next function is not required and called automatically
 *   5. middlewire can be used for logging, authentication, authorization, error handling, etc
 *   6. there can be n number of middlewire in a single request response cycle
 *   7. client ---req----> middlewire1 next() >------>middlewire2 next() ------------------> server  
 * 
 */