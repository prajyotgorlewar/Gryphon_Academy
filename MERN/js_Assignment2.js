// 1. calculateTax(amount) – return 18% of the amount.
calculateTax = (amount) => amount * 0.18;

// 2. Write a higher-order function that accepts a function and a value.
function higherOrder(func, value) {
    return func(value);
}

// 3. Build memoize() to cache expensive function calls.
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
    
// 4. Create an IIFE that prints "JS Started" instantly.
(function () { console.log("JS Started"); })();

// 5. Write an async function that waits 3 seconds and returns "Timer Done".
async function timer() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return "Timer Done";
}

