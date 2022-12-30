const path = require("path");
const { text } = require("stream/consumers");
console.log(path.sep); // sep for seperator

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");

console.log(absolute);
