import { Elysia } from 'elysia';
import { getModeradores } from '../controllers/moderador.controller';
import type { Moderador } from '../types/moderador.type';

/**
 * Define as rotas relacionadas às operações com moderadores.
 *
 * @prefix /animais
 */
export const moderadorRoutes = new Elysia({ prefix: '/moderadores' })
    /**
     * Recupera todas os moderadores.
     *
     * @route GET /moderadores
     * @returns {Promise<Moderador[]>} Lista de moderadores.
     */
    .get('/', async () => await getModeradores());