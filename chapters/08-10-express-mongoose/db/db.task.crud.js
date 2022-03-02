import { Task } from '../schemas/Task.js';
import { User } from '../schemas/User.js';

export const createTaskDB = (newTask) =>
  Task.create(newTask).then((data) =>
    User.findOneAndUpdate({ _id: data.owner }, { $push: { tasks: data._id } })
  );

export const getAllTasksDB = () => Task.find({}).populate('owner');

export const getTaskByIdDB = (id) => Task.findById(id).populate('owner');

export const updateTaskByIdDB = (id, updatedTask) =>
  Task.findByIdAndUpdate(id, updatedTask, { new: true }).populate('owner');

export const deleteTaskByIdDB = (id) =>
  Task.findByIdAndDelete(id).then((data) =>
    User.findOneAndUpdate({ _id: data.owner }, { $pull: { tasks: data._id } })
  );
