import { supabase } from '../utils/supabase.utils';
import type { Animal } from '../types/animal.type';
import type { ResponseProps } from '../types/general.type';

/**
 * Recupera todos os animais cadastrados na tabela "Animal" do Supabase.
 *
 * @returns {Promise<Animal[]>} Uma promessa que resolve para um array contendo todos os animais encontrados.
 * @throws {Error} Caso ocorra algum erro na consulta ao banco de dados.
 */
export const get_all_animals = async (from: number, to: number): Promise<ResponseProps<Animal[]>> => {
  const { count, error: countError } = await supabase
    .from('Animal')
    .select('*', { count: 'exact' });

  const { data, error } = await supabase
    .from('Animal')
    .select('*')
    .range(from, to);

  console.log('get_all_animals', { data, error, count });
  const result: ResponseProps<Animal[]> = { data, error, count };
  return result;
};

/**
 * Insere um novo animal na tabela "animal" do Supabase.
 *
 * @param {Animal} animal - Objeto contendo os dados do animal a ser inserido.
 * @returns {Promise<Animal>} Uma promessa que resolve para o animal recém-inserido.
 * @throws {Error} Caso ocorra algum erro durante a inserção.
 */
export const inserir_animal = async (animal: Animal): Promise<Animal> => {
    const { data, error } = await supabase
        .from('Animal')
        .insert([animal])
        .select()
        .single();

    if (error) {
        console.error('Erro ao inserir animal:', error.message);
        throw new Error(error.message);
    }

    return data as Animal;
};

/**
 * Atualiza os dados de um animal existente na tabela "animal" do Supabase.
 *
 * @param {Animal} animal - Objeto contendo os dados atualizados do animal (incluindo o ID).
 * @returns {Promise<Animal>} Uma promessa que resolve para o animal atualizado.
 * @throws {Error} Caso ocorra algum erro durante a atualização.
 */
export const alterar_animal = async (animal: Animal): Promise<Animal> => {
    const { data, error } = await supabase
        .from('Animal')
        .update([animal])
        .eq('id', animal.cient)
        .select()
        .single();

    if (error) {
        console.error('Erro ao alterar espécie:', error.message);
        throw new Error(error.message);
    }

    return data as Animal;
};