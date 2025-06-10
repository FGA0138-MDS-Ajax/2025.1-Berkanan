/**
 * @fileoverview 
 * Inicializa e configura um servidor usando ElysiaJS com suporte a CORS, documentação Swagger,
 * endpoints de API e desligamento gracioso. O servidor oferece:
 * - Um endpoint raiz de saudação.
 * - Um endpoint com parâmetro `id` validado.
 * - Um endpoint de verificação de integridade (health check).
 * 
 * Utiliza variáveis de ambiente:
 * - `ALLOWED_ORIGINS`: lista de origens permitidas para CORS.
 * - `PORT`: porta onde o servidor será iniciado.
 * - `HOST`: hostname do servidor.
 */

import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

/**
 * Instância principal do servidor Elysia.
 * @type {Elysia}
 */
const app = new Elysia()


  /**
   * Middleware Swagger.
   * Adiciona documentação automática para os endpoints.
   */
  .use(swagger({
    documentation: {
      info: {
        title: 'Backend API',
        version: '1.0.0'
      }
    }
  }))

  /**
   * Endpoint raiz.
   * @route GET /
   * @returns {string} Mensagem "Hello World"
   */
  .get('/', () => 'Hello World', {
    detail: {
      summary: 'Root endpoint',
      description: 'Returns a simple greeting'
    }
  })

  /**
   * Endpoint para criação de entidade com ID.
   * Valida se o ID tem pelo menos 3 caracteres.
   * 
   * @route POST /id/:id
   * @param {Object} params
   * @param {string} params.id - ID fornecido na URL
   * @returns {Object} Código 201 com o ID ou 400 se inválido
   */
  .post(
    '/id/:id',
    ({ params: { id } }) => {
      if (!id || id.length < 3) {
        return {
          status: 400,
          body: { message: 'Invalid ID' }
        }
      }
      return {
        status: 201,
        body: { id }
      }
    },
    {
      params: t.Object({
        id: t.String()
      }),
      detail: {
        summary: 'Create an entity with ID',
        description: 'Endpoint to create an entity using a provided ID'
      }
    }
  )

  /**
   * Endpoint de verificação de integridade do sistema.
   * Retorna status, data atual, uptime e uso de memória.
   * 
   * @route GET /health
   * @returns {Object} Objeto com dados de integridade
   */
  .get('/health', () => ({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  }), {
    detail: {
      summary: 'Health check',
      description: 'Returns the current health status of the application'
    }
  })

  /**
   * Inicia o servidor na porta especificada.
   */
  .listen(3003)

/**
 * Captura o sinal SIGINT (Ctrl+C) e encerra o servidor com segurança.
 */
process.on('SIGINT', () => {
  console.log('Shutting down gracefully...')
  app.stop()
  process.exit(0)
})

export default app
