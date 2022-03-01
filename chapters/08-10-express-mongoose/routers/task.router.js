import express from 'express';
import { Task } from '../schemas/Task.js';
import { User } from '../schemas/User.js';

export const taskRouter = new express.Router();

taskRouter
  .post('/', (req, res) => {
    Task.create(req.body).then((data) =>
      User.findOneAndUpdate(
        { _id: data.owner },
        { $push: { tasks: data._id } }
      ).then(() => res.status(201).json(data))
    );
  })
  .get('/', (req, res) => {
    Task.find({})
      .populate('owner')
      .then((data) => res.status(200).json(data));
  })
  .get('/:id', (req, res) => {
    Task.findById(req.params.id)
      .populate('owner')
      .then((data) => res.status(200).json(data));
  })
  .patch('/:id', (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('owner')
      .then((data) => res.status(200).json(data));
  })
  .delete('/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id).then((data) =>
      User.findOneAndUpdate(
        { _id: data.owner },
        { $pull: { tasks: data._id } }
      ).then(() => res.status(204).json({}))
    );
  });
