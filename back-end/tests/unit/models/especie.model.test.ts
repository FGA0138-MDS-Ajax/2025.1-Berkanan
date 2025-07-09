// tests/unit/models/especie.model.test.ts
import { describe, it, expect, vi } from 'bun:test';
import { get_all_especies, post_especie } from '../../../src/models/especie.model';

describe('Especie Model', () => {
  it('deve chamar o cliente para buscar espécies com paginação', async () => {
    const mockDbClient = {
      from: vi.fn().mockReturnThis(),
      select: vi.fn().mockReturnThis(),
      range: vi.fn().mockResolvedValue({ data: [], error: null }),
    };
    mockDbClient.select.mockResolvedValueOnce({ count: 20, error: null });

    await get_all_especies(0, 9, mockDbClient);

    expect(mockDbClient.from).toHaveBeenCalledWith('Especie');
    expect(mockDbClient.select().range).toHaveBeenCalledWith(0, 9);
  });

  it('deve chamar o cliente para inserir uma nova espécie', async () => {
    const newEspecie = { name: 'Capivara' };
    const mockDbClient = {
      from: vi.fn().mockReturnThis(),
      insert: vi.fn().mockReturnThis(),
      select: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: newEspecie, error: null }),
    };

    await post_especie(newEspecie as any, mockDbClient);

    expect(mockDbClient.from).toHaveBeenCalledWith('Especie');
    expect(mockDbClient.insert).toHaveBeenCalledWith([newEspecie]);
  });
});