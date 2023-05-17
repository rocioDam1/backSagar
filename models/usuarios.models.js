const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuariosEsquema = new Schema({
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    rol: { type: String, require: true },
});


module.exports = mongoose.model('usuarios', usuariosEsquema);