const mongoose = require('mongoose');
const { Schema } = mongoose;

const asesoriasEsquema = new Schema({
    nombre: { type: String, require: true },
    precio: { type: Number, require: true },
    imagen: { type: String, require: true },
    descripcion: { type: String, require: true },
    stocks: { type: Number, require: true },
    
});     


module.exports = mongoose.model('asesorias', asesoriasEsquema);