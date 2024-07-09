import { Router } from 'express';

const router = Router();

router.get('/users', (req, res) => {
    res.send('List of users');
});

router.post('/users', (req, res) => {
    res.send('Register a new user');
});

router.put('/users/:id', (req, res) => {
    res.send(`Update user with id ${req.params.id}`);
});

router.delete('/users/:id', (req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
});

export default router;
