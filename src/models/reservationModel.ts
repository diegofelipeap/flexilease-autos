import mongoose, { Document, Schema } from 'mongoose';
import { ICar } from './carModel';
import { IUser } from './userModel';


// Definindo a interface que representa um documento de reserva no MongoDB
export interface IReservation extends Document {
  user: IUser['_id'];
  car: ICar['_id'];
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  status: 'reserved' | 'completed' | 'cancelled';
}

// Definindo o esquema de reserva
const ReservationSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  car: {
    type: Schema.Types.ObjectId,
    ref: 'Car',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['reserved', 'completed', 'cancelled'],
    default: 'reserved',
  },
});

// Exportando o modelo baseado no esquema definido
const Reservation = mongoose.model<IReservation>('Reservation', ReservationSchema);

export default Reservation;
