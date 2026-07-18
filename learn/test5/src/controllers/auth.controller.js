const userModel = require('../models/user.model');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')


async function registerUser(req,res){
    const {username, email, password,role="user"} = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        
        $or:[
            {username:username},
            {email:email}
        ]
    })
    if(isUserAlreadyExist){
        return res.status(409).json({
            message : "user already exist"
        })
    }
    
    const hashedPassword=await bcrypt.hash(password,10);

    const user= await userModel.create({
        username,
        email,
        password:hashedPassword,
        role
    })

    const token=jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"user register successfully",
        id:user._id,
        username:user.username,
        email:user.email,
        role:user.role
    })
}


async function loginUser(req,res){
    const {username, email,password}=req.body;

    const user=await userModel.findOne({
        $or:[
            {username:username},
            {email:email}
        ]
    })
    if(!user){
        return res.status(401).json({
            message:"invalid credentials"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(401).json({
            message:"invalid credentials"
        })
    }

    const token=jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)
    
    res.cookie("token",token);

    res.status(200).json({
        message:"user login successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }
    })
}


async function logoutUser(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"user logout successfully"
    })
}
module.exports={registerUser, loginUser, logoutUser}