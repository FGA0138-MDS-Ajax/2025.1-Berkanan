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

/**
 * Insere uma nova imagem na tabela "imagens" do Supabase.
 *
 * @param {Imagens} imagens - Objeto contendo os dados da imagem a ser inserida.
 * @returns {Promise<Imagens>} Uma promessa que resolve para a imagem recém-inserida.
 * @throws {Error} Caso ocorra algum erro durante a inserção.
 */
export const inserir_imagens = async (imagens: Imagens): Promise<Imagens> => {
    const { data, error } = await supabase
        .from('Imagens')
        .insert([imagens])
        .select()
        .single();

    if (error) {
        console.error('Erro ao inserir imagem:', error.message);
        throw new Error(error.message);
    }

    return data as Imagens;
};

/**
 * Atualiza os dados de uma imagem existente na tabela "especie" do Supabase.
 *
 * @param {Imagens} imagens - Objeto contendo os dados atualizados da imagem (incluindo o ID).
 * @returns {Promise<Imagens>} Uma promessa que resolve para a imagem atualizada.
 * @throws {Error} Caso ocorra algum erro durante a atualização.
 */
export const alterar_imagens = async (imagens: Imagens): Promise<Imagens> => {
    const { data, error } = await supabase
        .from('Imagens')
        .update([imagens])
        .eq('slug', imagens.cient)
        .select()
        .single();

    if (error) {
        console.error('Erro ao alterar imagem:', error.message);
        throw new Error(error.message);
    }

    return data as Imagens;
};