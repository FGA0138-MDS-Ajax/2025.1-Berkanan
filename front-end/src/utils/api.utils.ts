/**
 * Configuração base para requisições
 */
export const baseConfig = {
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    }
};

/**
 * Manipulador de erros para requisições HTTP
 * 
 * @param {Response} response - Resposta da requisição
 * @returns {Promise<any>} Dados da resposta ou erro
 * @throws {Error} Erro de requisição
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function handleHttpResponse(response: Response): Promise<any> {
    const data = await response.json();
    if (!response.ok) {
        // Tratamento específico para diferentes códigos de status
        switch (response.status) {
            case 400:
                throw new Error('Requisição inválida');
            case 401:
                throw new Error('Não autorizado');
            case 403:
                throw new Error('Acesso proibido');
            case 404:
                throw new Error('Recurso não encontrado');
            case 500:
                throw new Error('Erro interno do servidor');
            default:
                throw new Error(data.error || `Erro HTTP: ${response.status}`);
        }
    }

    return data;
}