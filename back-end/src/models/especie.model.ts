// src/models/especie.model.ts
import type { Especie, ResponseProps } from '../types';

export const get_all_especies = async (from: number, to: number, dbClient: any): Promise<ResponseProps<Especie[]>> => {
    const { count } = await dbClient.from('Especie').select('*', { count: 'exact' });
    const { data, error } = await dbClient.from('Especie').select('*').range(from, to);
    return { data, error, count };
};

export const post_especie = async (especie: Especie, dbClient: any): Promise<ResponseProps<Especie>> => {
  const { data, error, count } = await dbClient.from('Especie').insert([especie]).select().single();
  return { data, error, count };
};

export const put_especie = async (especie: Especie, dbClient: any): Promise<ResponseProps<Especie>> => {
  const { data, error, count } = await dbClient.from('Especie').update(especie).eq('cient', especie.cient).select().single();
  return { data, error, count };
};