// src/controllers/carController.ts

import { Request, Response } from 'express';
import Car from '../models/carModel';

export const getCars = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  try {
    const cars = await Car.find()
      .skip((page - 1) * limit)
      .limit(limit);
    const total = await Car.countDocuments();
    res.status(200).json({
      cars,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createCar = async (req: Request, res: Response) => {
  const { make, model, year, pricePerDay, available } = req.body;

  const newCar = new Car({
    make,
    model,
    year,
    pricePerDay,
    available,
  });

  try {
    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (err) {
    res.status(500).send(err);
  }
};
