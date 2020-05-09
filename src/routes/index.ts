import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'tudo certo' }));

export default routes;
