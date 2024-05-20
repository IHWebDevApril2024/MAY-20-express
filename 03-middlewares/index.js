const express = require("express");
const data = require("./public/data.json");

const app = express();
// express server created

const logger = require("morgan");

app.use(logger("dev"));
// every time we add .use we are telling our app to use it on each request
// THIS IS CALLED MIDDLEWARE
app.use(express.static("public"));

// WE CAN CREATE CUSTOM MIDDLEWARES
function myMiddleware(request, response, next) {
  console.log("THIS IS MY MIDDLEWARE");
  request.ditto = "tokensupersecret1234";
  next();
}

function myMiddleware2(request, response, next) {
  console.log("THIS IS MY SECOND MIDDLEWARE");
  next();
}

app.use(myMiddleware);
app.use(myMiddleware2);

// this is allowing us to send json files
app.use(express.json());

app.get("/", (request, response) => {
  response.json(data);
});

app.get("/fetch", (request, response) => {
  // endless possibilities. Remember what uncle Ben said: with great power comes great responsibility
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((jsonResponse) => response.json(jsonResponse.results))
    .catch(() =>
      response.send("sorry this is not working, blame the developer or TMB")
    );
});

app.get("/await", async (request, response) => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const jsonResponse = await res.json();
    response.json(jsonResponse.results[0]);
  } catch {
    response.send("SORRY THIS DIDN't WORK");
  }
});

app.get("/users", (request, response) => {
  response.send("This is the users endpoint");
});

app.listen(5005, () => {
  console.log("My server is running on http://localhost:5005");
});
