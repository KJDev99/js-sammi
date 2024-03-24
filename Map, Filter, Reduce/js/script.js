"use strict";

// Map method - bizga yangi massivni qaytarib beradi va esi massivni qiymatini o'zgartirib

// const car = ["MErc", "BmW", "RolCE RoYcE"];
// const arr = car.map((item) => item.toLowerCase());
// console.log(arr);

// FILTER method - yangi massiv qaytaradi filter qilib

// const car = ["mercedes benz", "bmw", "audi", "rolce roys"];
// const arr = car.filter((item) => item.length < 5);
// console.log(arr);

// SOME/EVERY - boolean qiymat qaytaradi

// const arr = [1, "Jamshid", true];
// console.log(arr.some((item) => typeof item == "number"));
// console.log(arr.every((item) => typeof item == "number"));

// REDUCE method - bitta qandaydur qiymat qaytaradi

// const arr = [4, 32, 1, 3];

//                    10 ||  0      4
//                           4      32
//                          36      1
//                          37      3
//                          40      0
// const res = arr.reduce((sum, current) => sum + current, 10);
// console.log(res);

const arr = ["bmw", "merc", "tesla"];
const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);
