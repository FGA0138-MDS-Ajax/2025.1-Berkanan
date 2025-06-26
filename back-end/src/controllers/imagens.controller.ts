import { getAllImagens } from '../models/imagens.model';
import type { Imagens } from '../types/imagens.type';

/**
 * Recupera todos as imagens cadastradas no banco de dados.
 *
 * @returns {Promise<Imagens[]>} Uma promessa que resolve para uma lista de imagens.
 */
export const getImagens = async (): Promise<Imagens[]> => {
    return await getAllImagens();
};