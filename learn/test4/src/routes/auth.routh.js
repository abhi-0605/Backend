const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth.controller');

//api
//post request for register user  /api/auth/register
router.post('/register', authController.registerUser);

// router.get('/test', (req, res) => {
//     console.log("cookie", req.cookies)
//     res.json({
//         message: "Test route",
//         cookies: req.cookies
//     })
// })



module.exports =router;