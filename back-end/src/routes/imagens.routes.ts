import { Elysia } from 'elysia';
import { getImagens, inserirImagens, alterarImagens, getImageByID } from '../controllers/imagens.controller';
import type { Imagens } from '../types/imagens.type';

/**
 * Define as rotas relacionadas às operações com imagens.
 *
 * @prefix /imagens
 */
export const imagensRoutes = new Elysia({ prefix: '/imagens' })
    /**
     * Recupera todas as imagens.
     *
     * @route GET /imagens
     * @returns {Promise<Imagens[]>} Lista de imagens.
     */
    .get('/', async () => await getImagens())

    .get('/id', async ({query}) => await getImageByID(query))

    /**
     * Insere uma nova imagem no banco de dados.
     *
     * @route POST /imagens
     * @param {Imagens} body - Objeto JSON representando a imagem a ser criada.
     * @returns {Promise<Imagens | { error: string }>} A imagem criada ou um erro.
     */
    .post('/', async ({ body }: { body: Imagens }) => {
        try {
            const imagens = await inserirImagens(body);
            return imagens;
        } catch (error) {
            return { error: (error as Error).message };
        }
    })

    /**
     * Atualiza os dados de uma imagem existente.
     *
     * @route PUT /imagens
     * @param {Imagens} body - Objeto JSON com os dados atualizados da imagem (deve conter o ID).
     * @returns {Promise<Imagens | { error: string }>} A imagem atualizada ou um erro.
     */
    .put('/', async ({ body }: { body: Imagens }) => {
        try {
            const imagens = await alterarImagens(body);
            return imagens;
        } catch (error) {
            return { error: (error as Error).message };
        }
    });