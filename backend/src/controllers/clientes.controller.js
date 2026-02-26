import { nextfitGet, nextfitPost } from "../services/nextfit/nextfit.service.js";

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

export async function cadastrarCliente(req, res) {
  try {
    const {
      Nome,
      Email,
      Cpf,
      Rg,
      Sexo,
      DataNascimento,
      DddFone,
      Fone,
      NotificarWhatsApp,
      Cep,
      Endereco,
      NumEndereco,
      Bairro,
      CodigoCidade,
      CodigoObjetivo,
      CodigoUsuarioConsultor,
    } = req.body;

    const data = await nextfitPost("/api/v2/Cliente/Inserir", {
      Nome,
      Email,
      Cpf,
      Rg,
      Sexo,
      DataNascimento,
      DddFone,
      Fone,
      NotificarWhatsApp: NotificarWhatsApp ?? true,
      Cep,
      Endereco,
      NumEndereco,
      Bairro,
      CodigoCidade,
      CodigoObjetivo,
      CodigoUsuarioConsultor,
    });

    res.status(201).json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    const status = err.response?.status || 500;
    const message = err.response?.data?.Message || "Erro ao cadastrar cliente";
    res.status(status).json({ message });
  }
}
