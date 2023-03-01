const config = require('../config').config;
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const uri = config.mongodb_host+config.mongodb_db;

const client = mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Successfully conected to the DATABASE.");
}).catch(error =>{
    console.log("Could not connect to DATABASE....", error?.message);
    process.exit();
})
;

/* const db = client.db(dbName);
console.log(db) */