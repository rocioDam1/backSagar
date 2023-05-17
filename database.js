const mongoose = require('mongoose');
const URI = 'mongodb+srv://rociocid1990:rociovi2@cluster0.tcibnpg.mongodb.net/proyecto?retryWrites=true&w=majority'//'mongodb://127.0.0.1:27017/proyecto';

mongoose.connect(URI) 
    .then(db => console.log('La DB está conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;