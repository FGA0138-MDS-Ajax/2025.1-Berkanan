import { Elysia } from 'elysia';
import { getAnimals, inserirAnimal, alterarAnimal } from '../controllers/animal.controller';
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
    .get('/', async ({query}) => await getAnimals(query))


    /**
     * Insere um novo animal no banco de dados.
     *
     * @route POST /animais
     * @param {Animal} body - Objeto JSON representando o animal a ser criado.
     * @returns {Promise<Animal | { error: string }>} O animal criado ou um erro.
     */
    .post('/', async ({ body }: { body: Animal }) => {
        try {
            const animal = await inserirAnimal(body);
            return animal;
        } catch (error) {
            return { error: (error as Error).message };
        }
    })

    /**
     * Atualiza os dados de um animal existente.
     *
     * @route PUT /animais
     * @param {Animal} body - Objeto JSON com os dados atualizados do animal (deve conter o ID).
     * @returns {Promise<Animal | { error: string }>} O animal atualizado ou um erro.
     */
    .put('/', async ({ body }: { body: Animal }) => {
        try {
            const animal = await alterarAnimal(body);
            return animal;
        } catch (error) {
            return { error: (error as Error).message };
        }
    });
