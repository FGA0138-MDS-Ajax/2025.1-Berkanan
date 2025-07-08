import { describe, it, expect, beforeEach, vi } from 'bun:test';
import { supabase } from '../../../src/utils/supabase.utils';
import { get_image_by_id } from '../../../src/models/imagens.model';

describe('Imagens Model', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve buscar uma imagem e sua URL pública', async () => {
    const imageData = { id: 'img1', pasta: 'lobo', codigo: 'lg-01.png' };
    (supabase.from('Imagens').select().eq().single as any).mockResolvedValue({ data: imageData, error: null });

    const result = await get_image_by_id('img1');

    expect(supabase.from).toHaveBeenCalledWith('Imagens');
    expect(supabase.storage.from).toHaveBeenCalledWith('imagens-animais');
    expect(result.url).toBe('https://fake.url/image.png');
  });
});