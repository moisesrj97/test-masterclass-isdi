import { User } from '../schemas/User.js';

export const createUserDB = (newUser) => User.create(newUser);

export const getAllUsersDB = () => User.find({}).populate('tasks');

export const getUserByIdDB = (id) => User.findById(id).populate('tasks');
