import mongoose from "mongoose";

const clientesSchema = mongoose.Schema ({
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

const Clientes = mongoose.model("comida", clientesSchema);

export default Clientes;