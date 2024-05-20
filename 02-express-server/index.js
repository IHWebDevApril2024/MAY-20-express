// Initialize express
const express = require("express");

// now our server is stored in the app variable
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

// Add this so you have access to the files in the public folder
// This tells my server that I have all the static files there
app.use(express.static("public"));
// app.use(express.static(__dirname + 'public')); // use this in case it doesn't work directly

// first route
app.get("/home", (request, response, next) => {
  console.log(request.role);

  response.send('<h1 style="color:blue;">Welcome Ironhacker. :)</h1>');
});

app.get("/cat", (request, response, next) => {
  //   console.log(request);
  response.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Cat</title>
      <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
    <body>
      <h1>Cat</h1>
      <p>This is my second route</p>
      <img src="/images/cool-cat.jpg" alt="image of a cat" />
    </body>
  </html>
  `);
});

app.get("/file", (request, response) => {
  response.sendFile(__dirname + "/views/page1.html");
});

app.listen(5005, () => console.log("My first app listening on port 5005! "));
