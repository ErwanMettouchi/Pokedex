import express from 'express';
import { router } from './src/routers/router.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`Serveur lancé http://localhost:${PORT}`)
});