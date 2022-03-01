import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, required: true },
  priority: { type: String, required: true, enum: ['low', 'medium', 'high'] },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export const Task = mongoose.model('Task', TaskSchema);
