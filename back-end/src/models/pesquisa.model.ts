import { supabase } from '../utils/supabase.utils';
import type { Pesquisa } from '../types/pesquisa.type';

/**
 * Recupera todas as pesquisas cadastradas na tabela "Pesquisa" do Supabase.
 *
 * @returns {Promise<Pesquisa[]>} Uma promessa que resolve para um array contendo todas as pesquisas encontradas.
 * @throws {Error} Caso ocorra algum erro na consulta ao banco de dados.
 */
export const getAllPesquisas = async (): Promise<Pesquisa[]> => {
    const { data, error } = await supabase
        .from('Pesquisa')
        .select('*');

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return data as Pesquisa[];
};