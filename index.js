const fs = require("fs");

// 1- Synchronous
console.log("Print First");

// 2- setTimeout
setTimeout(() => {
  console.log("Print Second");
}, 0);

// 3- setImmediate
setImmediate(() => {
  console.log("Print Third");
});

// 4- process.nextTick
process.nextTick(() => {
  console.log("Print Fourth");
});

// 5- fs callback
fs.readFile(__filename, () => {
  console.log("Print Fifth");
});
