const fs = require("fs");
const server = require("http").createServer();

// server creation

server.on("request", (req, res) => {
  // Solution 1
  //   fs.readFile("input.txt", "utf-8", (err, data) => {
  //     res.end(data);
  //   });
  // -------------------------------------------------------------
  // Solution 2 : Streams
  //   const readable = fs.createReadStream("innput.txt", "utf-8");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("close", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found!");
  //   });
  //-----------------------------------------------------------------
  // solution 3
  const readable = fs.createReadStream("input.txt", "utf-8");
  readable.pipe(res);
});

// Server listen
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening from the server ");
});
