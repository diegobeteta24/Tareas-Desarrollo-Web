const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  hashPassword
} = require('../models/userModel');

const router = express.Router();

// GET /users - Listar todos los usuarios (PROTEGIDO)
router.get('/users', verifyToken, (req, res) => {
  try {
    const users = getAllUsers();
    res.json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener usuarios.'
    });
  }
});

// GET /users/:id - Obtener un usuario por ID (NO PROTEGIDO para este ejemplo)
router.get('/users/:id', (req, res) => {
  try {
    const user = getUserById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado.'
      });
    }

    const { password, ...userWithoutPassword } = user;
    res.json({
      success: true,
      data: userWithoutPassword
    });
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener usuario.'
    });
  }
});

// POST /users - Crear un nuevo usuario (NO PROTEGIDO para permitir registro)
router.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validar campos requeridos
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Por favor proporciona name, email y password.'
      });
    }

    // Hashear la contraseña
    const hashedPassword = await hashPassword(password);

    // Crear el usuario
    const newUser = createUser({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      success: true,
      message: 'Usuario creado exitosamente.',
      data: newUser
    });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({
      success: false,
      message: 'Error al crear usuario.'
    });
  }
});

// PUT /users/:id - Actualizar un usuario por ID (PROTEGIDO)
router.put('/users/:id', verifyToken, async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const updateData = {};

    // Solo actualizar los campos que se envían
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) {
      updateData.password = await hashPassword(password);
    }

    const updatedUser = updateUser(req.params.id, updateData);

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado.'
      });
    }

    res.json({
      success: true,
      message: 'Usuario actualizado exitosamente.',
      data: updatedUser
    });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar usuario.'
    });
  }
});

// DELETE /users/:id - Eliminar un usuario por ID (PROTEGIDO)
router.delete('/users/:id', verifyToken, (req, res) => {
  try {
    const deletedUser = deleteUser(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado.'
      });
    }

    res.json({
      success: true,
      message: 'Usuario eliminado exitosamente.',
      data: deletedUser
    });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({
      success: false,
      message: 'Error al eliminar usuario.'
    });
  }
});

module.exports = router;
