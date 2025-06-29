const obj = require("./sum.js");
//Importing from sum.js
// const {x, calculate} = require("./sum.js";)
// var name="Hellow World";
// console.log(name);

// console.log(global);
// console.log( "Sum module is executed");
// var a = 8;
// var b = 9;

// console.log(obj.x);
// obj.calculate(a, b);
// console.log("---------------");


//----------calcultate multiplication------------
// const calculateMultiply = require("./multiply.js");
// calculateMultiply(a, b);

var a = 10;
var b = 20;
import { calculateSum, calculateMultiply } from "./index.js";
calculateSum(a,b);
calculateMultiply(a,b);


