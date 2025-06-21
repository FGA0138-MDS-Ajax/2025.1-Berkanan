import { supabase } from '../utils/supabase.utils';

/**
 * Recupera todas as espécies cadastradas na tabela "especie" do Supabase.
 *
 * @returns {Promise<Especie[]>} Uma promessa que resolve para um array contendo todas as espécies encontradas.
 * @throws {Error} Caso ocorra algum erro na consulta ao banco de dados.
 */
export const getAllEspecies = async () => {
    const { data, error } = await supabase
        .from('especie')
        .select('*');

    if (error) {
        throw new Error(error.message);
    }

    return data;
};
