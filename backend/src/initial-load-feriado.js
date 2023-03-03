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

const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

// Parse the feriados format in the db format
const parseFeriados = (feriados, year)=>{
    const currentDate = new Date().getTime();

        const parsedFeriados = feriados.map(feriado => ({
            ...feriado,
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
            
            const filter = { dia: f.dia, mes:f.mes,anio:f.anio };
            const updateFields = f;

            feriadoSchema.findOneAndUpdate(filter, updateFields, {upsert: true}, function(err, doc) {
                if (err) console.log(err);
                console.log(`${f.motivo} => succesfully saved.`);
            });
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
    }catch(err){
        console.log("Error de ejecución.");
        console.log(err?.message)
    }
}

run();
