/**
 * @file Controller responsável por retornar o status de integridade da aplicação.
 * @description Este módulo define a função que trata a rota de health check da API.
 */

/**
 * Endpoint de verificação de integridade do sistema.
 * Retorna status, data atual, uptime e uso de memória.
 *
 * @function healthController
 * @returns {Object} Objeto com dados de integridade
 * @property {string} status - Estado atual da aplicação.
 * @property {string} timestamp - Data e hora atual em formato ISO.
 * @property {number} uptime - Tempo de atividade do processo em segundos.
 * @property {Object} memory - Uso de memória do processo Node.js.
 * @property {number} memory.rss - Memória total alocada.
 * @property {number} memory.heapTotal - Total do heap do V8.
 * @property {number} memory.heapUsed - Heap em uso.
 * @property {number} memory.external - Memória usada por bindings nativos.
 * @property {number} memory.arrayBuffers - Memória alocada para ArrayBuffers.
 */
export const healthController = () => ({
  status: 'healthy',
  timestamp: new Date().toISOString(),
  uptime: process.uptime(),
  memory: process.memoryUsage()
});
