import api from "../api";

export async function buscarUsuario(nome) {
    try {
        const resultado = await api.get(`/users?login=${nome}`);
        return resultado.data[0];
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        throw error; // Propaga o erro para que o chamador possa lidar com ele
    }
}