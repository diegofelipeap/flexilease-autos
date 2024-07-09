import { Router } from 'express';

const router = Router();

router.get('/reservations', (req, res) => {
    res.send('List of reservations');
});

router.post('/reservations', (req, res) => {
    res.send('Add a new reservation');
});

router.put('/reservations/:id', (req, res) => {
    res.send(`Update reservation with id ${req.params.id}`);
});

router.delete('/reservations/:id', (req, res) => {
    res.send(`Cancel reservation with id ${req.params.id}`);
});

export default router;
