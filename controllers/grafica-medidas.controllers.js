const controlador = {};
const GraficaMedidasModels = require('../models/grafica-medidas.models');

controlador.mostrarTodosUsuario = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const todosLasMedidas = await GraficaMedidasModels.find({ usuario_id: req.params.idUsuario });   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(todosLasMedidas);
};


controlador.crearUno = async (req, res) => {
    const nuevaMedida = new GraficaMedidasModels(req.body);
    await nuevaMedida.save();
    return res.json({ status: 'Medida GUARDADA' });
}


module.exports = controlador;