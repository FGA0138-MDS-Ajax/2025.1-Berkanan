// src/models/integracoes.model.ts
import type { Integracoes } from '../types/integracoes.type';

export const getAllIntegracoes = async (dbClient: any): Promise<Integracoes[]> => {
    const { data, error } = await dbClient.from('Integracoes').select('*');
    if (error) {
        console.error(error);
        throw new Error(error.message);
    }
    return data as Integracoes[];
};

export const inserir_integracoes = async (integracoes: Integracoes, dbClient: any): Promise<Integracoes> => {
    const { data, error } = await dbClient.from('Integracoes').insert([integracoes]).select().single();
    if (error) {
        console.error('Erro ao inserir integracao:', error.message);
        throw new Error(error.message);
    }
    return data as Integracoes;
};

export const alterar_integracoes = async (integracoes: Integracoes, dbClient: any): Promise<Integracoes> => {
    const { data, error } = await dbClient.from('Integracoes').update(integracoes).eq('uid', integracoes.uid).select().single();
    if (error) {
        console.error('Erro ao alterar integracao:', error.message);
        throw new Error(error.message);
    }
    return data as Integracoes;
};