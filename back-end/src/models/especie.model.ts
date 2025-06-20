import { supabase } from '../utils/supabase.utils';
import type { Especie } from '../types/especie.type';

/**
 * Recupera todas as espécies cadastradas na tabela "especie" do Supabase.
 *
 * @returns {Promise<Especie[]>} Uma promessa que resolve para um array contendo todas as espécies encontradas.
 * @throws {Error} Caso ocorra algum erro na consulta ao banco de dados.
 */
export const getAllEspecies = async (): Promise<Especie[]> => {
    const { data, error } = await supabase
        .from('especie')
        .select('*');

    if (error) {
        throw new Error(error.message);
    }

    return data as Especie[];
};

/**
 * Insere uma nova espécie na tabela "especie" do Supabase.
 *
 * @param {Especie} especie - Objeto contendo os dados da espécie a ser inserida.
 * @returns {Promise<Especie>} Uma promessa que resolve para a espécie recém-inserida.
 * @throws {Error} Caso ocorra algum erro durante a inserção.
 */
export const inserir_especie = async (especie: Especie): Promise<Especie> => {
    const { data, error } = await supabase
        .from('especie')
        .insert([especie])
        .select()
        .single();

    if (error) {
        console.error('Erro ao inserir espécie:', error.message);
        throw new Error(error.message);
    }

    return data as Especie;
};

/**
 * Atualiza os dados de uma espécie existente na tabela "especie" do Supabase.
 *
 * @param {Especie} especie - Objeto contendo os dados atualizados da espécie (incluindo o ID).
 * @returns {Promise<Especie>} Uma promessa que resolve para a espécie atualizada.
 * @throws {Error} Caso ocorra algum erro durante a atualização.
 */
export const alterar_especie = async (especie: Especie): Promise<Especie> => {
    const { data, error } = await supabase
        .from('especie')
        .update([especie])
        .eq('id', especie.id)
        .select()
        .single();

    if (error) {
        console.error('Erro ao alterar espécie:', error.message);
        throw new Error(error.message);
    }

    return data as Especie;
};
