const mongoose = require('mongoose');
const { Schema } = mongoose;

const productosEsquema = new Schema({
    nombre: { type: String, require: true },
    precio: { type: Number, require: true },
    stocks: { type: Number, require: true },
    imagen: { type: String, require: true },
    descripcion: { type: String, require: true },
    color: { type: String, require: true },
    tipo: { type: String, require: true },
    talla: { type: String, require: true },
});     


module.exports = mongoose.model('productos', productosEsquema);