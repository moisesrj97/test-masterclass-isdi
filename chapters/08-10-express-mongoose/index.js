import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { taskRouter } from './routers/task.router.js';
import { userRouter } from './routers/user.router.js';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

app.use('/users', userRouter);
app.use('/tasks', taskRouter);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server started and listening on port ' + port);
});
