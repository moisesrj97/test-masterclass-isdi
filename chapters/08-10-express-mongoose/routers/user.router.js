import express from 'express';
import { User } from '../schemas/User.js';

export const userRouter = new express.Router();

userRouter
  .post('/', (req, res) => {
    User.create(req.body).then((data) => res.status(201).json(data));
  })
  .get('/', (req, res) => {
    User.find({})
      .populate('tasks')
      .then((data) => res.status(200).json(data));
  })
  .get('/:id', (req, res) => {
    User.findById(req.params.id)
      .populate('tasks')
      .then((data) => res.status(200).json(data));
  });
