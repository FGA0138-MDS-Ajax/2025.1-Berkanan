import { supabase } from '../utils/supabase.utils';
import type { Moderador } from '../types/moderador.type';

/**
 * Recupera todos os moderadores cadastrados na tabela "Moderador" do Supabase.
 *
 * @returns {Promise<Moderador[]>} Uma promessa que resolve para um array contendo todos os moderadores encontrados.
 * @throws {Error} Caso ocorra algum erro na consulta ao banco de dados.
 */
export const getAllModeradores = async (): Promise<Moderador[]> => {
    const { data, error } = await supabase
        .from('Moderador')
        .select('*');

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return data as Moderador[];
};