/*
  Assignment 9
  Validate JSON Payload in POST Request using Custom Module
*/

const http = require("http");
const validateUser = require("./validateUser");

const PORT = 3000;

// create native http server
const server = http.createServer((req, res) => {
  // only handle POST requests
  if (req.method === "POST") {
    let body = "";

    // collect incoming data chunks
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // when request body is fully received
    req.on("end", () => {
      try {
        const userData = JSON.parse(body);

        // use our custom local validation module
        const result = validateUser(userData);

        if (!result.isValid) {
          // validation failed (HTTP 400 Bad Request)
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({
            status: "error",
            message: result.message
          }));
          return;
        }

        // validation succeeded (HTTP 200 OK)
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          status: "success",
          message: "User payload is valid!",
          user: userData
        }));

      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          status: "error",
          message: "Invalid JSON format"
        }));
      }
    });

  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Please send a POST request with JSON body" }));
  }
});

server.listen(PORT, () => {
  console.log("Assignment 9 Server is running on http://localhost:" + PORT);
});
