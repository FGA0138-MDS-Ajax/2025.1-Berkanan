import { Elysia } from 'elysia';
import { getImagens } from '../controllers/imagens.controller';
import type { Imagens } from '../types/imagens.type';

/**
 * Define as rotas relacionadas às operações com imagens.
 *
 * @prefix /imagens
 */
export const imagensRoutes = new Elysia({ prefix: '/imagens' })
    /**
     * Recupera todas as imagens.
     *
     * @route GET /imagens
     * @returns {Promise<Imagens[]>} Lista de imagens.
     */
    .get('/', async () => await getImagens());