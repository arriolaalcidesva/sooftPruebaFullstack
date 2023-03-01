const fetch = require('node-fetch');
//const MongoClient = require('mongodb').MongoClient;
const db = require('../lib/db');
const feriado = require('./model/feriado.model');

/* const uri = 'mongodb+srv://alcidesarriola:m1c43lA0@cluster0.exlwywo.mongodb.net/';
const dbName = 'feriados';
const collectionName = 'feriados-2023'; */

const obtenerFeriados = async () => {
    const response = await fetch('http://nolaborables.com.ar/api/v2/feriados/2023');
    const feriados = await response.json(); // Darle formato parseo
    return feriados;
  };

  
  const guardarFeriados = async (feriados) => {
    /* const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertMany(feriados);
    client.close(); */
    feriado.insertMany(feriados)
                                .then(()=>{console.log("Insert successfully")})
                                .catch(function(error){console.log(error)});// Failure
  
  };

  obtenerFeriados()
  .then((feriados) => {
    guardarFeriados(feriados);
  })
  .catch((error) => {
    console.error(error);
  });