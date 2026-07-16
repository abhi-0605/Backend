const dns=require('dns');
dns.setServers(["8.8.8.8","8.8.4.4"])

const mongoose=require('mongoose');

async function connectdb(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('database connected successfully');
    }catch(err){
        console.log("error in connecting to database",err);
    }
}

module.exports=connectdb;