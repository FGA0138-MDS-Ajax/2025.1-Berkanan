import { describe, it, expect, beforeEach, afterEach } from 'bun:test';

// Guarda o estado original das variáveis de ambiente
const originalEnv = { ...process.env };

describe('Supabase Util', () => {

  // Roda ANTES de cada teste 'it' neste bloco
  beforeEach(() => {
    // Define as variáveis de ambiente FALSAS apenas para este teste
    process.env.SUPABASE_URL = 'https://fake.supabase.co';
    process.env.SUPABASE_KEY = 'fake-key';
  });

  // Roda DEPOIS de cada teste 'it' neste bloco
  afterEach(() => {
    // Restaura as variáveis de ambiente originais para não poluir outros testes
    process.env = originalEnv;
  });

  it('deve criar uma instância do cliente Supabase com sucesso', async () => {
    // Importa o módulo dinamicamente, AGORA que as variáveis de ambiente estão definidas
    const { supabase } = await import('../../../src/utils/supabase.utils');

    expect(supabase).toBeDefined();
    expect(supabase).not.toBeNull();
  });

  it('a instância do supabase deve ser um objeto com as propriedades esperadas', async () => {
    const { supabase } = await import('../../../src/utils/supabase.utils');

    expect(typeof supabase).toBe('object');
    expect(supabase).toHaveProperty('from');
    expect(supabase).toHaveProperty('storage');
  });
});