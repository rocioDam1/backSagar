require('dotenv').config();
const express = require('express');
const { mongoose } = require('./database');

const app = express();
const cors = require('cors'); //requerimos cors para comunicar el servidor con angular

app.use(cors({ origin: '*' })); //para usar cors http://localhost:8100
app.use(express.json());

//definimos la ruta aqui 
app.use('/api/productos', require('./routes/productos.routes'));
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/compras', require('./routes/compras.routes'));
app.use('/api/reservas', require('./routes/reservas.routes'));
app.use('/api/asesorias', require('./routes/asesorias.routes'));

app.use('/api/grafica-peso', require('./routes/grafica-peso.routes'));

app.use('/api/grafica-medidas', require('./routes/grafica-medidas.routes'));

app.listen(process.env.PORT, () => {
    console.log('Server ejecutandose en el puerto 3000');
});