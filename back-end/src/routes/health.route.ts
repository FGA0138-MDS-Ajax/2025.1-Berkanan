import { Elysia, t } from 'elysia';
import { healthController } from '../controllers/health.controller';

export const healthRoute = new Elysia({ prefix: '/health' })
  .get('/', healthController, {
    detail: {
      summary: 'Health check',
      description: 'Returns the current health status of the application'
    },
    response: t.Object({
      status: t.String(),
      timestamp: t.String({ format: 'date-time' }),
      uptime: t.Number(),
      memory: t.Object({
        rss: t.Number(),
        heapTotal: t.Number(),
        heapUsed: t.Number(),
        external: t.Number(),
        arrayBuffers: t.Number()
      })
    })
  });
