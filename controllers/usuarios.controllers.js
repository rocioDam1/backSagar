const controlador = {};
const usuariosModels = require('../models/usuarios.models');

controlador.mostrarTodos = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const todosLosUsuarios = await usuariosModels.find();   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(todosLosUsuarios);
};

controlador.mostrarUno = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const unUsuario = await usuariosModels.findById(req.params.id);   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(unUsuario);
}

controlador.crearUno = async (req, res) => {
    const nuevoUsuario = new usuariosModels(req.body);
    const usuario = await usuariosModels.find({ email: req.body.email });
    if (usuario.length === 0) {
        await nuevoUsuario.save();
        return res.json({ status: 'USUARIO GUARDADO' });
    } else {
        return res.json({ status: 'YA ESTA REGISTRADO, INICIE SESION' });
    }
}

controlador.login = async (req, res) => {
    const body = req.body;
    const usuario = await usuariosModels.find({ email: body.email, password: body.password });   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(usuario);
}

controlador.editarUno = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res 
    await usuariosModels.findByIdAndUpdate(req.params.id, { $set: req.body });
    return res.json({ status: "USUARIO ACTUALIZADO" });
}

controlador.borrarUno = async (req, res) => {
    await usuariosModels.findByIdAndRemove(req.params.id);
    return res.json({ status: "USUARIO BORRADO" });
}

module.exports = controlador;