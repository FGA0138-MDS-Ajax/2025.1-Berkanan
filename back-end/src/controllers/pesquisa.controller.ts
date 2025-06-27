import { getAllPesquisas, inserir_pesquisa, alterar_pesquisa } from '../models/pesquisa.model';
import type { Pesquisa } from '../types/pesquisa.type';

/**
 * Recupera todas as pesquisas cadastradas no banco de dados.
 *
 * @returns {Promise<Pesquisa[]>} Uma promessa que resolve para uma lista de pesquisas.
 */
export const getPesquisas = async (): Promise<Pesquisa[]> => {
    return await getAllPesquisas();
};

/**
 * Insere uma nova pesquisa no banco de dados.
 *
 * @param {Pesquisa} pesquisa - Objeto contendo os dados da pesquisa a ser inserida.
 * @returns {Promise<Pesquisa>} Uma promessa que resolve para a pesquisa recém-inserida.
 */
export const inserirPesquisa = async (pesquisa: Pesquisa): Promise<Pesquisa> => {
    return await inserir_pesquisa(pesquisa);
};

/**
 * Atualiza os dados de uma pesquisa existente no banco de dados.
 *
 * @param {Pesquisa} pesquisa - Objeto contendo os dados atualizados da pesquisa (incluindo o ID).
 * @returns {Promise<Pesquisa>} Uma promessa que resolve para a pesquisa atualizada.
 */
export const alterarPesquisa = async (pesquisa: Pesquisa): Promise<Pesquisa> => {
    return await alterar_pesquisa(pesquisa);
};