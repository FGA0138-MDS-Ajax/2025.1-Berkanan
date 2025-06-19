import { Elysia } from 'elysia';
import { getEspecies } from '../controllers/especie.controller';
import { saveEspecie } from '../models/especie.model';

export const especieRoutes = new Elysia({ prefix: '/especies' })
    .get('/', async () => await getEspecies())
    .post('/', async ({ body }) => {
        try {
            const especieCriada = await saveEspecie(body);
            return especieCriada;
        } catch (error) {
            return { error: (error as Error).message };
        }
    });