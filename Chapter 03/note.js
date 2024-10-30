const fs = require("fs");

fs.writeFile(
  "./notes.txt",
  "learned about GET and POST requests, How Streams work, what is Streams in Node.js ",
  (err) => {
    console.log(err);
  }
);
