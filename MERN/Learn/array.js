const nums = [1, 2, 3];


// Iterates over the index
for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}

// Iterates over the values
for(let n of nums){
    console.log(n);
}

// Iterates over the value, using shorthand code
nums.forEach(n => console.log(n));