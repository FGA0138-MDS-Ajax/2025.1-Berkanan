import { describe, it, expect, beforeEach, vi } from 'bun:test';
import { supabase } from '../../../src/utils/supabase.utils';
import { getAllIntegracoes, inserir_integracoes } from '../../../src/models/integracoes.model';

describe('Integracoes Model', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve buscar todas as integrações', async () => {
    await getAllIntegracoes();
    expect(supabase.from).toHaveBeenCalledWith('Integracoes');
  });

  it('deve inserir uma nova integração', async () => {
    const newIntegracao = { especie_id: 'panthera-onca' };
    await inserir_integracoes(newIntegracao as any);
    expect(supabase.from('Integracoes').insert).toHaveBeenCalledWith([newIntegracao]);
  });
});