import { get_all_images, inserir_imagens, alterar_imagens, get_image_by_slug } from '../models/imagens.model';
import type { QueryParams } from '../types/general.type';
import type { Imagens, ParsedImages } from '../types/imagens.type';

/**
 * Recupera todos as imagens cadastradas no banco de dados.
 *
 * @returns {Promise<Imagens[]>} Uma promessa que resolve para uma lista de imagens.
 */
export const getImagens = async (): Promise<Imagens[]> => {
    return await get_all_images();
};

export const getImageBySlug = async (query: QueryParams): Promise<ParsedImages> => {
  return await get_image_by_slug(query.slug!);
}
/**
 * Insere uma nova imagem no banco de dados.
 *
 * @param {Imagens} imagens - Objeto contendo os dados da imagem a ser inserida.
 * @returns {Promise<Imagens>} Uma promessa que resolve para a imagem recém-inserida.
 */
export const inserirImagens = async (imagens: Imagens): Promise<Imagens> => {
    return await inserir_imagens(imagens);
};

/**
 * Atualiza os dados de uma imagem existente no banco de dados.
 *
 * @param {Imagens} imagens - Objeto contendo os dados atualizados da imagem (incluindo o ID).
 * @returns {Promise<Imagens>} Uma promessa que resolve para a imagem atualizada.
 */
export const alterarImagens = async (imagens: Imagens): Promise<Imagens> => {
    return await alterar_imagens(imagens);
};