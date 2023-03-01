const config = require('./config').config;
const fetch = require('node-fetch');
const FERIADOS_API= config.feriados_host;
const YEAR = new Date().getFullYear();
const feriadoSchema = require('./model/feriado.model');
const db = require('../src/bd');

// Retrieve a list with the no laborable days of a year.
const fetchFeriados = async (year)=>{

    const url = `${FERIADOS_API}feriados/${year}`;
    
    const response = await fetch(url);

    return await response.json();
}

// Parse the feriados format in the db format
const parseFeriados = (feriados, year)=>{
    const currentDate = new Date().getTime();

        const parsedFeriados = feriados.map(feriado => ({
            motivo : feriado.motivo,
            tipo : feriado.tipo,
            info : feriado.info,
            dia : feriado.dia,
            mes : feriado.mes,
            id : feriado.id,
            anio : year,
            dateImported : currentDate
        }))
        //console.log('parsedFeriados: ', parsedFeriados)
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
