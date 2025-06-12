  /**
   * Endpoint de verificação de integridade do sistema.
   * Retorna status, data atual, uptime e uso de memória.
   * 
   * @route GET /health
   * @returns {Object} Objeto com dados de integridade
   */
export const healthController = () => ({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
});

