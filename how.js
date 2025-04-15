// const fs = require("fs");

// const ff = fs.readFileSync("./input.txt", "utf-8");
// console.log(ff);

// let i = 1;
// while (i <= 5) {
//   console.log("The number is " + i);
//   i++;
// }

var fs = require("fs");
fs.readFile("input.txt", function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

let i = 1;
while (i <= 5) {
  console.log("The number is " + i);
  i++;
}
