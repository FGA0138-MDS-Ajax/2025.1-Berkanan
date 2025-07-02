import { Elysia } from 'elysia';
import { getIntegracoes, inserirIntegracoes, alterarIntegracoes } from '../controllers/integracoes.controller';
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
    .get('/', async () => await getIntegracoes())

    /**
     * Insere uma nova integração no banco de dados.
     *
     * @route POST /integracoes
     * @param {Integracoes} body - Objeto JSON representando a integração a ser criada.
     * @returns {Promise<Integracoes | { error: string }>} A integração criada ou um erro.
     */
    .post('/', async ({ body }: { body: Integracoes }) => {
        try {
            const integracoes = await inserirIntegracoes(body);
            return integracoes;
        } catch (error) {
            return { error: (error as Error).message };
        }
    })

    /**
     * Atualiza os dados de uma integração existente.
     *
     * @route PUT /integracoes
     * @param {Integracoes} body - Objeto JSON com os dados atualizados da integração (deve conter o ID).
     * @returns {Promise<Integracoes | { error: string }>} A integração atualizada ou um erro.
     */
    .put('/', async ({ body }: { body: Integracoes }) => {
        try {
            const integracoes = await alterarIntegracoes(body);
            return integracoes;
        } catch (error) {
            return { error: (error as Error).message };
        }
    });