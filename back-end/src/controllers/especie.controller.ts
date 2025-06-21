import { getAllEspecies, inserir_especie, alterar_especie } from '../models/especie.model';
import type { Especie } from '../types/especie.type';

/**
 * Recupera todas as espécies cadastradas no banco de dados.
 *
 * @returns {Promise<Especie[]>} Uma promessa que resolve para uma lista de espécies.
 */
export const getEspecies = async (): Promise<Especie[]> => {
    return await getAllEspecies();
};

/**
 * Insere uma nova espécie no banco de dados.
 *
 * @param {Especie} especie - Objeto contendo os dados da espécie a ser inserida.
 * @returns {Promise<Especie>} Uma promessa que resolve para a espécie recém-inserida.
 */
export const inserirEspecie = async (especie: Especie): Promise<Especie> => {
    return await inserir_especie(especie);
};

/**
 * Atualiza os dados de uma espécie existente no banco de dados.
 *
 * @param {Especie} especie - Objeto contendo os dados atualizados da espécie (incluindo o ID).
 * @returns {Promise<Especie>} Uma promessa que resolve para a espécie atualizada.
 */
export const alterarEspecie = async (especie: Especie): Promise<Especie> => {
    return await alterar_especie(especie);
};
