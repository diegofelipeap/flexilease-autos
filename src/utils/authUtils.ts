import jwt from 'jsonwebtoken';

export const generateToken = (userId: string) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET || '', {
        expiresIn: '12h',
    });
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET || '');
    } catch (err) {
        throw new Error('Invalid token');
    }
};
