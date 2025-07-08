import { describe, it, expect, beforeEach, vi } from 'bun:test';
import { supabase } from '../../../src/utils/supabase.utils'; // Importa o mock automaticamente
import { get_all_animals, inserir_animal } from '../../../src/models/animal.model';

describe('Animal Model', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve buscar todos os animais com paginação', async () => {
    (supabase.from('Animal').select as any).mockResolvedValueOnce({ count: 10, error: null });
    
    await get_all_animals(0, 9);
    
    expect(supabase.from).toHaveBeenCalledWith('Animal');
    expect(supabase.from('Animal').select).toHaveBeenCalledWith('*', { count: 'exact' });
    expect(supabase.from('Animal').select().range).toHaveBeenCalledWith(0, 9);
  });

  it('deve inserir um novo animal', async () => {
    const newAnimal = { id: 2, name: 'Onça' };
    (supabase.from('Animal').insert([]).select().single as any).mockResolvedValue({ data: newAnimal, error: null });
    
    await inserir_animal(newAnimal as any);

    expect(supabase.from('Animal').insert).toHaveBeenCalledWith([newAnimal]);
  });
});