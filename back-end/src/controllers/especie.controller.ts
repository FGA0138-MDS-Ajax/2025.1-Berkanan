import { getAllEspecies } from '../models/especie.model';

/**
 * Recupera todas as espécies cadastradas no banco de dados.
 *
 * @returns {Promise<Especie[]>} Uma promessa que resolve para uma lista de espécies.
 */
export const getEspecies = async () => {
    return await getAllEspecies();
};
