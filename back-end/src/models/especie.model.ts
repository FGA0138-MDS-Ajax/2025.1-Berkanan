import { supabase } from '../utils/supabase.utils';
import type { Especie } from '../types/especie.type';
import type { ResponseProps } from '../types/general.type';

/**
 * Recupera todas as espécies cadastradas na tabela "Especie" do Supabase.
 *
 * @returns {Promise<Especie[]>} Uma promessa que resolve para um array contendo todas as espécies encontradas.
 * @throws {Error} Caso ocorra algum erro na consulta ao banco de dados.
 */

export const get_all_especies = async (from: number, to: number): Promise<ResponseProps<Especie[]>> => {
    const { count, error: countError } = await supabase
    .from('Especie')
    .select('*', { count: 'exact' });
  
    const { data, error } = await supabase
    .from('Especie')
    .select('*')
    .range(from, to);

  const result: ResponseProps<Especie[]> = { data, error, count };
  return result;
};

export const get_especie_by_slug = async (slug: string): Promise<Especie> => {
  const { data, error } = await supabase
    .from('Especie')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Erro ao buscar especie:', error.message);
    throw new Error(`Erro ao buscar especie: ${error.message}`);
  }
  return data;
};
/**
 * Insere uma nova espécie na tabela "especie" do Supabase.
 *
 * @param {Especie} especie - Objeto contendo os dados da espécie a ser inserida.
 * @returns {Promise<Especie>} Uma promessa que resolve para a espécie recém-inserida.
 * @throws {Error} Caso ocorra algum erro durante a inserção.
 */
export const post_especie = async (especie: Especie): Promise<ResponseProps<Especie>> => {
  const { data, error, count } = await supabase
    .from('Especie')
    .insert([especie])
    .select()
    .single();

  const result: ResponseProps<Especie> = { data, error, count };
  return result;
};

/**
 * Atualiza os dados de uma espécie existente na tabela "especie" do Supabase.
 *
 * @param {Especie} especie - Objeto contendo os dados atualizados da espécie (incluindo o ID).
 * @returns {Promise<Especie>} Uma promessa que resolve para a espécie atualizada.
 * @throws {Error} Caso ocorra algum erro durante a atualização.
 */
export const put_especie = async (especie: Especie): Promise<ResponseProps<Especie>> => {
  const { data, error, count } = await supabase
    .from('Especie')
    .update([especie])
    .eq('slug', especie.slug)
    .select()
    .single();

  const result: ResponseProps<Especie> = { data, error, count };
  return result;

};
