import express  from "express";

const router = express.Router();

import { obtenerCategoria , agregarCategoria, borrarCategoria} from "../controllers/categoria.controllers.js";

router.get("/all",obtenerCategoria);
router.post("/add",agregarCategoria);
router.delete("/del/:id",borrarCategoria);

export default router;