import {
  createTaskDB,
  deleteTaskByIdDB,
  getAllTasksDB,
  getTaskByIdDB,
  updateTaskByIdDB,
} from '../db/db.task.crud.js';

export const createTask = (req, res) => {
  createTaskDB(req.body).then((data) => res.status(201).json(data));
};

export const getAllTasks = (req, res) => {
  getAllTasksDB().then((data) => res.status(200).json(data));
};

export const getTaskById = (req, res) => {
  getTaskByIdDB(req.params.id).then((data) => res.status(200).json(data));
};

export const updateTaskById = (req, res) => {
  updateTaskByIdDB(req.params.id, req.body).then((data) =>
    res.status(200).json(data)
  );
};

export const deleteTaskById = (req, res) => {
  deleteTaskByIdDB(req.params.id).then(() => res.status(204).json({}));
};
