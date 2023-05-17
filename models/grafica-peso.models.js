const mongoose = require('mongoose');
const { Schema } = mongoose;

const graficaPesoEsquema = new Schema({
    usuario_id: { type: String, require: true },
    peso: { type: Number, require: true },
    fecha: { type: String, require: true }
    
});     


module.exports = mongoose.model('grafica-peso', graficaPesoEsquema);