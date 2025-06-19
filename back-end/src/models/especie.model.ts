import { supabase } from '../lib/supabaseClient';

export type Especie = {
    genero: string;
    epiteto_especifico: string;
    observacoes?: string;
    tendenciaPopulacional: string;
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

export const saveEspecie = async (especie: Especie) => {
    const { data, error } = await supabase
        .from('especies')
        .insert([especie])
        .select()
        .single();

    if (error) {
        console.error('Erro ao salvar espécie:', error.message);
        throw new Error(error.message);
    }

    return data;
};