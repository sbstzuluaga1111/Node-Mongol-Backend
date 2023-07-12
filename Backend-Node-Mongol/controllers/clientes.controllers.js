import Clientes from "../models/Clientes.js";

const obtenerClientes = async (req,res)=>{

    const clientes = await Clientes.find();

    res.json(clientes);   
   
}

const agregarClientes = async (req, res)=>{
    const clientes = new Clientes(req.body);

    try {
        const nuevoCliente = await clientes.save();
        res.json(nuevoCliente);
    } catch (error) {
        console.log(error);
    }

}

const borrarClientes = async (req, res)=>{
    try {
        await Clientes.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Cliente innexistente"})
    }
}
const actualizarClientes = async (req, res)=>{
    try {
        const clientes = await Clientes.findOne({_id: req.params.id})
        if (req.body.imagen){
            Clientes.imagen = req.body.imagen;}
        if (req.body.nombre){
            Clientes.nombre = req.body.nombre;}
        if (req.body.descripcion){
            Clientes.descripcion = req.body.descripcion;}

        await Clientes.save()
        res.send(clientes)
    } catch (error) {
        res.status(404)
        res.send({error:"Cliente innexistente"})
    }
}


export {obtenerClientes, agregarClientes, borrarClientes, actualizarClientes};