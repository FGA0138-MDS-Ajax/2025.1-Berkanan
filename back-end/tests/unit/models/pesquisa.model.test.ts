// tests/unit/models/pesquisa.model.test.ts
import { describe, it, expect, vi } from 'bun:test';
import { getAllPesquisas, inserir_pesquisa } from '../../../src/models/pesquisa.model';

describe('Pesquisa Model', () => {
  it('deve chamar o cliente para buscar todas as pesquisas', async () => {
    const mockDbClient = {
      from: vi.fn().mockReturnThis(),
      select: vi.fn().mockResolvedValue({ data: [], error: null }),
    };
    await getAllPesquisas(mockDbClient);
    expect(mockDbClient.from).toHaveBeenCalledWith('Pesquisa');
  });

  it('deve chamar o cliente para inserir uma nova pesquisa', async () => {
    const newPesquisa = { risco: 'Alto' };
    const mockDbClient = {
      from: vi.fn().mockReturnThis(),
      insert: vi.fn().mockReturnThis(),
      select: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: newPesquisa, error: null }),
    };
    await inserir_pesquisa(newPesquisa as any, mockDbClient);
    expect(mockDbClient.insert).toHaveBeenCalledWith([newPesquisa]);
  });
});