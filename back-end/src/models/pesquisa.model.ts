// src/models/pesquisa.model.ts
import type { Pesquisa } from '../types/pesquisa.type';

export const getAllPesquisas = async (dbClient: any): Promise<Pesquisa[]> => {
    const { data, error } = await dbClient.from('Pesquisa').select('*');
    if (error) {
        console.error(error);
        throw new Error(error.message);
    }
    return data as Pesquisa[];
};

export const inserir_pesquisa = async (pesquisa: Pesquisa, dbClient: any): Promise<Pesquisa> => {
    const { data, error } = await dbClient.from('Pesquisa').insert([pesquisa]).select().single();
    if (error) {
        console.error('Erro ao inserir pesquisa:', error.message);
        throw new Error(error.message);
    }
    return data as Pesquisa;
};

export const alterar_pesquisa = async (pesquisa: Pesquisa, dbClient: any): Promise<Pesquisa> => {
    const { data, error } = await dbClient.from('Pesquisa').update(pesquisa).eq('id_pesq', pesquisa.id_pesq).select().single();
    if (error) {
        console.error('Erro ao alterar pesquisa:', error.message);
        throw new Error(error.message);
    }
    return data as Pesquisa;
};