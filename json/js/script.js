"use strict";

// const car = {
//   name: "bmw",
//   color: "red",
// };

// const objectToJSON = JSON.stringify(car)

// const jsonToObj = JSON.parse(objectToJSON)

// console.log(objectToJSON);
// console.log(jsonToObj);

const car = {
  name: "bmw",
  color: "red",
  extra: {
    isAirbag: false,
    ballon: 5,
  },
};

const clone = JSON.parse(JSON.stringify(car));
clone.extra.ballon = 10;

console.log(car);
console.log(clone);
