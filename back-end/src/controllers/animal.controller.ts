// src/controllers/especie.controller.ts
import { get_all_especies, post_especie, put_especie } from '../models/especie.model';
import { supabase } from '../utils/supabase.utils';
import type { Especie, PaginatedResponse, QueryParams } from '../types';

export const getEspecies = async (query: QueryParams): Promise<PaginatedResponse<Especie>> => {
  const page = parseInt(query.page || '1');
  const limit = parseInt(query.limit || '10');
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  const { count, data } = await get_all_especies(from, to, supabase);
  const totalPages = Math.ceil((count ?? 0) / limit);
  return { data: data || [], totalItems: count ?? 0, totalPages, currentPage: page };
};

export const inserirEspecie = async (especie: Especie): Promise<Especie> => {
  const { data, error } = await post_especie(especie, supabase);
  if (error) throw new Error(`Erro ao inserir espécie: ${error.message}`);
  return data!;
};

export const alterarEspecie = async (especie: Especie): Promise<Especie> => {
  const { data, error } = await put_especie(especie, supabase);
  if (error) throw new Error(`Erro ao alterar espécie: ${error.message}`);
  return data!;
};