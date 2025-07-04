import { getAllModeradores, inserir_moderador, alterar_moderador } from '../models/moderador.model';
import type { Moderador } from '../types/moderador.type';

/**
 * Recupera todos os moderadores cadastrados no banco de dados.
 *
 * @returns {Promise<Moderador[]>} Uma promessa que resolve para uma lista de moderadores.
 */
export const getModeradores = async (): Promise<Moderador[]> => {
    return await getAllModeradores();
};

/**
 * Insere um novo moderador no banco de dados.
 *
 * @param {Moderador} moderador - Objeto contendo os dados do moderador a ser inserido.
 * @returns {Promise<Moderador>} Uma promessa que resolve para o moderador recém-inserido.
 */
export const inserirModerador = async (moderador: Moderador): Promise<Moderador> => {
    return await inserir_moderador(moderador);
};

/**
 * Atualiza os dados de um moderador existente no banco de dados.
 *
 * @param {Moderador} moderador - Objeto contendo os dados atualizados do moderador (incluindo o ID).
 * @returns {Promise<Moderador>} Uma promessa que resolve para o moderador atualizado.
 */
export const alterarModerador = async (moderador: Moderador): Promise<Moderador> => {
    return await alterar_moderador(moderador);
};