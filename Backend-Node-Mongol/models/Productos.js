import mongoose from "mongoose";

const productosSchema = mongoose.Schema ({
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

const Productos = mongoose.model("comida", productosSchema);

export default Productos;