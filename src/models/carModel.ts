import mongoose, { Document, Schema } from 'mongoose';
import { ICar } from './carModel';
export interface ICar extends Document {
    make: string;
    model: string;
    year: number;
    pricePerDay: number;
    available: boolean;
}

const CarSchema: Schema = new Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    pricePerDay: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

// Exportando o modelo baseado no esquema definido
const Car = mongoose.model<ICar>('Car', CarSchema);

export default Car;
