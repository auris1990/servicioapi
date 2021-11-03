const express = require('express'); //Llamada del servicio de express
const conectarDB = require('./config/db');
const cors = require('cors');

const aplicacion = express(); //implementando el servicio en la aplicacion

conectarDB();
aplicacion.use(cors());

// aplicacion.get('/', (req, res) => {
//     res.send("hola")
// })

//aplicacion.use('/api/agregarproducto', require('./routes/producto'));
//aplicacion1.use('/api/agregarformulario', require('./routes/formulario'));
aplicacion.use(express.json());

aplicacion.use('/api/producto', require('./Routes/producto'));
aplicacion.use('/api/formulario', require('./Routes/formulario'));



//localhost:4000 - 127.0.0.1:4000
aplicacion.listen(4000, () => {
    console.log("El servidor esta funcionando");

});

