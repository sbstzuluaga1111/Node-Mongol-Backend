import Categoria from "../models/Categorias.js";

const obtenerCategoria = async (req,res)=>{

    const categorias = await Categoria.find();

    res.json(categorias);   
   
}

const agregarCategoria = async (req, res)=>{
    const categoria = new Categoria(req.body);

    try {
        const nuevaCategoria = await categoria.save();
        res.json(nuevaCategoria);
    } catch (error) {
        console.log(error);
    }

}

const borrarCategoria = async (req, res)=>{
    try {
        await Categoria.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"categoria innexistente"})
    }
}
const actualizarCategoria = async (req, res)=>{
    try {
        const categoria = await Categoria.findOne({_id: req.params.id})
        if (req.body.imagen){
            categoria.imagen = req.body.imagen;}
        if (req.body.nombre){
            categoria.nombre = req.body.nombre;}
        if (req.body.descripcion){
            categoria.descripcion = req.body.descripcion;}

        await Categoria.save()
        res.send(categoria)
    } catch (error) {
        res.status(404)
        res.send({error:"categoria innexistente"})
    }
}


export {obtenerCategoria, agregarCategoria, borrarCategoria, actualizarCategoria};