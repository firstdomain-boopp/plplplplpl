const fs = require("fs");
// http
const http = require("http");
// fs.createReadStream(".input/txt", "utf-8", (err, data) => {
//   console.log(data);
// });

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Received");
  res.end("Request Received");
});

// server.on("request", (req, res) => {
//   req.end("Another received");
// });

server.on("request", (req, res) => {
  console.log("another request received");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is wating for req");
});
