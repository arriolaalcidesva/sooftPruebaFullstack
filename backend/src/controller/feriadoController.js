const feriadoService = require("../service/feriadoService");

const getAllFeriados = (req, res) =>{
	try{
		const allFeriados =  feriadoService.getAllFeriados();
        console.log(allFeriados);
		res.send({status:"OK", data:allFeriados});
	}catch (error) {
		res
			.status(error?.status || 500)
			.send({status:"FAILED", data:{error: error?.message || error }});
	}
};

module.exports = {
    getAllFeriados
  };