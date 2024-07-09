import { Router } from 'express';

const router = Router();

router.get('/cars', (req, res) => {
    res.send('List of cars');
});

router.post('/cars', (req, res) => {
    res.send('Add a new car');
});

router.put('/cars/:id', (req, res) => {
    res.send(`Update car with id ${req.params.id}`);
});

router.delete('/cars/:id', (req, res) => {
    res.send(`Delete car with id ${req.params.id}`);
});

export default router;
