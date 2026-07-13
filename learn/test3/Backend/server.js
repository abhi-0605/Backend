require('dotenv').config();
const app=require('./src/app');
const Connectdb=require("./src/db/db")

Connectdb();


app.listen(3000,() => {
    console.log("server is running on port 3000")
})