"use strict";

try {
  console.log("Work");
  console.log(a);
  console.log("Test");
} catch (error) {
  console.log(error.stack);
}

console.log("done");
