import express from "express";
import cors from "cors";
import clientesRoutes from "./routes/clientes.routes.js";
import { env } from "./config/env.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => res.json({ ok: true }));

app.use("/api", clientesRoutes);

app.listen(env.port, () => {
  console.log(`BFF rodando na porta ${env.port}`);
});
