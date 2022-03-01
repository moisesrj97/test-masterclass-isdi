import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tasks: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    required: true,
    default: [],
  },
});

export const User = mongoose.model('User', UserSchema);
