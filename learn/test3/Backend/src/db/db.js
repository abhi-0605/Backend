const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose=require('mongoose')



async function Connectdb(){
    await mongoose.connect(process.env.MONOGO_URI)
    console.log("db is connected")
}

module.exports=Connectdb;