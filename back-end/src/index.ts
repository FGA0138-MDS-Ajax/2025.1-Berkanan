import { Elysia } from 'elysia';
import { especieRoutes } from './routes/especie.routes';

const app = new Elysia();

app.use(especieRoutes);

app.listen(3000);
console.log('🚀 Server running at http://localhost:3000');