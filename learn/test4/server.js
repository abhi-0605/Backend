const app=require('./src/app');
require('dotenv').config();
connectdb=require('./src/db/db');

connectdb();

app.listen(3000,() => {
    console.log('server is running on port 3000');
})