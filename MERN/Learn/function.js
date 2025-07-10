// Normal Function
// function add(a, b) { return a + b;}

// Anonymous Function
// const sum = function (a, b) { return a + b;};

// Arrow Function
// const arrow_sum = (a, b) => { return a + b; };

// Callback and Higher Order Functions
// function applyOperation(a, b, operation) { return operation(a, b);}
// const multiply = (a, b) => a * b;
// console.log(applyOperation(2, 3, multiply));
// const add = (a, b) => a + b;
// console.log(applyOperation(2, 3, add));
// const subtract = (a, b) => a - b;
// console.log(applyOperation(2, 3, subtract));
// const divide = (a, b) => a / b;
// console.log(applyOperation(2, 3, divide));
// If the operation is I/O Operation then applyOperation() will become async and callback will become await

// Immidiate Invoked Function Expression (IIFE)
// In event driven programming we nee to invoke certain function based on that events, in those events we use IIFE
// (function(){ console.log("I run immediately"); })();

// REST and Spread function: passing collection as a spread parameters to a funtion.
//function sum(...nums) { return nums.reduce((a, b) => a + b); }
//console.log(sum(1, 2, 3, 4, 5)); // passing variable length of arguments
// in case of a post API we can send a variable length of JSON body

// Async and Await: a function which is asynchronous in nature will always return a promise
// async by default returns a promise
// await pauses until promise resolves
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function load() {
//     console.log("Loading...");
//     await delay(2000);
//     console.log("Done!");
// }
// load();

// Function Constructors



  


