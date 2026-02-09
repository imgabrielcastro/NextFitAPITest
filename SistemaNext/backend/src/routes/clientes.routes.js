import { Router } from "express";
import {
  listarClientes,
  buscarClientePorId,
} from "../controllers/clientes.controller.js";

const router = Router();

router.get("/clientes", listarClientes);
router.get("/clientes/:id", buscarClientePorId);

export default router;
