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

/**
 * Insere uma nova integração na tabela "integracoes" do Supabase.
 *
 * @param {Integracoes} integracoes - Objeto contendo os dados da integração a ser inserida.
 * @returns {Promise<Integracoes>} Uma promessa que resolve para a integração recém-inserida.
 * @throws {Error} Caso ocorra algum erro durante a inserção.
 */
export const inserir_integracoes = async (integracoes: Integracoes): Promise<Integracoes> => {
    const { data, error } = await supabase
        .from('Integracoes')
        .insert([integracoes])
        .select()
        .single();

    if (error) {
        console.error('Erro ao inserir integracao:', error.message);
        throw new Error(error.message);
    }

    return data as Integracoes;
};

/**
 * Atualiza os dados de uma integração existente na tabela "especie" do Supabase.
 *
 * @param {Integracoes} integracoes - Objeto contendo os dados atualizados da integração (incluindo o ID).
 * @returns {Promise<Integracoes>} Uma promessa que resolve para a integração atualizada.
 * @throws {Error} Caso ocorra algum erro durante a atualização.
 */
export const alterar_integracoes = async (integracoes: Integracoes): Promise<Integracoes> => {
    const { data, error } = await supabase
        .from('Integracoes')
        .update([integracoes])
        .eq('uid', integracoes.uid)
        .select()
        .single();

    if (error) {
        console.error('Erro ao alterar integracao:', error.message);
        throw new Error(error.message);
    }

    return data as Integracoes;
};