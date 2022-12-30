const { readFileSync, writeFileSync } = require("fs");
const { syncBuiltinESMExports } = require("module");
// same as above one const fs = require('fs')

const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");

//console.log(first, second);

writeFileSync(
  "./content/result-syncBuiltinESMExports.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
