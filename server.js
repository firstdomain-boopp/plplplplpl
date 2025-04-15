const http = require("http");

// server creation
const server = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === "/" || pathname === "/overview") {
    console.log("First page");
    res.end("URL routing");
  }
});

const port = 8000;
server.listen(port, "127.0.0.1", () => {
  console.log("Listening from the server");
});
