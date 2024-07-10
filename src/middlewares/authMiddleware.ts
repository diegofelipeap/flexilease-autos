import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).send('Access denied');
    }
    try {
        next();
    } catch (error) {
        res.status(401).send('Invalid token');
    }
};

export default authMiddleware;
