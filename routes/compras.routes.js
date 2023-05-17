const express = require('express');

const router = express.Router();

const controlador = require('../controllers/compras.controllers')

// PREFIX
// /api/compras

// /api/compras/
router.get('/', controlador.mostrarTodos)
router.get('/usuario/:idUsuario', controlador.mostrarTodosUsuario)
router.post('/', controlador.crearUno)
router.get('/:id', controlador.mostrarUno)
router.put('/:id', controlador.editarUno)
router.delete('/:id', controlador.borrarUno)

module.exports = router;