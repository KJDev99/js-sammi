"use strict";

// new RegExp('pattern', 'flags')

// /pattern/flag

// const firstName = prompt('Whats is your name', '')

// const regex = /a/

// i -- katta kichik
// g -- global

// console.log(firstName.search(regex));
// console.log(firstName.match(regex));

// const passowod = prompt("Your Password");

// console.log(passowod.replace(/./g, "*"));
// console.log(passowod.replace(/\%/g, "*"));

// const num = "12-34-56-78-90";
// console.log(num.replace(/-/g, ":"));

// const name = prompt("Name");

// const regexp = /shid/gi;
// console.log(regexp.test(name));

const name = prompt("Name");
const regexp = /\D/gi;

// \d - number
// \w - word
// \s - space

// \D - not a number
// \W - not a word
// \S - not a space

console.log(name.replace(regexp, ""));
