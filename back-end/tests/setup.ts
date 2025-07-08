import { mock, vi } from 'bun:test';

// Este é o nosso cliente Supabase falso.
const supabaseMock = {
  from: vi.fn().mockReturnThis(),
  select: vi.fn().mockReturnThis(),
  insert: vi.fn().mockReturnThis(),
  update: vi.fn().mockReturnThis(),
  eq: vi.fn().mockReturnThis(),
  range: vi.fn().mockResolvedValue({ data: [], error: null }),
  single: vi.fn().mockResolvedValue({ data: {}, error: null }),
  storage: {
    from: vi.fn().mockReturnThis(),
    getPublicUrl: vi.fn().mockReturnValue({ data: { publicUrl: 'https://fake.url/image.png' } }),
  },
};

// Usamos a função 'mock.module' do Bun para substituir o módulo real pelo nosso mock.
// Isso será executado ANTES de todos os arquivos de teste.
mock.module('../src/utils/supabase.utils', () => {
  return {
    supabase: supabaseMock,
  };
});