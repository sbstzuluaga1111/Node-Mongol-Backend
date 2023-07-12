import express  from "express";

const router = express.Router();

import { obtenerEmpleado , agregarEmpleado, borrarEmpleado, actualizarEmpleado} from "../controllers/empleados.controllers.js";

router.get("/all",obtenerEmpleado);
router.post("/add",agregarEmpleado);
router.delete("/del/:id",borrarEmpleado);
router.patch("/upd/:id",actualizarEmpleado);

export default router;