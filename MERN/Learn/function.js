// Normal Function
function add(a, b) { return a + b;}

// Anonymous Function
const sum = function (a, b) {
    return a + b;
};

//  Arrow Function
const arrow_sum = (a, b) => { return a + b; };

// Callback and Higher Order Functions
function applyOperation(a, b, operation) {
    return operation(a, b);
}
const multiply = (a, b) => a * b;
const result = applyOperation(5, 3, multiply);