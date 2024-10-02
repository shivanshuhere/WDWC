const http = require("http");
const path = require("path");
const fs = require("fs");

const port = 8080;
const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  //   console.log(filePath);
  // get file extension
  const extName = String(path.extname(filePath)).toLowerCase();
  //   console.log(extName);

  //   file type supported by server
  const mimeType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "text/png",
    ".jpg": "text/jpg",
  };

  const contentType = mimeType[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "content-Type": "text/html" });
        res.end("404 : File not found Baby!");
      }
    } else {
      res.writeHead(200, { "content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening at port : ${port}`);
  //   res.send("server is running fine");
});
