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