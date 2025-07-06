import { get_all_animals, inserir_animal, alterar_animal } from '../models/animal.model';
import type { Animal, ParsedAnimal } from '../types/animal.type';
import type { PaginatedResponse, QueryParams } from '../types/general.type';
import type { ParsedImages } from '../types/imagens.type';
import { getImageByID } from './imagens.controller';

/**
 * Recupera todos os animais cadastrados no banco de dados com paginação,
 * incluindo os dados de imagem associados.
 *
 * @param {QueryParams} query - Parâmetros de consulta como página e limite.
 * @returns {Promise<PaginatedResponse<ParsedAnimal>>} Uma promessa com dados paginados e imagens resolvidas.
 */
export const getAnimals = async (
  query: QueryParams
): Promise<PaginatedResponse<ParsedAnimal>> => {
  const page = parseInt(query.page || '1', 10);
  const limit = parseInt(query.limit || '10', 10);

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { count, data } = await get_all_animals(from, to);

  const parsedData: ParsedAnimal[] = await Promise.all(
    data!.map(async (item) => {
      const imageData = await getImageByID({ id: item.image! }) as ParsedImages;
      return {
        ...item,
        images: {
          id: imageData.id,
          slug: imageData.slug,
          codigo: imageData.codigo,
          pasta: imageData.pasta,
          alt: imageData.alt,
          url: imageData.url
        }
      };
    })
  );

  const totalPages = Math.ceil((count ?? 0) / limit);

  return {
    data: parsedData,
    totalItems: count ?? 0,
    totalPages,
    currentPage: page,
  };
};

/**
 * Insere um novo animal no banco de dados.
 *
 * @param {Animal} animal - Objeto contendo os dados do animal a ser inserido.
 * @returns {Promise<Animal>} Uma promessa que resolve para o animal recém-inserido.
 */
export const inserirAnimal = async (animal: Animal): Promise<Animal> => {
  return await inserir_animal(animal);
};

/**
 * Atualiza os dados de um animal existente no banco de dados.
 *
 * @param {Animal} animal - Objeto contendo os dados atualizados do animal (incluindo o ID).
 * @returns {Promise<Animal>} Uma promessa que resolve para o animal atualizado.
 */
export const alterarAnimal = async (animal: Animal): Promise<Animal> => {
  return await alterar_animal(animal);
};