import { supabase } from '../lib/supabaseClient';

export const getAllEspecies = async () => {
    const { data, error } = await supabase
        .from('especie')
        .select('*');

    if (error) {
        throw new Error(error.message);
    }

    return data;
};
