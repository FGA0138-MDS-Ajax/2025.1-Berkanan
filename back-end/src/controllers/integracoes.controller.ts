import { getAllIntegracoes } from '../models/integracoes.model';
import type { Integracoes } from '../types/integracoes.type';

/**
 * Recupera todos as integrações cadastradas no banco de dados.
 *
 * @returns {Promise<Integracoes[]>} Uma promessa que resolve para uma lista de integrações.
 */
export const getIntegracoes = async (): Promise<Integracoes[]> => {
    return await getAllIntegracoes();
};