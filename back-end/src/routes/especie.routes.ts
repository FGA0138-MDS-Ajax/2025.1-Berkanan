import { Elysia } from 'elysia';
import { getEspecies, inserirEspecie, alterarEspecie } from '../controllers/especie.controller';

export const especieRoutes = new Elysia({ prefix: '/especies' })
    .get('/', async () => await getEspecies())
    .post('/', async ({ body }) => {
        try {
            const especie = await inserirEspecie(body);
            return especie;
        } catch (error) {
            return { error: (error as Error).message };
        }
    })
    .put('/', async ({ body }) => {
        try {
            const especie = await alterarEspecie(body);
            return especie;
        } catch (error) {
            return { error: (error as Error).message };
        }
    });