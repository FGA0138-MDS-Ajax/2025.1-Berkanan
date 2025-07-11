/**
 * @file Índice central de rotas da aplicação.
 * @description Agrega e organiza todos os módulos de rotas da API em uma única instância de roteador.
 * Cada submódulo de rota (ex: `healthRoute`) é importado e registrado aqui,
 * permitindo que o servidor principal integre todas as rotas de forma modular e escalável.
 * 
 * @module routes/index
 */

import { Elysia } from 'elysia';
import { healthRoute } from './health.route';
import { especieRoutes } from './especie.routes';
import { animalRoutes } from './animal.routes';
import { imagensRoutes } from './imagens.routes';
import { integracoesRoutes } from './integracoes.routes';
import { pesquisaRoutes } from './pesquisa.routes';
import dotenv from 'dotenv';
// Importe outras rotas abaixo conforme necessário

dotenv.config();

/**
 * Instância agregadora do Elysia que reúne todos os módulos de rota.
 * Ideal para manter uma organização modular e escalar a aplicação com novas rotas facilmente.
 *
 * @constant
 * @type {Elysia}
 */
export const routes = new Elysia()
  .use(healthRoute)
  .use(especieRoutes)
  .use(animalRoutes)
  .use(imagensRoutes)
  .use(integracoesRoutes)
  .use(pesquisaRoutes);