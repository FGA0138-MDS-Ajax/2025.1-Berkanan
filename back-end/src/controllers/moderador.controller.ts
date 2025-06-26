import { getAllModeradores } from '../models/moderador.model';
import type { Moderador } from '../types/moderador.type';

/**
 * Recupera todos os moderadores cadastrados no banco de dados.
 *
 * @returns {Promise<Moderador[]>} Uma promessa que resolve para uma lista de moderadores.
 */
export const getModeradores = async (): Promise<Moderador[]> => {
    return await getAllModeradores();
};