import mongoose from 'mongoose';
import request from 'supertest';
import { app, server, dbConnection } from './index';

describe('Given app', () => {
  afterAll(() => {
    mongoose.disconnect();
    server.close();
  });
  describe('When GET /', () => {
    test('It returns Hello World', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
    });
  });
});
