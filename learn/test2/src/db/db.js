const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);


const mongoose=require('mongoose')
async function connectdb() {
    await mongoose.connect(process.env.MONOGO_URI)
    console.log("connected to DB")
}


module.exports=connectdb

