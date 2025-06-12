import 'dotenv/config'
import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";

import { LOG } from "./utils/logger.util";
import { routes } from './routes/index';

const app = new Elysia();

app
  .use(swagger({
    path: '/swagger',
    documentation: {
      info: {
        title: 'Cerradex API',
        description: 'API para o Cerradex',
        version: '1.0.0'
      }
    }
  }))
  .use(routes)
  .listen(3003);

LOG("🚀 Server rodando", "http://localhost:3003");
LOG("📖 Documentação Swagger", "http://localhost:3003/swagger");