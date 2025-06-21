import { Elysia } from 'elysia';
import { getEspecies } from '../controllers/especie.controller';

/**
 * Roteador Elysia responsável pelos endpoints de especie.
 * Todas as rotas definidas aqui usam o prefixo `/especies`.
 *
 * @constant
 * @type {Elysia}
 */
export const especieRoutes = new Elysia({ prefix: '/especies' })
    /**
     * Rota para obter uma lista de todas as espécies.
     *
     * @name GET /especies
     * @function
     * @memberof especieRoutes
     * @returns {Promise<Array<object>>} Uma promessa que resolve para um array de objetos de espécies.
     */
    .get('/', async () => await getEspecies());