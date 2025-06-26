import { supabase } from '../utils/supabase.utils';
import type { Integracoes } from '../types/integracoes.type';

/**
 * Recupera todos as integrações cadastradas na tabela "Integracoes" do Supabase.
 *
 * @returns {Promise<Integracoes[]>} Uma promessa que resolve para um array contendo todas as integrações encontradas.
 * @throws {Error} Caso ocorra algum erro na consulta ao banco de dados.
 */
export const getAllIntegracoes = async (): Promise<Integracoes[]> => {
    const { data, error } = await supabase
        .from('Integracoes')
        .select('*');

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return data as Integracoes[];
};