import express  from "express";

const router = express.Router();

import { obtenerProducto , agregarProducto, borrarProducto, actualizarProducto} from "../controllers/productos.controllers.js";

router.get("/all",obtenerProducto);
router.post("/add",agregarProducto);
router.delete("/del/:id",borrarProducto);
router.patch("/upd/:id",actualizarProducto);

export default router;