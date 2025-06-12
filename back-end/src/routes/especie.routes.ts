import { Elysia } from 'elysia';
import { getEspecies } from '../controllers/especie.controller';

export const especieRoutes = new Elysia({ prefix: '/especies' })
    .get('/', () => getEspecies());