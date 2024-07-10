import { body } from 'express-validator';

export const validateObjectId = (field: string) => {
    return body(field).isMongoId().withMessage(`${field} must be a valid MongoDB ID`);
};
