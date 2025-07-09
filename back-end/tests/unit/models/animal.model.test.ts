// back-end/tests/unit/models/animal.model.test.ts
import { describe, it, expect, vi } from 'bun:test';
import { get_all_animals, inserir_animal } from '../../../src/models/animal.model';

describe('Animal Model', () => {
  it('deve chamar os métodos corretos do cliente para buscar animais', async () => {
    const mockDbClient = {
      from: vi.fn().mockReturnThis(),
      select: vi.fn().mockReturnThis(),
      range: vi.fn().mockResolvedValue({ data: [], error: null }),
    };
    mockDbClient.select.mockResolvedValueOnce({ count: 10, error: null });

    await get_all_animals(0, 9, mockDbClient);

    expect(mockDbClient.from).toHaveBeenCalledWith('Animal');
    expect(mockDbClient.select).toHaveBeenCalledWith('*', { count: 'exact' });
    expect(mockDbClient.select().range).toHaveBeenCalledWith(0, 9);
  });

  it('deve chamar os métodos corretos para inserir um animal', async () => {
    const newAnimal = { id: 1, name: 'Onça' };
    const mockDbClient = {
      from: vi.fn().mockReturnThis(),
      insert: vi.fn().mockReturnThis(),
      select: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: newAnimal, error: null }),
    };

    await inserir_animal(newAnimal as any, mockDbClient);

    expect(mockDbClient.from).toHaveBeenCalledWith('Animal');
    expect(mockDbClient.insert).toHaveBeenCalledWith([newAnimal]);
  });
});