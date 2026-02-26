import { Router } from "express";
import {
  listarClientes,
  buscarClientePorId,
  cadastrarCliente,
} from "../controllers/clientes.controller.js";

const router = Router();

router.get("/clientes", listarClientes);
router.get("/clientes/:id", buscarClientePorId);
router.post("/clientes", cadastrarCliente);

export default router;
