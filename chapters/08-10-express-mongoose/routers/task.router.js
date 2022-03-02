import express from 'express';
import {
  createTask,
  deleteTaskById,
  getAllTasks,
  getTaskById,
  updateTaskById,
} from '../controllers/task.controller.js';

export const taskRouter = new express.Router();

taskRouter
  .post('/', createTask)
  .get('/', getAllTasks)
  .get('/:id', getTaskById)
  .patch('/:id', updateTaskById)
  .delete('/:id', deleteTaskById);
