const name = require("./test-module-3");

// Exporting only want to executed function
const { add, multiply } = new name();
console.log(add(5, 6));

// Exports
const naming = require("./test-module-2");
console.log(naming.divi(85, 895));

/// caching
require("./test-module-1")();
require("./test-module-1")();
require("./test-module-1")();
