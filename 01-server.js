const http = require("http");

const server = http.createServer((request, response) => {
  console.log("THIS IS THE REQUEST: ", request);
  console.log("THIS IS THE METHOD: ", request.method);

  if (request.method === "GET") {
    response.write("Her you have the info");
    if (request.url === "/users") {
      response.write("User 1: Mica");
      response.end();
    }
  } else if (request.method === "POST") {
    response.write("You are posting some info");
  }
/*   response.statusCode = 404; // WE CAN ALSO SEND STATUS CODES LIKE THIS
  response.write("Error"); */
  response.end();
});

server.listen(5005, () => {
  console.log("the server is running");
});
