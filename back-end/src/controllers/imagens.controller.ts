// src/controllers/imagens.controller.ts
import { get_all_images, get_image_by_id } from '../models/imagens.model';
import { supabase } from '../utils/supabase.utils';
// ...

export const getImagens = async () => {
    return await get_all_images(supabase);
};

export const getImageByID = async (query: any) => {
  return await get_image_by_id(query.id!, supabase);
};
// ...