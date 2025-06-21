import { Elysia } from 'elysia';
import { getEspecies, inserirEspecie, alterarEspecie } from '../controllers/especie.controller';
import type { Especie } from '../types/especie.type';

/**
 * Define as rotas relacionadas às operações com espécies.
 *
 * @prefix /especies
 */
export const especieRoutes = new Elysia({ prefix: '/especies' })
    /**
     * Recupera todas as espécies.
     *
     * @route GET /especies
     * @returns {Promise<Especie[]>} Lista de espécies.
     */
    .get('/', async () => await getEspecies())

    /**
     * Insere uma nova espécie no banco de dados.
     *
     * @route POST /especies
     * @param {Especie} body - Objeto JSON representando a espécie a ser criada.
     * @returns {Promise<Especie | { error: string }>} A espécie criada ou um erro.
     */
    .post('/', async ({ body }: { body: Especie }) => {
        try {
            const especie = await inserirEspecie(body);
            return especie;
        } catch (error) {
            return { error: (error as Error).message };
        }
    })

    /**
     * Atualiza os dados de uma espécie existente.
     *
     * @route PUT /especies
     * @param {Especie} body - Objeto JSON com os dados atualizados da espécie (deve conter o ID).
     * @returns {Promise<Especie | { error: string }>} A espécie atualizada ou um erro.
     */
    .put('/', async ({ body }: { body: Especie }) => {
        try {
            const especie = await alterarEspecie(body);
            return especie;
        } catch (error) {
            return { error: (error as Error).message };
        }
    });

