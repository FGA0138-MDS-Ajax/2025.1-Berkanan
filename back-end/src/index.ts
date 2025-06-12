/**
 * @file Ponto de entrada principal da aplicação.
 * @description Inicializa o servidor Elysia, aplica middlewares globais (como Swagger),
 * carrega as rotas da API e inicia o servidor na porta definida.
 * @author Berkanan
 * @version 0.1.2
 */

import 'dotenv/config'; // Carrega variáveis de ambiente do .env

import { Elysia } from 'elysia';
import swagger from '@elysiajs/swagger';

import { LOG } from './utils/logger.util';
import { routes } from './routes/index';

/**
 * Cria a instância principal do servidor Elysia.
 * Esta instância é usada para configurar middlewares, rotas e iniciar o servidor.
 *
 * @type {Elysia}
 */
const app = new Elysia();

/**
 * Configuração da aplicação:
 * - Middleware de documentação Swagger.
 * - Registro das rotas globais.
 * - Inicialização do servidor.
 */
app
  .use(
    swagger({
      path: '/swagger',
      documentation: {
        info: {
          title: 'Cerradex API',
          description: 'API para o Cerradex',
          version: '1.0.0',
        },
      },
    })
  )
  .use(routes)
  .listen(Number(process.env.PORT) || 3003);

/**
 * Logs informativos exibidos no console após inicialização do servidor.
 * Indicam que a aplicação está em execução e onde acessar a documentação.
 */
LOG('🚀 Server rodando', 'http://localhost:3003');
LOG('📖 Documentação Swagger', 'http://localhost:3003/swagger');
