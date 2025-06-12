import { Elysia } from 'elysia';
import { healthRoute } from './health.route';
// import outras rotas aqui

export const routes = new Elysia()
  .use(healthRoute)

