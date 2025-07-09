// src/models/animal.model.ts

import type { Animal, ResponseProps } from '../types';

export const get_all_animals = async (from: number, to: number, dbClient: any): Promise<ResponseProps<Animal[]>> => {
  const { count } = await dbClient.from('Animal').select('*', { count: 'exact' });
  const { data, error } = await dbClient.from('Animal').select('*').range(from, to);
  return { data, error, count };
};

export const inserir_animal = async (animal: Animal, dbClient: any): Promise<Animal> => {
  const { data, error } = await dbClient.from('Animal').insert([animal]).select().single();
  if (error) throw new Error(error.message);
  return data;
};

// ... e as outras funções do arquivo, sempre recebendo 'dbClient'
export const alterar_animal = async (animal: Animal, dbClient: any): Promise<Animal> => {
    const { data, error } = await dbClient.from('Animal').update(animal).eq('id', animal.id).select().single();
    if (error) throw new Error(error.message);
    return data;
};