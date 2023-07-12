import Productos from "../models/Productos.js";

const obtenerProducto = async (req,res)=>{

    const productos = await Productos.find();

    res.json(productos);   
   
}

const agregarProducto = async (req, res)=>{
    const productos = new Productos(req.body);

    try {
        const nuevoProducto = await productos.save();
        res.json(nuevoProducto);
    } catch (error) {
        console.log(error);
    }

}

const borrarProducto = async (req, res)=>{
    try {
        await Productos.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Producto innexistente"})
    }
}
const actualizarProducto = async (req, res)=>{
    try {
        const productos = await Productos.findOne({_id: req.params.id})
        if (req.body.imagen){
            Productos.imagen = req.body.imagen;}
        if (req.body.nombre){
            Productos.nombre = req.body.nombre;}
        if (req.body.descripcion){
            Productos.descripcion = req.body.descripcion;}

        await Productos.save()
        res.send(productos)
    } catch (error) {
        res.status(404)
        res.send({error:"Producto innexistente"})
    }
}


export {obtenerProducto, agregarProducto, borrarProducto, actualizarProducto};