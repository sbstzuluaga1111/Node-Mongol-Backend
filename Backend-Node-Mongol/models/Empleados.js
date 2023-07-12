import mongoose from "mongoose";

const empleadoSchema = mongoose.Schema ({
    imagen:{
        type: String,
        required: true,
        trim: true,
    },
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    descripcion:{
        type: String,
        required: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
);

const Empleado = mongoose.model("comida", empleadoSchema);

export default Empleado;