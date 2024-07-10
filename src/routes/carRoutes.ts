import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send('List of cars');
});

router.post('/', (req, res) => {
    res.send('Add a new car');
});

router.put('/:id', (req, res) => {
    res.send(`Update car with id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Delete car with id ${req.params.id}`);
});

export default router;