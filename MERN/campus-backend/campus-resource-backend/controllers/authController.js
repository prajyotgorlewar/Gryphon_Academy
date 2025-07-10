const { registerUser, loginUser } = require('../services/userService');

const register = async (req, res) => {
    try {
        const data = await registerUser(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

const login = async (req, res) => {
    try {
        const data = await loginUser(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

module.exports = { register, login };