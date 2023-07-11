import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js"

const app = express();

app.use(express.json());

dotenv.config();

app. use("/comida", categoriasRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, () => {
    console.log(`Server web listenning on port ${PORT}`);
});