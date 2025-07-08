**Assessment Day-2 Answers**

---

**1. Explain what is MVC, Monolithic and RestAPIs**

- **MVC (Model-View-Controller)**:  A design pattern that separates application logic into:

  - **Model** – handles data (e.g., DB logic).
  - **View** – handles UI (what user sees).
  - **Controller** – handles input and communication between model & view.

- **Monolithic**: An architecture where the entire app (UI, logic, data access) is built and deployed as a single unit.

- **REST APIs (Representational State Transfer)**: A way of building APIs using HTTP methods (GET, POST, PUT, DELETE) to access and manipulate resources (usually in JSON format).

---

**2. What are different API status codes**

- 200 OK – Successful request
- 201 Created – Resource created
- 400 Bad Request – Invalid input
- 401 Unauthorized – Auth required
- 403 Forbidden – No permission
- 404 Not Found – Resource missing
- 500 Internal Server Error – Server issue

---

**3. How do we connect with MySQL**

```js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test_db"
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});
```

---

**4. Code snippet for health check route**

```js
app.get("/", (req, res) => {
  res.status(200).send("Server is healthy 🚀");
});
```

---

**5. Write the student schema where address is (state, city, pin)**

```js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: {
    state: String,
    city: String,
    pin: Number
  }
});

module.exports = mongoose.model('Student', studentSchema);
```

---

**6. What are middlewares in Express and how are they used? Name some middlewares**

- Middlewares are functions that run between the request and response.
- Used for: logging, validation, authentication, error handling

```js
app.use(express.json()); // built-in middleware
```

- Examples:
  - express.json()
  - cors
  - morgan
  - helmet

---

**7. What is CORS? How is it enabled in app.js**

- **CORS (Cross-Origin Resource Sharing)** allows frontend apps from different domains to access backend APIs.

Enable CORS:

```js
const cors = require('cors');
app.use(cors());
```

---

**8. Difference between MJS and CommonJS**

| Feature        | CommonJS          | MJS (ES Modules)   |
| -------------- | ----------------- | ------------------ |
| File extension | .js               | .mjs               |
| Import         | require()         | import             |
| Export         | module.exports    | export             |
| Used in        | Node.js (default) | ES6+ (modern Node) |

---

**9. Write 3 functions in JS**

a. Named function

```js
function greet(name) {
  return `Hello, ${name}`;
}
```

b. Arrow function

```js
const add = (a, b) => a + b;
```

c. Async/Await

```js
const fetchData = async () => {
  const res = await fetch("https://api.example.com");
  const data = await res.json();
  console.log(data);
};
```

---

**10. Why are async/await used in Express?**

To handle asynchronous operations (e.g., DB calls) cleanly using try/catch instead of chaining .then() promises. This prevents callback hell and improves error handling.

---

**11. Create server in Node.js using http (without Express)**

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server running without Express");
  }
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
```

---

**12. What are body-parser, helmet, morgan, jest, mocha**

- **body-parser**: Parses incoming request bodies
- **helmet**: Adds security headers to Express apps
- **morgan**: Logs HTTP requests
- **jest**: JavaScript testing framework by Facebook
- **mocha**: Feature-rich JS test framework (commonly used with Chai)

---

**13. Category schema and REST APIs to add/retrieve**

Schema:

```js
const categorySchema = new mongoose.Schema({
  id: Number,
  name: String
});

const Category = mongoose.model('Category', categorySchema);
```

Routes:

```js
// Add Category
app.post('/category', async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.status(201).send(category);
});

// Get All Categories
app.get('/category', async (req, res) => {
  const categories = await Category.find();
  res.status(200).send(categories);
});
```

