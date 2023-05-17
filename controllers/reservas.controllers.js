const controlador = {};
const reservasModels = require('../models/reservas.models');

controlador.reservasUsuario = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const reservas = await reservasModels.find({ usuario_id: req.params.id });
    return res.json(reservas);
};
controlador.reservasTrainer = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const reservas = await reservasModels.find({ trainer_id: req.params.id });
    return res.json(reservas);
};
controlador.mostrarTodos = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const todosLasReservas = await reservasModels.find();   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(todosLasReservas);
};


controlador.mostrarUna = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const unaReserva = await reservasModels.findById(req.params.id);   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(unaReserva);
}

controlador.crearUna = async (req, res) => {
    const nuevaReserva = new reservasModels(req.body);
    // const reserva = await reservasModels.find({ id_usuario: req.body.id_usuario, start: req.body.start });
    await nuevaReserva.save();
    return res.json({ status: 'RESERVA GUARDADA' });
    // if (reserva.length === 0) {
    // } else {
    //     return res.json({ status: 'yA NO SE PUEDE RESERVAS ESA HORA' });
    // }
}

controlador.editarUna = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res 
    await reservasModels.findByIdAndUpdate(req.params.id, { $set: req.body });
    return res.json({ status: "RESERVA ACTUALIZADA" });
}

controlador.borrarUna = async (req, res) => {
    await reservasModels.findByIdAndRemove(req.params.id);
    return res.json({ status: "RESERVA BORRADA" });
}

module.exports = controlador;