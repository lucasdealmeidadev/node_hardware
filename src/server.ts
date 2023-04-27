import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => {
    console.log('Server Running: http://localhost:3333 or http://127.0.0.1:3333');
});