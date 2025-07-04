import { Elysia } from 'elysia';
import { getPesquisas, inserirPesquisa, alterarPesquisa } from '../controllers/pesquisa.controller';
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
     * @returns {Promise<Pesquisa[]>} Lista de pesquisas.
     */
    .get('/', async () => await getPesquisas())

    /**
     * Insere uma nova pesquisa no banco de dados.
     *
     * @route POST /pesquisas
     * @param {Pesquisa} body - Objeto JSON representando a pesquisa a ser criada.
     * @returns {Promise<Pesquisa | { error: string }>} A pesquisa criada ou um erro.
     */
    .post('/', async ({ body }: { body: Pesquisa }) => {
        try {
            const pesquisa = await inserirPesquisa(body);
            return pesquisa;
        } catch (error) {
            return { error: (error as Error).message };
        }
    })

    /**
     * Atualiza os dados de uma pesquisa existente.
     *
     * @route PUT /pesquisas
     * @param {Pesquisa} body - Objeto JSON com os dados atualizados da pesquisa (deve conter o ID).
     * @returns {Promise<Pesquisa | { error: string }>} A pesquisa atualizada ou um erro.
     */
    .put('/', async ({ body }: { body: Pesquisa }) => {
        try {
            const pesquisa = await alterarPesquisa(body);
            return pesquisa;
        } catch (error) {
            return { error: (error as Error).message };
        }
    });