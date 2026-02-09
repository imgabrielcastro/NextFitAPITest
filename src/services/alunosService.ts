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
