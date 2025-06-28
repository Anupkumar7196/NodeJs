const obj = require("./sum.js");
//Importing from sum.js
// const {x, calculate} = require("./sum.js";)
var name="Hellow World";
console.log(name);

// console.log(global);
console.log( "Sum module is executed");
var a = 8;
var b = 9;

console.log(obj.x);
obj.calculate(a, b);
console.log("---------------");


