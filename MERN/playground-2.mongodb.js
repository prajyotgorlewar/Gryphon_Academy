// db.createCollection("employees");

// db.employees.insertMany([
//     { eid: 102, ename: "pajyot", department: "HR1" },
//     { eid: 103, ename: "prajyot", department: "HR2" },
//     { eid: 104, ename: "prjyot", department: "HR3" }
// ]);

// db.employees.find({});
// db.employees.find({ ename: "prajyot" });


// Create collection
// db.createCollection("department");

// Insert data
// db.department.insertMany([
//     { did: 100, dname: "HR" },
//     { did: 101, dname: "Sales" },
//     { did: 102, dname: "Payroll" },
//     { did: 103, dname: "Accounts" },
// ])

// // Display all data
// db.department.find({});

// // Find a record where dname is "Sales"
// db.department.find({ dname: "Sales" });


db.employees.insertOne({
    name: "Prajyot",
    age: 22,
    isActive: true,
    skills: ["JS", "HTML", "CSS", "React", "Node", "MongoDB"],
    address: {
        city: "Nagpur",
        pincode: 440013
    },
    joinedOn: new Date("2025-01-01")
});

db.employees.find({});

db.employees.find({ "address.city": "Nagpur" });
db.employees.find({ "skills": "JS", "address.city": "Nagpur" });
db.employees.find({ skills: { $all: ["JS", "HTML", "CSS"] } });


