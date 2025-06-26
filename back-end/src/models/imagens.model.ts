import { supabase } from '../utils/supabase.utils';
import type { Imagens } from '../types/imagens.type';

/**
 * Recupera todos as imagens cadastradas na tabela "Imagens" do Supabase.
 *
 * @returns {Promise<Imagens[]>} Uma promessa que resolve para um array contendo todas as imagens encontradas.
 * @throws {Error} Caso ocorra algum erro na consulta ao banco de dados.
 */
export const getAllImagens = async (): Promise<Imagens[]> => {
    const { data, error } = await supabase
        .from('Imagens')
        .select('*');

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return data as Imagens[];
};