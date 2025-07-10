const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.use(express.json());

app.post('/check', (req, res) => {
    const auth = req.headers.authorization;
    const userAgent = req.headers['user-agent'];
    const customAgent = req.headers['x-client-id'];
    console.log('Authorization:', auth);
    console.log('User Agent:', userAgent);
    console.log('x-client-id:', customAgent);
    res.json({ auth, userAgent, customAgent });
});

app.post('/submit', (req, res) => {
    console.log('Body:', req.body);
    res.json({
        message: 'Received',
        received: req.body
    });
});

PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});