// src/models/imagens.model.ts
import type { Imagens, ParsedImages } from '../types';

export const get_all_images = async (dbClient: any): Promise<ParsedImages[]> => {
  const { data, error } = await dbClient.from('Imagens').select('*');
  if (error) throw new Error(error.message);
  
  const parsedData: ParsedImages[] = data.map((item: any) => {
    const { data } = dbClient.storage.from('imagens-animais').getPublicUrl(`${item.pasta}/${item.codigo}`);
    return { id: item.id, url: data.publicUrl, alt: item.slug, pasta: item.pasta, codigo: item.codigo };
  });
  return parsedData;
};

export const get_image_by_id = async (id: string, dbClient: any): Promise<ParsedImages> => {
  const { data, error } = await dbClient.from('Imagens').select('*').eq('id', id).single();
  if (error) throw new Error(`Erro ao buscar imagem: ${error.message}`);
  
  const { data: urlData } = dbClient.storage.from('imagens-animais').getPublicUrl(`${data.pasta}/${data.codigo}`);
  return { id: data.id, url: urlData.publicUrl, alt: data.slug, pasta: data.pasta, codigo: data.codigo };
};

// ... e assim por diante para inserir/alterar