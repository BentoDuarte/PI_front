import api from "./api.js";
import Alert from "../utils/alert.js";

export async function listarOrdemServico() {
  try {
    const response = await api.get("/ordem-servico");
    return response;
  } catch (error) {
    Alert("Erro", "Erro ao buscar ordens de serviço");
    console.error(error);
  }
}

export async function cadastrarOrdemServico(data) {
  try {
    const response = await api.post("/ordem-servico", data);
    Alert("Sucesso", "Ordem de serviço cadastrada com sucesso");
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.erro || "Erro ao cadastrar ordem de serviço.";
    Alert("Erro", "Erro ao cadastrar ordem de serviço");
    console.error(errorMessage);
  }
}

export async function atualizarOrdemServico(id, data) {
  try {
    const response = await api.put(`/ordem-servico/${id}`, data);
    Alert("Sucesso", "Ordem de serviço atualizada com sucesso");
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.erro || "Erro ao atualizar ordem de serviço.";
    Alert("Erro", "Erro ao atualizar ordem de serviço");
    console.error(errorMessage);
  }
}

export async function excluirOrdemServico(id) {
  try {
    await api.delete(`/ordem-servico/${id}`);
    Alert("Sucesso", "Ordem de serviço excluída com sucesso");
  } catch (error) {
    const errorMessage = error.response?.data?.erro || "Erro ao excluir ordem de serviço.";
    Alert("Erro", "Erro ao excluir ordem de serviço");
    console.error(errorMessage);
  }
}