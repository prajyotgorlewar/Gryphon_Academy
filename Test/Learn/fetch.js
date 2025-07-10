const express = require('express');
const app = express();

app.use(express.json());

async function fetchData() {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    const json = await res.json();
    console.log(json);
}
fetchData();
app.listen(3000, () => {console.log('Server is running on port 3000');});