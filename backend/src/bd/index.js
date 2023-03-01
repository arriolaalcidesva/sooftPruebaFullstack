const mongoose = require('mongoose');

const uri = `mongodb+srv://alcidesarriola:m1c43lA0@cluster0.exlwywo.mongodb.net/feriados`;
/* const dbName = 'feriados';
const collectionName = 'feriados-2023'; */

const client = mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Successfully conected to the DATABASE.");
}).catch(error =>{
    console.log("Could not connect to DATABASE....", error);
    process.exit();
})
;

/* const db = client.db(dbName);
console.log(db) */