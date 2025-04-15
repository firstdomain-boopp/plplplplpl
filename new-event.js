const fs = require("fs");
const eventss = require("events");

fs.readFile("./input.txt", "utf-8", (err, data) => {
  console.log(data);
});

// instacnce of events emitter
const evenetminner = new eventss();

// event Registered
evenetminner.on("Sayhello", (msg) => {
  console.log("Hello " + msg);
});

// events trigger
evenetminner.emit("Sayhello", "john");

setTimeout(() => {
  console.log("Good morning");
}, 80);

setImmediate(() => {
  "Hello world";
}, 3);

console.log("Hello from the top level code !!");
