const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservasEsquema = new Schema({
    usuario_id: { type: String, require: true },
    trainer_id: { type: String, require: true },
    start: {type: String, require: true},
    end: {type: String, require: true}

    
});


module.exports = mongoose.model('reservas', reservasEsquema);