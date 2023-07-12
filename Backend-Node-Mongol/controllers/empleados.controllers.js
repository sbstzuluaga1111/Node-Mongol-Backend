import Empleado from "../models/Empleados.js";

const obtenerEmpleado = async (req,res)=>{

    const empleado = await Empleado.find();

    res.json(empleado);   
   
}

const agregarEmpleado = async (req, res)=>{
    const empleado = new Empleado(req.body);

    try {
        const nuevoEmpleado = await Empleado.save();
        res.json(nuevoEmpleado);
    } catch (error) {
        console.log(error);
    }

}

const borrarEmpleado = async (req, res)=>{
    try {
        await Empleado.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Empleado innexistente"})
    }
}
const actualizarEmpleado = async (req, res)=>{
    try {
        const empleado = await Empleado.findOne({_id: req.params.id})
        if (req.body.imagen){
            Empleado.imagen = req.body.imagen;}
        if (req.body.nombre){
            Empleado.nombre = req.body.nombre;}
        if (req.body.descripcion){
            Empleado.descripcion = req.body.descripcion;}

        await Empleado.save()
        res.send(empleado)
    } catch (error) {
        res.status(404)
        res.send({error:"Empleado innexistente"})
    }
}


export {obtenerEmpleado, agregarEmpleado, borrarEmpleado, actualizarEmpleado};