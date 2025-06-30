// const a = [1, 2, 3, 4, 5];
// const b = [6, 7, 8, 9, 10];

// const c = [a, b, 11, 12, 13];

// console.log(c); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


function abc(x, y, ...z) {
    console.log(x); // Output: 10
    console.log(y); // Output: 20
    console.log(z); // Output: [20, 30, 40, 50]
    
}

abc(10, 20, 30, 40, 50);