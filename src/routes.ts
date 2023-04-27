import { Router, Request, Response } from 'express';
import * as stats from './helpers/memoryRamUsage';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Server Running..' });
});

router.get('/stats', (req: Request, res: Response) => {
   res.end(JSON.stringify(stats, null, 2));
});


export { router };