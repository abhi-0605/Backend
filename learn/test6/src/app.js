const express = require('express');
const validationMiddleware = require('./middleware/validation.middleware');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, World!' });
});

app.post('/register', validationMiddleware.registerUserValidationRules ,(req, res) => {
    // Handle user registration logic here
    const { username, email, password } = req.body;
    res.status(201).json({ message: 'User registered successfully' });
})




module.exports = app;