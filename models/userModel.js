const bcrypt = require('bcryptjs');

// Datos simulados de usuarios (en producción esto estaría en una base de datos)
let users = [
  {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan@example.com',
    // Contraseña: password123
    password: '$2a$10$lqH0sr3GX9r7mgMX7qhLBenYK.5N5c3XLtDKPFbwm3hfBfteVVVRC'
  },
  {
    id: 2,
    name: 'María García',
    email: 'maria@example.com',
    // Contraseña: password123
    password: '$2a$10$lqH0sr3GX9r7mgMX7qhLBenYK.5N5c3XLtDKPFbwm3hfBfteVVVRC'
  },
  {
    id: 3,
    name: 'Carlos López',
    email: 'carlos@example.com',
    // Contraseña: password123
    password: '$2a$10$lqH0sr3GX9r7mgMX7qhLBenYK.5N5c3XLtDKPFbwm3hfBfteVVVRC'
  }
];

// Función para obtener todos los usuarios (sin password)
const getAllUsers = () => {
  return users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
};

// Función para obtener un usuario por ID
const getUserById = (id) => {
  return users.find(user => user.id === parseInt(id));
};

// Función para obtener un usuario por email (incluye password para autenticación)
const getUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

// Función para crear un nuevo usuario
const createUser = (userData) => {
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    ...userData
  };
  users.push(newUser);
  const { password, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

// Función para actualizar un usuario
const updateUser = (id, userData) => {
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index === -1) return null;
  
  users[index] = { ...users[index], ...userData, id: parseInt(id) };
  const { password, ...userWithoutPassword } = users[index];
  return userWithoutPassword;
};

// Función para eliminar un usuario
const deleteUser = (id) => {
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index === -1) return null;
  
  const deletedUser = users[index];
  users.splice(index, 1);
  const { password, ...userWithoutPassword } = deletedUser;
  return userWithoutPassword;
};

// Función para verificar contraseña
const verifyPassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

// Función para hashear contraseña
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  verifyPassword,
  hashPassword
};
