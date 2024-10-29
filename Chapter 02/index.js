const fs = require("fs");

fs.writeFileSync(
  "./api_development_fundamental.txt",
  "Application Programmming is a set of rules and mechanisms by which one application communicates with another in a json or xml format \n\n 01) Components of Request \n 1) Base Address \n 2) Route \n 3) Method [GET, POST, PUT, DELETE, PATCH, OPTIONS] \n 4) Data \n 5) Headers \n\n 02) Components of Response \n 1) Data \n 2) Headers \n 3) Status Code \n "
);

const readData = fs.readFileSync("./api_development_fundamental.txt", "utf-8");

console.log(readData);
