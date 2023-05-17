const express = require('express');

const router = express.Router();

const controlador = require('../controllers/asesorias.controllers')




// /api/asesorias/
router.get('/', controlador.mostrarTodos)
router.post('/', controlador.crearUno)
router.get('/:id', controlador.mostrarUno)
router.put('/:id', controlador.editarUno)
router.delete('/:id', controlador.borrarUno)


module.exports = router;