const express = require('express');

const router = express.Router();

const controlador = require('../controllers/reservas.controllers')

// PREFIX
// /api/usuarios 


// /api/reservas/
router.get('/', controlador.mostrarTodos)
router.get('/usuario/:id', controlador.reservasUsuario)
router.get('/trainer/:id', controlador.reservasTrainer)
router.post('/', controlador.crearUna)
router.get('/:id', controlador.mostrarUna)
router.put('/:id', controlador.editarUna)
router.delete('/:id', controlador.borrarUna)


module.exports = router; 