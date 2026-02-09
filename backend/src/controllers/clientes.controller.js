import { nextfitGet } from "../services/nextfit/nextfit.service.js";

export async function listarClientes(req, res) {
  try {
    const data = await nextfitGet(
      "/api/Cliente/RecuperarPesquisaGeral",
      {
        limit: 21,
        page: 1,
        fields: JSON.stringify([
          "Id",
          "Nome",
          "Sexo",
          "DataNascimento",
          "ClienteParametro.Status",
          "ClienteParametro.Vip",
          "ClienteParametro.UrlImagem",
        ]),
        includes: JSON.stringify(["ClienteParametro"]),
        sort: JSON.stringify([{ property: "Nome", direction: "ASC" }]),
        filter: JSON.stringify([]),
      }
    );

    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Erro ao listar clientes" });
  }
}

export async function buscarClientePorId(req, res) {
  const { id } = req.params;

  try {
    const data = await nextfitGet(
      "/api/v2/Cliente/Listar",
      {
        filter: JSON.stringify([
          { property: "Id", operator: "equal", value: id }
        ]),
        includes: JSON.stringify([
          "UsuarioConsultor",
          "Cliente.ClienteParametro",
        ]),
      }
    );

    if (!data.Content?.length) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    res.json(data.Content[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Erro ao buscar cliente" });
  }
}
