import { Elysia } from 'elysia';
import { getPesquisas } from '../controllers/pesquisa.controller';
import type { Pesquisa } from '../types/pesquisa.type';

/**
 * Define as rotas relacionadas às operações com pesquisas.
 *
 * @prefix /pesquisas
 */
export const pesquisaRoutes = new Elysia({ prefix: '/pesquisas' })
    /**
     * Recupera todas as pesquisas.
     *
     * @route GET /pesquisas
     * @returns {Promise<Especie[]>} Lista de pesquisas.
     */
    .get('/', async () => await getPesquisas());