// In case of map, filter and reduce map will always return an array.


// 1. Create an array of 5 student scores. Use reduce() to get total and average.
const scores = [10, 20, 30, 40, 50];
const total = scores.reduce((acc, curr) => acc + curr, 0);
const average = total / scores.length;
console.log(total, average);

// 2. Filter an array of objects to return only those with a score &gt; 70.
const students = [
    { name: "Alice", score: 65 },
    { name: "Bob", score: 72 },
    { name: "Charlie", score: 85 }
];
const highScorers = students.filter(student => student.score > 70);
console.log(highScorers);

// 3. Write a function to remove all falsy values from an array ([0, &quot;&quot;, null, 5] → [5]).
const array = [0, "", null, 5];
function removeFalsy(arr) {
    return arr.filter(Boolean);
}
console.log(removeFalsy(array));

// 4. Capitalize each word in an array and sort alphabetically.
const words = ["one", "three", "five"];
const capitalizedAndSorted = words
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .sort();
console.log(capitalizedAndSorted); 

//5. Use map() and join() to format an array of names into a string: &quot;A, B, C&quot;
const names = ["Alice", "Bob", "Charlie"];
const initials = names.map(name => name[0]).join(", ");
console.log(initials); 



