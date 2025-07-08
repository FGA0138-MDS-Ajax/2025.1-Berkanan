import { describe, it, expect, beforeEach, vi } from 'bun:test';
import { supabase } from '../../../src/utils/supabase.utils';
import { getAllPesquisas, inserir_pesquisa } from '../../../src/models/pesquisa.model';

describe('Pesquisa Model', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve buscar todas as pesquisas', async () => {
    await getAllPesquisas();
    expect(supabase.from).toHaveBeenCalledWith('Pesquisa');
  });

  it('deve inserir uma nova pesquisa', async () => {
    const newPesquisa = { risco: 'Vulnerável' };
    await inserir_pesquisa(newPesquisa as any);
    expect(supabase.from('Pesquisa').insert).toHaveBeenCalledWith([newPesquisa]);
  });
});