import express from 'express';
import dotenv from 'dotenv';
import carRoutes from './routes/carRoutes';
import reservationRoutes from './routes/reservationRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', carRoutes);
app.use('/api', reservationRoutes);
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to FlexiLease Autos API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
