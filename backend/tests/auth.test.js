const request = require('supertest');
const app = require('../src/index');
const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Auth API Tests', () => {
  
  // Test 1: Register a new user
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: `test${Date.now()}@gmail.com`,
        password: 'test1234',
        role: 'customer'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User registered successfully!');
  });

  // Test 2: Login with wrong password
  it('should not login with wrong password', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'wrong@gmail.com',
        password: 'wrongpassword'
      });
    expect(res.statusCode).toBe(400);
  });

  // Test 3: Register with missing fields
  it('should not register without required fields', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User'
      });
    expect(res.statusCode).toBe(500);
  });

});