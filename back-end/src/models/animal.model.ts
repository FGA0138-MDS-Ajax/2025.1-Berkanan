import { supabase } from '../utils/supabase.utils';
import type { Animal } from '../types/animal.type';

/**
 * Recupera todos os animais cadastrados na tabela "Animal" do Supabase.
 *
 * @returns {Promise<Animal[]>} Uma promessa que resolve para um array contendo todos os animais encontrados.
 * @throws {Error} Caso ocorra algum erro na consulta ao banco de dados.
 */
export const getAllAnimais = async (): Promise<Animal[]> => {
    const { data, error } = await supabase
        .from('Animal')
        .select('*');

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return data as Animal[];
};