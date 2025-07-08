import { describe, it, expect, beforeEach, vi } from 'bun:test';
import { supabase } from '../../../src/utils/supabase.utils';
import { get_all_especies, post_especie } from '../../../src/models/especie.model';

describe('Especie Model', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve buscar todas as espécies com paginação', async () => {
    (supabase.from('Especie').select as any).mockResolvedValueOnce({ count: 15, error: null });

    await get_all_especies(0, 10);
    
    expect(supabase.from).toHaveBeenCalledWith('Especie');
    expect(supabase.from('Especie').select().range).toHaveBeenCalledWith(0, 10);
  });

  it('deve inserir uma nova espécie', async () => {
    const newEspecie = { id: 'panthera-onca' };
    await post_especie(newEspecie as any);
    expect(supabase.from('Especie').insert).toHaveBeenCalledWith([newEspecie]);
  });
});