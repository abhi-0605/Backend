const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);


const mongoose=require('mongoose')
async function connectdb() {
    await mongoose.connect("mongodb+srv://backend:FoFrI9kZtuFOlNHR@backend.tksmref.mongodb.net/test2db")
    console.log("connected to DB")
}

module.exports=connectdb

//mongodb+srv://backend:<db_password>@backend.tksmref.mongodb.net/
// mongodb+srv://backend:FoFrI9kZtuFOlNHR@backend.tksmref.mongodb.net/