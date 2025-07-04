import { Elysia } from 'elysia';
import { getModeradores, inserirModerador, alterarModerador } from '../controllers/moderador.controller';
import type { Moderador } from '../types/moderador.type';

/**
 * Define as rotas relacionadas às operações com moderadores.
 *
 * @prefix /moderadores
 */
export const moderadorRoutes = new Elysia({ prefix: '/moderadores' })
    /**
     * Recupera todas os moderadores.
     *
     * @route GET /moderadores
     * @returns {Promise<Moderador[]>} Lista de moderadores.
     */
    .get('/', async () => await getModeradores())

    /**
         * Insere um novo moderador no banco de dados.
         *
         * @route POST /moderadores
         * @param {Moderador} body - Objeto JSON representando o moderador a ser criado.
         * @returns {Promise<Moderador | { error: string }>} O moderador criado ou um erro.
         */
    .post('/', async ({ body }: { body: Moderador }) => {
        try {
            const moderador = await inserirModerador(body);
            return moderador;
        } catch (error) {
            return { error: (error as Error).message };
        }
    })

    /**
     * Atualiza os dados de um moderador existente.
     *
     * @route PUT /moderadores
     * @param {Moderador} body - Objeto JSON com os dados atualizados do moderador (deve conter o ID).
     * @returns {Promise<Moderador | { error: string }>} O moderador atualizado ou um erro.
     */
    .put('/', async ({ body }: { body: Moderador }) => {
        try {
            const moderador = await alterarModerador(body);
            return moderador;
        } catch (error) {
            return { error: (error as Error).message };
        }
    });