import { Elysia } from 'elysia';
import { getIntegracoes } from '../controllers/integracoes.controller';
import type { Integracoes } from '../types/integracoes.type';

/**
 * Define as rotas relacionadas às operações com integrações.
 *
 * @prefix /integracoes
 */
export const integracoesRoutes = new Elysia({ prefix: '/integracoes' })
    /**
     * Recupera todas as integrações.
     *
     * @route GET /integracoes
     * @returns {Promise<Integracoes[]>} Lista de integrações.
     */
    .get('/', async () => await getIntegracoes());