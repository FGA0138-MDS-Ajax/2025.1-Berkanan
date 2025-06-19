import { supabase } from '../lib/supabaseClient';

export type Especie = {
    id: number;
    genero: string;
    epiteto_especifico: string;
    observacoes?: string;
    tendencia_populacional: string;
};

export const getAllEspecies = async () => {
    const { data, error } = await supabase
        .from('especie')
        .select('*');

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export const inserir = async (especie: Especie) => {
    const { data, error } = await supabase
        .from('especie')
        .insert([especie])
        .select()
        .single();

    if (error) {
        console.error('Erro ao inserir espécie:', error.message);
        throw new Error(error.message);
    }

    return data;
};

export const alterar = async (especie: Especie) => {
    const { data, error } = await supabase
        .from('especie')
        .update([especie])
        .eq('id', especie.id)
        .select()
        .single();

    if (error) {
        console.error('Erro ao alterar espécie:', error.message);
        throw new Error(error.message);
    }

    return data;
};