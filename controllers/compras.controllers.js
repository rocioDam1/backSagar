const controlador = {};
const comprasModels = require('../models/compras.models');
const productosModels = require('../models/productos.models');
const nodemailer = require("nodemailer");

controlador.mostrarTodos = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const todosLasCompras = await comprasModels.find();   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(todosLasCompras);
};

controlador.mostrarTodosUsuario = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const todosLasCompras = await comprasModels.find({ usuario_id: req.params.idUsuario });   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(todosLasCompras);
};

controlador.mostrarUno = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res
    const unaCompra = await comprasModels.findById(req.params.id);   //mientras busca estamos a la escucha y lo guarda en la constante, proceso asincrono
    return res.json(unaCompra);
}

// async..await is not allowed in global scope, must use a wrapper
async function mailer(to) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "1cc0525f381155",
          pass: "8833451da6ef89"
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// 



controlador.crearUno = async (req, res) => {
    const nuevaCompra = new comprasModels(req.body);
    await nuevaCompra.save();
    for (let i = 0; i < req.body.productos.length; i++) {
        const producto = req.body.productos[i];

        await productosModels.findByIdAndUpdate(producto._id, { $set: { stocks: producto.stocks - producto.cantidad } });



    }
    await mailer('rodev1990@gmail.com').catch(console.error);
    return res.json({ status: 'COMPRA GUARDADO' });
}

controlador.editarUno = async (req, res) => {
    //lo que le pedimos con el req nos lo devuelve en res 
    await comprasModels.findByIdAndUpdate(req.params.id, { $set: req.body });
    return res.json({ status: "COMPRA ACTUALIZADA" });
}

controlador.borrarUno = async (req, res) => {
    await comprasModels.findByIdAndRemove(req.params.id);
    return res.json({ status: "COMPRA BORRADA" });
}

module.exports = controlador;