const controlador = {};
const GraficaPesoModels = require('../models/grafica-peso.models');

controlador.mostrarTodosUsuario = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const todosLosPesos = await GraficaPesoModels.find({ usuario_id: req.params.idUsuario });   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(todosLosPesos);
};


controlador.crearUno = async (req, res) => {
    const nuevoPeso = new GraficaPesoModels(req.body);
    await nuevoPeso.save();
    return res.json({ status: 'PESO GUARDADO' });
}


module.exports = controlador;