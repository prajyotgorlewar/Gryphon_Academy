// Promises: promises works on the concept of resolve and reject., promises leads to promise chaining
//how to create a promise

const checkNUmber = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve("Positive Number")
        } else {
            reject("Not a Positive Number")
        }
    })
};
