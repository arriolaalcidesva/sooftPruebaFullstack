const mongoose = require('mongoose');

//const schema = mongoose.Schema;

const feriadoSchema = new mongoose.Schema({
    motivo: {type:String},
    tipo: {type:String},
    info: {type:String},
    dia: {type:Number},
    mes: {type:Number},
    id: {type:String},
    anio: {type: Number},
    dateImported: {type: Date}
});

module.exports = feriado = mongoose.model('feriado',feriadoSchema)