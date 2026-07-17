// const mongoose=require('mongoose');
const express=require('express');
const authRoutes=require('./routes/auth.routh');
const cookieParser=require('cookie-parser')
const postRoutes=require('./routes/post.routes');
const app=express();
app.use(express.json());
app.use(cookieParser());



app.use('/api/auth',authRoutes);
app.use('/api/posts',postRoutes);


module.exports=app;