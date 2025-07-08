import { get_all_especies, post_especie, put_especie, get_especies_sugestao } from '../models/especie.model';
import type { Especie } from '../types/especie.type';
import type { PaginatedResponse, QueryParams } from '../types/general.type';

/**
 * Recupera todas as espécies cadastradas no banco de dados.
 *
 * @param {query} query - Query da requisição para paginação.
 * @returns {Promise<PaginatedResponse<Especie>>} Uma promessa que resolve para uma lista de espécies.
 */
export const getEspecies = async (query: QueryParams): Promise<PaginatedResponse<Especie>> => {
  const page = parseInt(query.page || '1');
  const limit = parseInt(query.limit || '10');

  const from = (page - 1) * limit;
  const to = from + limit - 1;
  const {count, data} = await get_all_especies(from, to);

  const totalPages = Math.ceil((count ?? 0) / limit);

  return {
    data: data || [],
    totalItems: count ?? 0,
    totalPages,
    currentPage: page,
  };
};

/**
 * Insere uma nova espécie no banco de dados.
 *
 * @param {Especie} especie - Objeto contendo os dados da espécie a ser inserida.
 * @returns {Promise<Especie>} Uma promessa que resolve para a espécie recém-inserida.
 */
export const inserirEspecie = async (especie: Especie): Promise<Especie> => {
  const {data, error} = await post_especie(especie);

  if (error) {
    throw new Error(`Erro ao inserir espécie: ${error.message}`);
  }

  return data!;
};

/**
 * Atualiza os dados de uma espécie existente no banco de dados.
 *
 * @param {Especie} especie - Objeto contendo os dados atualizados da espécie (incluindo o ID).
 * @returns {Promise<Especie>} Uma promessa que resolve para a espécie atualizada.
 */
export const alterarEspecie = async (especie: Especie): Promise<Especie> => {
    const {data, error} = await put_especie(especie);

  if (error) {
    throw new Error(`Erro ao alterar espécie: ${error.message}`);
  }

  return data!;
};

/** 
 * Retorna uma lista de espécies para sugerir.
 * 
 * @returns {Promise<Especie[]>} Lista de espécies sugeridas.
 */
export const getEspeciesSugestao = async (): Promise<Especie[]> => {
  const {data, error} = await get_especies_sugestao();

  if (error) {
    throw new Error(`Erro ao obter espécies sugeridas: ${error.message}`);
  }

  return data || [];
};
