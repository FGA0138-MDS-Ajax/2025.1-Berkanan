import { getAllIntegracoes, inserir_integracoes, alterar_integracoes } from '../models/integracoes.model';
import type { Integracoes } from '../types/integracoes.type';

/**
 * Recupera todos as integrações cadastradas no banco de dados.
 *
 * @returns {Promise<Integracoes[]>} Uma promessa que resolve para uma lista de integrações.
 */
export const getIntegracoes = async (): Promise<Integracoes[]> => {
    return await getAllIntegracoes();
};

/**
 * Insere uma nova integração no banco de dados.
 *
 * @param {Integracoes} integracoes - Objeto contendo os dados da integração a ser inserida.
 * @returns {Promise<Integracoes>} Uma promessa que resolve para a integração recém-inserida.
 */
export const inserirIntegracoes = async (integracoes: Integracoes): Promise<Integracoes> => {
    return await inserir_integracoes(integracoes);
};

/**
 * Atualiza os dados de uma integração existente no banco de dados.
 *
 * @param {Integracoes} integracoes - Objeto contendo os dados atualizados da integração (incluindo o ID).
 * @returns {Promise<Integracoes>} Uma promessa que resolve para a integração atualizada.
 */
export const alterarIntegracoes = async (integracoes: Integracoes): Promise<Integracoes> => {
    return await alterar_integracoes(integracoes);
};