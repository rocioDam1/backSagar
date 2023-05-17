const mongoose = require('mongoose');
const { Schema } = mongoose;

const graficaMedidasEsquema = new Schema({
    usuario_id: { type: String, require: true },
    fecha: { type: String, require: true },
    medidas: { type: Array, require: true }, // [cadera,cintura,brazos] 
});


module.exports = mongoose.model('grafica-medidas', graficaMedidasEsquema);