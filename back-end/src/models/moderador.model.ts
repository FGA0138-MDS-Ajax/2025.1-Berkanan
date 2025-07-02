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

/**
 * Insere um novo moderador na tabela "moderador" do Supabase.
 *
 * @param {Moderador} moderador - Objeto contendo os dados do moderador a ser inserido.
 * @returns {Promise<Moderador>} Uma promessa que resolve para o moderador recém-inserido.
 * @throws {Error} Caso ocorra algum erro durante a inserção.
 */
export const inserir_moderador = async (moderador: Moderador): Promise<Moderador> => {
    const { data, error } = await supabase
        .from('Moderador')
        .insert([moderador])
        .select()
        .single();

    if (error) {
        console.error('Erro ao inserir moderador:', error.message);
        throw new Error(error.message);
    }

    return data as Moderador;
};

/**
 * Atualiza os dados de um moderador existente na tabela "moderador" do Supabase.
 *
 * @param {Moderador} moderador - Objeto contendo os dados atualizados do moderador (incluindo o ID).
 * @returns {Promise<Moderador>} Uma promessa que resolve para o moderador atualizado.
 * @throws {Error} Caso ocorra algum erro durante a atualização.
 */
export const alterar_moderador = async (moderador: Moderador): Promise<Moderador> => {
    const { data, error } = await supabase
        .from('Moderador')
        .update([moderador])
        .eq('uid', moderador.uid)
        .select()
        .single();

    if (error) {
        console.error('Erro ao alterar espécie:', error.message);
        throw new Error(error.message);
    }

    return data as Moderador;
};