const request = require('supertest');
const { app, users } = require('../src/app');

describe('Users API', () => {
  beforeEach(() => {
    users.length = 0; // reset in-memory users
  });

  test('POST /users creates a user and prevents duplicate DPI', async () => {
    const user = { dpi: '123', name: 'Alice', email: 'a@example.com', password: 'pass' };
    const res1 = await request(app).post('/users').send(user);
    expect(res1.status).toBe(201);
    expect(res1.body).toMatchObject(user);

    const res2 = await request(app).post('/users').send(user);
    expect(res2.status).toBe(409);
  });

  test('GET /users lists users', async () => {
    const user = { dpi: '123', name: 'Alice', email: 'a@example.com', password: 'pass' };
    await request(app).post('/users').send(user);
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
  });

  test('PUT /users/:dpi updates user and validates DPI change', async () => {
    const u1 = { dpi: '123', name: 'Alice', email: 'a@example.com', password: 'pass' };
    const u2 = { dpi: '456', name: 'Bob', email: 'b@example.com', password: 'word' };
    await request(app).post('/users').send(u1);
    await request(app).post('/users').send(u2);

    const resUpdate = await request(app)
      .put('/users/123')
      .send({ name: 'Alice Updated', dpi: '789' });
    expect(resUpdate.status).toBe(200);
    expect(resUpdate.body.name).toBe('Alice Updated');
    expect(resUpdate.body.dpi).toBe('789');

    const resConflict = await request(app)
      .put('/users/789')
      .send({ dpi: '456' });
    expect(resConflict.status).toBe(409);
  });

  test('DELETE /users/:dpi deletes user and 404 when missing', async () => {
    const u1 = { dpi: '123', name: 'Alice', email: 'a@example.com', password: 'pass' };
    await request(app).post('/users').send(u1);
    const resDel = await request(app).delete('/users/123');
    expect(resDel.status).toBe(200);
    expect(resDel.body.message).toBe('User deleted');

    const resMissing = await request(app).delete('/users/123');
    expect(resMissing.status).toBe(404);
  });
});
