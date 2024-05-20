# Backend with Express JS 

## First example
The first file 01-server.js is a simple server that listens on a port and sends a response to the client. We were not using express in this file.
As you saw in class, the code was simple at the beggining but it was getting more complex as we were adding more features like different endpoints, http methods, etc.

## Second example 
In the `02-express-server` folder you'll find a new server that uses express. The code is much cleaner and easier to read. We have a single file that contains all the routes and the server configuration.

To run the server, you need to install the dependencies first. 
- Go to the `02-express-server` folder `cd 02-express-server`.
- Run `npm install`. 
- You can run the server with `npm run dev`.
- To test the routes you can use Postman or the browser (with the browser you can only test the GET methods).

## Third example
In the `03-middlewares` folder you'll find a new server that uses express and has some middleware functions. 

### What's a middleware?
A middleware is a function that has access to the request and response objects. It can execute any code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function in the stack.

Middlewares can be used to:
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

We are using middlewares like morgan to log the requests information.
Also middlewares like express.json() to parse the body of the request and express.static() to serve static files, etc.

Remember to repeat the previous steps to run the server.

## Fourth example