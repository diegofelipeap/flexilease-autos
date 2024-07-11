// src/controllers/carController.ts

import { Request, Response } from 'express';
import Car from '../models/carModel';

export const createCar = async (req: Request, res: Response) => {
  try {
    const { model, brand, year, color, price, accessories } = req.body;

    if (!model || !brand || !year || !color || !price || !accessories || accessories.length === 0) {
      return res.status(400).json({ error: 'All fields are required and at least one accessory is needed.' });
    }

    const uniqueAccessories = new Set(accessories.map((acc: { description: string }) => acc.description));
    if (uniqueAccessories.size !== accessories.length) {
      return res.status(400).json({ error: 'Duplicate accessories are not allowed.' });
    }

    const car = new Car({ model, brand, year, color, price, accessories });
    await car.save();
    return res.status(201).json(car);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating car' });
  }
};

export const getCars = async (req: Request, res: Response) => {
  try {
    const cars = await Car.find();
    return res.status(200).json(cars);
  } catch (err) {
    return res.status(500).json({ error: 'Error fetching cars' });
  }
};

export const getCarById = async (req: Request, res: Response) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    return res.status(200).json(car);
  } catch (err) {
    return res.status(500).json({ error: 'Error fetching car' });
  }
};

export const updateCar = async (req: Request, res: Response) => {
  try {
    const { model, brand, year, color, price, accessories } = req.body;

    if (accessories) {
      const uniqueAccessories = new Set(accessories.map((acc: { description: string }) => acc.description));
      if (uniqueAccessories.size !== accessories.length) {
        return res.status(400).json({ error: 'Duplicate accessories are not allowed.' });
      }
    }

    const car = await Car.findByIdAndUpdate(req.params.id, { model, brand, year, color, price, accessories }, { new: true });
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    return res.status(200).json(car);
  } catch (err) {
    return res.status(500).json({ error: 'Error updating car' });
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    return res.status(200).json({ message: 'Car deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Error deleting car' });
  }
};
