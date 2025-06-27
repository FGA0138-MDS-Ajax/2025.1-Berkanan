import { getAllAnimais, inserir_animal, alterar_animal } from '../models/animal.model';
import type { Animal } from '../types/animal.type';

/**
 * Recupera todos os animais cadastrados no banco de dados.
 *
 * @returns {Promise<Animal[]>} Uma promessa que resolve para uma lista de animais.
 */
export const getAnimais = async (): Promise<Animal[]> => {
    return await getAllAnimais();
};

/**
 * Insere um novo animal no banco de dados.
 *
 * @param {Animal} animal - Objeto contendo os dados do animal a ser inserido.
 * @returns {Promise<Animal>} Uma promessa que resolve para o animal recém-inserido.
 */
export const inserirAnimal = async (animal: Animal): Promise<Animal> => {
    return await inserir_animal(animal);
};

/**
 * Atualiza os dados de um animal existente no banco de dados.
 *
 * @param {Animal} animal - Objeto contendo os dados atualizados do animal (incluindo o ID).
 * @returns {Promise<Animal>} Uma promessa que resolve para o animal atualizado.
 */
export const alterarAnimal = async (animal: Animal): Promise<Animal> => {
    return await alterar_animal(animal);
};