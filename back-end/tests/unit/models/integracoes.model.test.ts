// tests/unit/models/integracoes.model.test.ts
import { describe, it, expect, vi } from 'bun:test';
import { getAllIntegracoes, inserir_integracoes } from '../../../src/models/integracoes.model';

describe('Integracoes Model', () => {
  it('deve chamar o cliente para buscar todas as integrações', async () => {
    const mockDbClient = {
      from: vi.fn().mockReturnThis(),
      select: vi.fn().mockResolvedValue({ data: [], error: null }),
    };
    await getAllIntegracoes(mockDbClient);
    expect(mockDbClient.from).toHaveBeenCalledWith('Integracoes');
  });

  it('deve chamar o cliente para inserir uma nova integração', async () => {
    const newIntegracao = { especie_id: 'uuid1' };
    const mockDbClient = {
      from: vi.fn().mockReturnThis(),
      insert: vi.fn().mockReturnThis(),
      select: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: newIntegracao, error: null }),
    };
    await inserir_integracoes(newIntegracao as any, mockDbClient);
    expect(mockDbClient.insert).toHaveBeenCalledWith([newIntegracao]);
  });
});