const express = require('express');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

router.post('/create',async (req, res) => {
    // console.log(req.body);
    // console.log(req.cookies);

    // check if the user is authenticated or not
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "unauthorized"
        })
    }
    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById({
            _id: decoded.id
        });
        console.log("user", user);
    } catch (error) {
        return res.status(401).json({
            message: "invalid token"
        })
    }


    res.send("post created successfully");
})

module.exports = router;