const config = require('./config');
const fetch = require('node-fetch');
const FERIADOS_API= "http://nolaborables.com.ar/api/v2/"; //config.feriados_host;
const YEAR = new Date().getFullYear();
const feriadoSchema = require('./model/feriado.model');
const db = require('../src/bd');

// Retrieve a list with the no laborable days of a year.
const fetchFeriados = async (year)=>{

    console.log('FERIADOS_API: ',FERIADOS_API);
    console.log('year: ',year);

    const url = `${FERIADOS_API}feriados/${year}`;
    console.log('url: ',url);
    const response = await fetch(url);

    return await response.json();
}

// Parse the feriados format in the db format
const parseFeriados = (feriados, year)=>{
    const currentDate = new Date().getTime();
    const parsedFeriados = feriados.map(feriado=>({
        feriado,
        ...year,
        ...currentDate
    }));
    return parsedFeriados;
}

// Save feriados in schema.
const saveFeriados = (feriados)=>{
    console.log("saveFeriados...");
    try {
        const proms = feriados.map(f=>{
            
            const feriadoDoc = new feriadoSchema(f);
            feriadoDoc.save(); //codigo en mongose
        });
    
        return Promise.allSettled(proms);
    } catch (error) {
        console.log(error?.message)
    }

}

// Process file.
const run = async (year=YEAR)=>{

    try{
        const feriados = await fetchFeriados(year);
        
        const parsed = parseFeriados(feriados, year);
        console.log("parsed...: ",parsed);
        await saveFeriados(parsed);
        
    }catch(err){
        console.log(err)
    }
}

run();
