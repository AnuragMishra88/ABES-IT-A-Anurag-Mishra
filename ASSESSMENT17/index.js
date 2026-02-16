const http = require("http");
const fs = require("fs");
const path = require("path");

const myserver = http.createServer((req, res) => {
  let filePath = "." + req.url;

  if (req.url === "/") {
    filePath = "./abes.html";
  }

  const extname = path.extname(filePath);

  let contentType = "text/html";

  if (extname === ".png") contentType = "image/png";
  if (extname === ".jpg") contentType = "image/jpeg";
  if (extname === ".css") contentType = "text/css";
  if (extname === ".js") contentType = "text/javascript";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("File not found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

myserver.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
