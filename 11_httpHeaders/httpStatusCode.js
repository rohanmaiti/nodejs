/**
 * HTTP Status Codes
 * successful responses:
 * * 200 OK: the request was successful.
 * * 201 Created: the request was successful and a new resource was created.
 * * 204 No Content: the request was successful but there is no content to send in the response.
 * * 202 Accepted: the request was accepted but the processing has not been completed.
 * 
 * Client error responses:
 * * 400 Bad Request: the request was invalid.
 * 
 * Server error responses:
 * * 500 Internal Server Error: the server encountered an error while processing the request.
 * 
 * HTTP status codes are divided into five categories:
 * *100 - 199: Informational
 * *200 - 299: Successful
 * *300 - 399: Redirection
 * *400 - 499: Client errors
 * *500 - 599: Server errors
 * 
 * Syntax:
 * res.status(code)  | or
 * res.status(code).send([body])
 */