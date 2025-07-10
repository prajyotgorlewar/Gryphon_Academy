const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
const tokens = [];

//1. generate and store JWT tokens
app.post('/generate-token', (req, res) => {
    const user = {
        id: 1,
        username: 'testuser',
    };
    const token = jwt.sign(user, SECRET_KEY);
    tokens.push(token);
    res.json({
        message: 'Token generated successfully',
        token
    });
});

//2. verify JWT tokens
app.post('/verify-token', (req, res) => {
    const headerAuth = req.headers['authorization'];
    if (!headerAuth) {
        return res.status(400).json({
            error:'authorization header is required'
        });
    }
    const token = headerAuth && headerAuth.split(' ')[1];
    if (!tokens.includes(token)) {
        return res.status(403).json({
            error:'Token not recognised or expired'
        });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({
            message: 'Token verified successfully',
            decoded
        });
    } catch (error) {
        res.status(403).json({
            error: 'Token verification failed'
        });
    }
});

// SESSION IS OF TWO TYPES CLIENT SIDE SESSION STATE MANAGEMENT AND SERVER SIDE SESSION MANAGEMENT
// if session is maintained using browser like cookies and viewstate then it is called client side session management
// if session is mmanaged by storing tokens or cookies on server side then it is called server side session management



PORT = process.env.PORT || 3000;
app.listen (PORT, () => {
    console.log('Server is running on port '+PORT);
});