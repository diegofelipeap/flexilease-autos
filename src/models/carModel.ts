// src/models/carModel.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface IAccessory extends Document {
  description: string;
}

export interface ICar extends Document {
  model: string;
  brand: string;
  year: number;
  color: string;
  price: number;
  accessories: IAccessory[];
}

const AccessorySchema: Schema = new Schema({
  description: { type: String, required: true, unique: true }
});

const CarSchema: Schema = new Schema({
  model: { type: String, required: true },
  brand: { type: String, required: true },
  year: { type: Number, required: true, min: 1950, max: 2023 },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  accessories: { type: [AccessorySchema], required: true }
});

export default mongoose.model<ICar>('Car', CarSchema);
