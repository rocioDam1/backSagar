const express = require('express');

const router = express.Router();

const controlador = require('../controllers/grafica-medidas.controllers')




// /api/medidas/
router.post('/', controlador.crearUno)
router.get('/:idUsuario', controlador.mostrarTodosUsuario)


module.exports = router;