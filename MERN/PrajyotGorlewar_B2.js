// Tasks

//1.
db.students.insertMany([
    {
        name: "Anika",
        age: 21,
        isEnrolled: true,
        subjects: ["Math", "Physics"],
        contact: { email: "anika@mail.com", phone: "1234567890" },
        joined: new Date("2024-06-01")
    },
    {
        name: "Ravi",
        age: 24,
        isEnrolled: false,
        subjects: ["History", "English"],
        contact: { email: "ravi@mail.com", phone: "9876543210" },
        joined: new Date("2023-09-15")
    }
]);

//2.
db.students.find({isEnrolled:true});

//3.
db.students.find({ joined: { $gt: new Date("2024-01-01")}});

//4.
db.students.find({}, { name: 1, "contact.email": 1 });

//5.
db.students.find({ subjects: "Math" });





  