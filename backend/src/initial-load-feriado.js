const config = require('./config').config;
const fetch = require('node-fetch');
const FERIADOS_API= config.feriados_host;
const YEAR = new Date().getFullYear();
const feriadoSchema = require('./model/feriado.model');
const db = require('../src/bd');

// Retrieve a list with the no laborable days of a year.
const fetchFeriados = async (year)=>{

    const url = `${FERIADOS_API}feriados/${year}`;
    console.log('url: ',url);
    const response = await fetch(url);

    return await response.json();
}

// Parse the feriados format in the db format
const parseFeriados = (feriados, year)=>{
    const currentDate = new Date().getTime();

    const MyObject = {
        motivo: '',
        tipo: '',
        info: '',
        dia: 0,
        mes: 0,
        id: '',
        anio: 0,
        dateImported:''
    };

        const parsedFeriados = feriados.map(feriado => {
            
            MyObject.motivo = feriado.motivo;
            MyObject.tipo = feriado.tipo;
            MyObject.info = feriado.info;
            MyObject.dia = feriado.dia;
            MyObject.mes = feriado.mes;
            MyObject.id = feriado.id;
            MyObject.anio = year;
            MyObject.dateImported = currentDate;

            return MyObject;
        })

    return parsedFeriados;
}

// Save feriados in schema.
const saveFeriados = (feriados)=>{
    console.log("Recorriendo feriados...");
    try {
        const proms = feriados.map(f=>{
            
            const feriadoDoc = new feriadoSchema(f);
            feriadoDoc.save();
        });
    
        return Promise.allSettled(proms);
    } catch (error) {
        console.log(error?.message)
    }

}

const run = async (year=YEAR)=>{

    try{
        const feriados = await fetchFeriados(year);
        
        const parsed = parseFeriados(feriados, year);
        
        await saveFeriados(parsed); 
        console.log("Feriados guardados exitosamente.");
        
    }catch(err){
        console.log("Error de ejecución.");
        console.log(err?.message)
    }
}

run();
