import { api } from "./api";

export async function getAlunos(page: number, limit: number) {
  const response = await api.get("/clientes", {
    params: {
      page,
      limit,
    },
  });
  return response.data;
}

export async function getAlunoById(id: number) {
  const response = await api.get(`/clientes/${id}`);
  return response.data;
}

export interface CadastroClienteData {
  Nome: string;
  Email: string;
  Cpf: string;
  Rg: string;
  Sexo: number;
  DataNascimento: string;
  DddFone: string;
  Fone: string;
  NotificarWhatsApp: boolean;
  Cep: string;
  Endereco: string;
  NumEndereco: string;
  Bairro: string | null;
  CodigoCidade: number;
  CodigoObjetivo: number;
  CodigoUsuarioConsultor: number;
}

export async function cadastrarCliente(data: CadastroClienteData) {
  const response = await api.post("/clientes", data);
  return response.data;
}
