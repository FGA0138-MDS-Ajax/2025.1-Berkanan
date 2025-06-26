import { get_all_animals } from '../models/animal.model';
import type { Animal } from '../types/animal.type';
import type { PaginatedResponse, QueryParams } from '../types/general.type';

/**
 * Recupera todos os animais cadastrados no banco de dados.
 *
 * @returns {Promise<Animal[]>} Uma promessa que resolve para uma lista de animais.
 */
export const getAnimals = async (query: QueryParams): Promise<PaginatedResponse<Animal>> => {
  const page = parseInt(query.page || '1');
  const limit = parseInt(query.limit || '10');

  const from = (page - 1) * limit;
  const to = from + limit - 1;
  const {count, data} = await get_all_animals(from, to);

  const totalPages = Math.ceil((count ?? 0) / limit);

  return {
    data: data || [],
    totalItems: count ?? 0,
    totalPages,
    currentPage: page,
  };
};