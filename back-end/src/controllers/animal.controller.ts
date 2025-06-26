import { getAllAnimais } from '../models/animal.model';
import type { Animal } from '../types/animal.type';

/**
 * Recupera todos os animais cadastrados no banco de dados.
 *
 * @returns {Promise<Animal[]>} Uma promessa que resolve para uma lista de animais.
 */
export const getAnimais = async (): Promise<Animal[]> => {
    return await getAllAnimais();
};