const express = require('express');

const router = express.Router();

const controlador = require('../controllers/entrenadores.controllers')

// PREFIX



// /api/entrenadores/
router.get('/', controlador.mostrarTodos)
router.post('/', controlador.crearUno)
router.post('/login', controlador.login)
router.get('/:id', controlador.mostrarUno)
router.delete('/:id', controlador.borrarUno)


module.exports = router; 