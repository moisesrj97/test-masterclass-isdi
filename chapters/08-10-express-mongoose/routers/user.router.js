import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
} from '../controllers/user.controller.js';

export const userRouter = new express.Router();

userRouter.post('/', createUser).get('/', getAllUsers).get('/:id', getUserById);
