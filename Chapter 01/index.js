// Reading and Writing files in both async and sync way

// import file system
const fs = require("fs");

// import os
const os = require("os");

const text = fs.readFileSync("./text.txt", "utf-8");

console.log(text);

console.log("hello");

// write file
fs.writeFileSync("./products.txt", "Apple");
fs.writeFileSync("./text.txt", "adding some extra lines");

fs.writeFile("./users.txt", "Hizbullah", (err) => {
  console.log(err);
});

console.log("Before file reading");

// read file
fs.readFile("./text.txt", "utf-8", (err, data) => {
  console.log(err);
  console.log(data);
});

console.log("After file reading");

// update file
fs.appendFile("./products.txt", "\nnew line", (err) => {
  console.log(err);
});

// delete file
fs.unlink("./products.txt", (err) => {
  console.log(err);
});

// exploring functions from os module
console.log(os.platform());
console.log(os.hostname());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.type());
console.log(os.tmpdir());
console.log(os.version());
