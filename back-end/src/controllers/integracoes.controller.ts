// src/controllers/integracoes.controller.ts
import { getAllIntegracoes, inserir_integracoes, alterar_integracoes } from '../models/integracoes.model';
import { supabase } from '../utils/supabase.utils';
import type { Integracoes } from '../types/integracoes.type';

export const getIntegracoes = async (): Promise<Integracoes[]> => {
    return await getAllIntegracoes(supabase);
};

export const inserirIntegracoes = async (integracoes: Integracoes): Promise<Integracoes> => {
    return await inserir_integracoes(integracoes, supabase);
};

export const alterarIntegracoes = async (integracoes: Integracoes): Promise<Integracoes> => {
    return await alterar_integracoes(integracoes, supabase);
};