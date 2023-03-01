const db = require('../bd');

const express = require('express');
const app = express();

const getAllFeriados = app.get('/api/v2/feriados/', async (req, res) => { 
    let collection = await db.collection("feriados-2023");
    let results = await collection.find({})
    .limit(50)
    .toArray();
    
    if (!results) res.send("Feriados not found").status(404);
    res.send(results).status(200);
});

module.exports = {getAllFeriados}