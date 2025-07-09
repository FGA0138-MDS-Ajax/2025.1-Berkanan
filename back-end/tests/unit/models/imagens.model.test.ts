// tests/unit/models/imagens.model.test.ts
import { describe, it, expect, vi } from 'bun:test';
import { get_image_by_id } from '../../../src/models/imagens.model';

describe('Imagens Model', () => {
  it('deve buscar uma imagem e sua URL pública', async () => {
    const imageData = { id: 'img1', pasta: 'lobo', codigo: 'lg-01.png', slug: 'lobo-perfil' };
    const mockDbClient = {
      from: vi.fn().mockReturnThis(),
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: imageData, error: null }),
      storage: {
        from: vi.fn().mockReturnThis(),
        getPublicUrl: vi.fn().mockReturnValue({ data: { publicUrl: 'https://fake.url/image.png' } }),
      },
    };
    
    const result = await get_image_by_id('img1', mockDbClient);

    expect(mockDbClient.from).toHaveBeenCalledWith('Imagens');
    expect(mockDbClient.storage.from).toHaveBeenCalledWith('imagens-animais');
    expect(result.url).toBe('https://fake.url/image.png');
  });
});