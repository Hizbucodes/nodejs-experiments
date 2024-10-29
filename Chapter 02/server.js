const http = require("http");

// create a server which will keep our application running
// anyone want to send a request to muy server they have use my server including ip + port
http
  .createServer((req, res) => {
    if (req.url === "/add" && req.method === "GET") {
      res.end("Added data");
    } else if (req.url === "/update" && req.method === "PUT") {
      res.end("Updated Data");
    }
  })
  .listen(8000);
