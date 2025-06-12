/**
 * @file Define as rotas para verificação da integridade (health check) da aplicação.
 * @module routes/health
 * @see {@link ../controllers/health.controller.ts} para a lógica de controle.
 */

import { Elysia, t } from 'elysia';
import { healthController } from '../controllers/health.controller';

/**
 * Roteador Elysia responsável pelos endpoints de health check.
 * Todas as rotas definidas aqui usam o prefixo `/health`.
 *
 * @constant
 * @type {Elysia}
 */
export const healthRoute = new Elysia({ prefix: '/health' })
  /**
   * @route GET /
   * @summary Verifica a integridade da aplicação.
   * @description Retorna informações detalhadas sobre o estado atual da aplicação,
   * incluindo status geral, data/hora, tempo de atividade e uso de memória do processo Node.js.
   *
   * @returns {object} 200 - Objeto com os dados de integridade do sistema.
   * @property {string} status - Status geral da aplicação (ex: "healthy").
   * @property {string} timestamp - Data e hora atual no formato ISO 8601.
   * @property {number} uptime - Tempo de atividade do processo em segundos.
   * @property {object} memory - Informações de uso de memória do processo Node.js.
   * @property {number} memory.rss - Memória total alocada (Resident Set Size).
   * @property {number} memory.heapTotal - Tamanho total do heap V8.
   * @property {number} memory.heapUsed - Quantidade do heap sendo usada.
   * @property {number} memory.external - Memória usada por objetos C++ nativos.
   * @property {number} memory.arrayBuffers - Memória alocada para ArrayBuffers.
   */
  .get('/', healthController, {
    detail: {
      summary: 'Health check',
      description: 'Retorna o status atual da aplicação, incluindo tempo de atividade e uso de memória.'
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
