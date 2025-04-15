const EventEmitter = require("node:events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("event", function (a, b) {
  console.log(a, b, this, this === myEmitter);
  // Prints:
  //   a b MyEmitter {
  //     _events: [Object: null prototype] { event: [Function (anonymous)] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined,
  //     [Symbol(shapeMode)]: false,
  //     [Symbol(kCapture)]: false
  //   } true
});
myEmitter.emit("event", "a", "b");
