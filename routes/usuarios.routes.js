const express = require('express');

const router = express.Router();

const controlador = require('../controllers/usuarios.controllers')

// PREFIX
// /api/usuarios 


// /api/usuarios/
router.get('/', controlador.mostrarTodos)
router.post('/', controlador.crearUno)
router.post('/login', controlador.login)
router.get('/:id', controlador.mostrarUno)
router.put('/:id', controlador.editarUno)
router.delete('/:id', controlador.borrarUno)


module.exports = router; 