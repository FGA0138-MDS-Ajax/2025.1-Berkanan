import { supabase } from '../utils/supabase.utils';
import type { Imagens, ParsedImages } from '../types/imagens.type';

/**
 * Recupera todas as imagens cadastradas na tabela "Imagens" do Supabase,
 * e adiciona a URL pública e o texto alternativo (alt) para cada imagem.
 *
 * @returns {Promise<ParsedImages[]>} Uma promessa que resolve para um array contendo todas as imagens com dados completos.
 * @throws {Error} Caso ocorra algum erro na consulta ao banco de dados.
 */
export const get_all_images = async (): Promise<ParsedImages[]> => {
  const { data, error } = await supabase
    .from('Imagens')
    .select('*');

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  const parsedData: ParsedImages[] = data.map((item) => {
    const { data } = supabase.storage
      .from('imagens-animais')
      .getPublicUrl(`${item.pasta}/${item.codigo}`,{
      transform: {
        width: 300,
        height: 200,
      }
    })

    return {
      id: item.id,
      url: data.publicUrl,
      alt: item.slug,
      pasta: item.pasta,
      codigo: item.codigo,
    };
  });

  return parsedData;
};

/**
 * Recupera uma única imagem da tabela "Imagens" com base no ID,
 * incluindo a URL pública e o texto alternativo.
 *
 * @param {string} id - O ID da imagem a ser buscada.
 * @returns {Promise<ParsedImages>} Uma promessa que resolve para a imagem encontrada com dados completos.
 * @throws {Error} Caso ocorra algum erro durante a consulta.
 */
export const get_image_by_slug = async (slug: string): Promise<ParsedImages> => {
  const { data, error } = await supabase
    .from('Imagens')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Erro ao buscar imagem:', error.message);
    throw new Error(`Erro ao buscar imagem: ${error.message}`);
  }

  const { data: urlData } = supabase.storage
    .from('imagens-animais')
    .getPublicUrl(`${data.pasta}/${data.codigo}`);

  const returnData: ParsedImages = {
    slug: data.slug,
    url: urlData.publicUrl,
    alt: data.slug,
    pasta: data.pasta,
    codigo: data.codigo,
  };

  return returnData;
};

/**
 * Insere uma nova imagem na tabela "Imagens" do Supabase.
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
 * Atualiza os dados de uma imagem existente na tabela "Imagens" do Supabase.
 *
 * @param {Imagens} imagens - Objeto contendo os dados atualizados da imagem (incluindo o slug).
 * @returns {Promise<Imagens>} Uma promessa que resolve para a imagem atualizada.
 * @throws {Error} Caso ocorra algum erro durante a atualização.
 */
export const alterar_imagens = async (imagens: Imagens): Promise<Imagens> => {
  const { data, error } = await supabase
    .from('Imagens')
    .update([imagens])
    .eq('slug', imagens.slug)
    .select()
    .single();

  if (error) {
    console.error('Erro ao alterar imagem:', error.message);
    throw new Error(error.message);
  }

  return data as Imagens;
};
