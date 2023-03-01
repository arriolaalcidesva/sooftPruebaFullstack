const feriadoSchema = require('../model/feriado.model');
const db = require('../bd');

const getAllFeriados = async(req, res) => {
    try {
        return await feriadoSchema.find();
    } catch (error) {
        res
			.status(error?.status || 500)
			.send({status:"FAILED SERVICE", data:{error: error?.message || error }});
    }
}

module.exports = {getAllFeriados}