import { Elysia } from 'elysia';
import { getAnimais } from '../controllers/animal.controller';
import type { Animal } from '../types/animal.type';

/**
 * Define as rotas relacionadas às operações com animais.
 *
 * @prefix /animais
 */
export const animalRoutes = new Elysia({ prefix: '/animais' })
    /**
     * Recupera todas os animais.
     *
     * @route GET /animais
     * @returns {Promise<Animal[]>} Lista de animais.
     */
    .get('/', async () => await getAnimais());