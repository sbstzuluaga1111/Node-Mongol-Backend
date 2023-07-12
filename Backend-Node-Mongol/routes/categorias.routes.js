import express  from "express";

const router = express.Router();

import { obtenerCategoria , agregarCategoria, borrarCategoria, actualizarCategoria} from "../controllers/categoria.controllers.js";

router.get("/all",obtenerCategoria);
router.post("/add",agregarCategoria);
router.delete("/del/:id",borrarCategoria);
router.patch("/upd/:id",actualizarCategoria);

export default router;