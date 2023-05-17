const controlador = {};
const productosModels = require('../models/productos.models');

controlador.mostrarTodos = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const todosLosProductos = await productosModels.find();   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(todosLosProductos);
};

controlador.mostrarUno = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const unProducto = await productosModels.findById(req.params.id);   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(unProducto);
}

controlador.crearUno = async (req, res) => {
    const nuevoProducto = new productosModels(req.body);
    await nuevoProducto.save();
    return res.json({ status: 'PRODUCTO GUARDADO' });
}

controlador.editarUno = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res 
    await productosModels.findByIdAndUpdate(req.params.id, { $set: req.body });
    return res.json({ status: "PRODUCTO ACTUALIZADO" });
}

controlador.borrarUno = async (req, res) => {
    await productosModels.findByIdAndRemove(req.params.id);
    return res.json({ status: "PRODUCTO BORRADO" });
}

module.exports = controlador;