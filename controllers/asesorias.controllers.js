const controlador = {};
const AsesoriasModels = require('../models/asesorias.models');

controlador.mostrarTodos = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const todosLasAsesorias = await AsesoriasModels.find();   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(todosLasAsesorias);
};

controlador.mostrarUno = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const unaAsesoria = await AsesoriasModels.findById(req.params.id);   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(unaAsesoria);
}

controlador.crearUno = async (req, res) => {
    const nuevaAseosria = new AsesoriasModels(req.body);
    await nuevaAseosria.save();
    return res.json({ status: 'ASESORIA GUARDADA' });
}

controlador.editarUno = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res 
    await AsesoriasModels.findByIdAndUpdate(req.params.id, { $set: req.body });
    return res.json({ status: "ASESORIA ACTUALIZADA" });
}

controlador.borrarUno = async (req, res) => {
    await AsesoriasModels.findByIdAndRemove(req.params.id);
    return res.json({ status: "ASESORIA BORRADA" });
}

module.exports = controlador;