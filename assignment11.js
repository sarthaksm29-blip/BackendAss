/*
  Assignment 11
  College Backend System - Student Registration Server
  Accepts POST requests, parses JSON, and saves to students.json with registeredAt timestamp
*/

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 4000;
const FILE_PATH = path.join(__dirname, "students.json");

// create native http server (no express)
const server = http.createServer((req, res) => {
  // only process POST requests
  if (req.method === "POST") {
    let body = "";

    // collect incoming data chunks
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // when entire payload is received
    req.on("end", () => {
      try {
        let studentData = JSON.parse(body);

        // add registration timestamp
        studentData.registeredAt = new Date().toISOString();

        let studentsList = [];

        // if students.json exists, read existing students
        if (fs.existsSync(FILE_PATH)) {
          let fileContent = fs.readFileSync(FILE_PATH, "utf-8");
          try {
            studentsList = JSON.parse(fileContent);
          } catch (e) {
            studentsList = [];
          }
        }

        // append the new student
        studentsList.push(studentData);

        // write back to students.json
        fs.writeFileSync(FILE_PATH, JSON.stringify(studentsList, null, 2));

        console.log("Student registered:", studentData.studentName || studentData.name || "New Student");

        // send response back to Postman
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          status: "success",
          message: "Student registered successfully!",
          data: studentData
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
    res.end(JSON.stringify({
      message: "Please send a POST request to register a student."
    }));
  }
});

// start server
server.listen(PORT, () => {
  console.log("Assignment 11 Server running on http://localhost:" + PORT);
});
