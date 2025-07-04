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

/**
 * Insere uma nova pesquisa na tabela "pesquisa" do Supabase.
 *
 * @param {Pesquisa} pesquisa - Objeto contendo os dados da pesquisa a ser inserida.
 * @returns {Promise<Pesquisa>} Uma promessa que resolve para a pesquisa recém-inserida.
 * @throws {Error} Caso ocorra algum erro durante a inserção.
 */
export const inserir_pesquisa = async (pesquisa: Pesquisa): Promise<Pesquisa> => {
    const { data, error } = await supabase
        .from('Pesquisa')
        .insert([pesquisa])
        .select()
        .single();

    if (error) {
        console.error('Erro ao inserir pesquisa:', error.message);
        throw new Error(error.message);
    }

    return data as Pesquisa;
};

/**
 * Atualiza os dados de uma pesquisa existente na tabela "pesquisa" do Supabase.
 *
 * @param {Pesquisa} pesquisa - Objeto contendo os dados atualizados da pesquisa (incluindo o ID).
 * @returns {Promise<Pesquisa>} Uma promessa que resolve para a pesquisa atualizada.
 * @throws {Error} Caso ocorra algum erro durante a atualização.
 */
export const alterar_pesquisa = async (pesquisa: Pesquisa): Promise<Pesquisa> => {
    const { data, error } = await supabase
        .from('Pesquisa')
        .update([pesquisa])
        .eq('id_pesq', pesquisa.id_pesq)
        .select()
        .single();

    if (error) {
        console.error('Erro ao alterar pesquisa:', error.message);
        throw new Error(error.message);
    }

    return data as Pesquisa;
};