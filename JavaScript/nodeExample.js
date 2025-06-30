let fs = require("fs");

function letsRead(filename) {
    return new Promise(function (resolve, reject) {  // internal state [pending --> resolved]
        fs.readFile(filename, { encoding: "utf8" },
            function (err, contents) {
                if (err) {
                    reject(err);
                    return;
                }
            resolve(contents);
    })
});
}

let p1 = letsRead("example.txt")

// p1.then(             // thenable  when promise settles
//     function (contents) {
//         console.log("from p1" + contents);
//     },

//     function (err) {
//         console.error(err.message);
//     }
// )

// p1.catch() //better

let p2 = p1.then(function (value) {
    console.log(" from p1" + value);
});

p2.then(function () {
    console.log("from p2");
});

// chaining promise
