import {
  createUserDB,
  getAllUsersDB,
  getUserByIdDB,
} from '../db/db.user.crud.js';

export const createUser = async (req, res) =>
  res.status(201).json(await createUserDB(req.body));

export const getAllUsers = async (req, res) =>
  res.status(200).json(await getAllUsersDB());

export const getUserById = async (req, res) =>
  res.status(200).json(await getUserByIdDB(req.params.id));
