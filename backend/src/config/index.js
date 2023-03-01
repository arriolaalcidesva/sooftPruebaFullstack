const config = {
    user_db:process.env.DB_USER,
    pswd_db:process.env.DB_USER,
    port:parseInt(process.env.PORT, 10),
    feriados_host:process.env.API_EXTERNAL_FERIADO
};

module.exports = {config}