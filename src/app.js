const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// In-memory storage for users
// User shape: { dpi: string, name: string, email: string, password: string }
const users = [];

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Helpers
const findUserIndexByDpi = (dpi) => users.findIndex((u) => u.dpi === dpi);
const findUserByDpi = (dpi) => users.find((u) => u.dpi === dpi);

// Health
app.get('/', (_req, res) => {
  res.json({ status: 'ok' });
});

// Create user
app.post('/users', (req, res) => {
  const { dpi, name, email, password } = req.body || {};

  if (!dpi || !name || !email || !password) {
    return res.status(400).json({ error: 'dpi, name, email, and password are required' });
  }

  if (findUserByDpi(dpi)) {
    return res.status(409).json({ error: 'User with this DPI already exists' });
  }

  const user = { dpi: String(dpi), name, email, password };
  users.push(user);
  return res.status(201).json(user);
});

// List users
app.get('/users', (_req, res) => {
  return res.json(users);
});

// Update user by DPI (path parameter)
app.put('/users/:dpi', (req, res) => {
  const { dpi } = req.params;
  const { dpi: newDpi, name, email, password } = req.body || {};

  const idx = findUserIndexByDpi(dpi);
  if (idx === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  // If changing DPI, ensure the new one is not taken by a different user
  if (newDpi && newDpi !== dpi) {
    if (findUserByDpi(newDpi)) {
      return res.status(409).json({ error: 'Another user with this new DPI already exists' });
    }
    users[idx].dpi = String(newDpi);
  }

  if (name !== undefined) users[idx].name = name;
  if (email !== undefined) users[idx].email = email;
  if (password !== undefined) users[idx].password = password;

  return res.json(users[idx]);
});

// Delete user by DPI
app.delete('/users/:dpi', (req, res) => {
  const { dpi } = req.params;
  const idx = findUserIndexByDpi(dpi);
  if (idx === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  const [deleted] = users.splice(idx, 1);
  return res.json({ message: 'User deleted', user: deleted });
});

module.exports = { app, users };
