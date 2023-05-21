const controlador = {};
const entrenadoresModels = require('../models/usuarios.models');

controlador.mostrarTodos = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const todosLosEntrensdores = await entrenadoresModels.find();   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(todosLosEntrensdores);
};

controlador.mostrarUno = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const unEntrenador = await entrenadoresModels.findById(req.params.id);   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(unEntrenador);
}

controlador.crearUno = async (req, res) => {
    const nuevoEntrenador = new entrenadoresModels(req.body);
    const entrenador = await entrenadoresModels.find({ email: req.body.email });
    if (entrenador.length === 0) {
        await nuevoEntrenador.save();
        return res.json({ status: 'USUARIO GUARDADO' });
    } else {
        return res.json({ status: 'YA ESTA REGISTRADO, INICIE SESION' });
    }
}

controlador.login = async (req, res) => {
    const body = req.body;
    const usuario = await entrenadoresModels.find({ email: body.email, password: body.password });   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(entrenador);
}

controlador.borrarUno = async (req, res) => {
    await entrenadoresModels.findByIdAndRemove(req.params.id);
    return res.json({ status: "USUARIO BORRADO" });
}

module.exports = controlador;