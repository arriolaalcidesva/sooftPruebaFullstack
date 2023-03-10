const express = require('express');
const config = require('../src/config').config
const app = express();
const PORT = config.port;
const router = require('./routes');
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use("/api/v2/feriados", router);

/**
 * Listens the server at Proviced Port 7070
 */
app.listen(PORT, () => {
    console.log(`Service listened at ${PORT}`);
})