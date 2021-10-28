const mongoose = require('mongoose');

const FormularioSchema = mongoose.Schema({
    tipoidentificacion: {
        type: String,
        required: true
    },
    numeroidentificacion: {
        type: String,
        required: true
    },

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    genero: {
        type: String,
        required: true
    },

    fec_cre: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('Formulario', FormularioSchema)