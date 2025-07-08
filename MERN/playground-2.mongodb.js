db.emp.insertMany([
  { name: "Amit", age: 30, city: "Delhi", salary: 40000 },
  { name: "Neha", age: 27, city: "Mumbai", salary: 50000 },
  { name: "Rahul", age: 35, city: "Delhi", salary: 60000 },
  { name: "Priya", age: 22, city: "Bangalore", salary: 45000 }
]);

// 1. Update Rahul's salary to 65000.
db.emp.updateOne({ name: "Rahul" }, { $set: { salary: 65000 } });

// 2. Increase salary by 3000 for all employees in Bangalore.
db.emp.updateMany({ city: "Bangalore" }, { $inc: { salary: 3000 } });

// 3. Rename the field city to location.
db.emp.updateOne({}, { $rename: { city: "location" } });

// 4. Remove the age field from all documents.
db.emp.updateMany({}, { $unset: { age: 1 } });

// 5. Delete the employee named Priya.
db.emp.deleteOne({ name: "Priya" });

// 6. Delete all employees with salary less than 45000.
db.emp.deleteMany({ salary: { $lt: 45000 } });
