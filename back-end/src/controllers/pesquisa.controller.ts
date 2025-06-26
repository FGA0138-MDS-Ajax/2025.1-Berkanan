import { getAllPesquisas } from '../models/pesquisa.model';
import type { Pesquisa } from '../types/pesquisa.type';

/**
 * Recupera todas as pesquisas cadastradas no banco de dados.
 *
 * @returns {Promise<Pesquisa[]>} Uma promessa que resolve para uma lista de pesquisas.
 */
export const getPesquisas = async (): Promise<Pesquisa[]> => {
    return await getAllPesquisas();
};