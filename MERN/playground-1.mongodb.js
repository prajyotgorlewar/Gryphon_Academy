db.employees.insertMany([
    {
        name: "Amit",
        age: 28,
        city: "Delhi",
        skills: ["Node.js", "MongoDB", "Express"],
        isActive: true
    },
    {
        name: "Meera",
        age: 35,
        city: "Mumbai",
        skills: ["React", "Node.js"],
        isActive: false
    },
    {
        name: "Zara",
        age: 24,
        city: "Bangalore",
        skills: ["Python", "Flask"],
        isActive: true
    }
]);


// 1. Find employees aged less than 30.
db.employees.find({ age: { $lt: 30 } });

// 2. Find employees who are not from Delhi.
db.employees.find({ city: {$ne:"Delhi"} });

// 3. Find employees skilled in either React or MongoDB.
db.employees.find({skills:{$in:["React","MongoDB"]}});

// 4. Find employees who have both Node.js and MongoDB skills.
db.employees.find({skills:{$all:["Node.js", "MongoDB"]}})

// 5. Find all inactive employees.
db.employees.find({ isActive: false });

// 6. Find employees with exactly 3 skills.
db.employees.find({ skills: { $size: 3 } });

// 7. Find employees with age of type integer.
db.employees.find({ age: { $type: "int" } });

// 8. Find employees whose city is neither Delhi nor Mumbai.
db.employees.find({ city: { $nin: ["Delhi", "Mumbai "]}});