const mongoose = require('momgoose');

const userSchema= new mongoose.Schema({
    username:String,
    email:String,
    password:String,
})

const userModel=mongoose.model("user",users=userSchema)



module.exports=userModel;