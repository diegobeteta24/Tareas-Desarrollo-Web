const express = require('express');
const jwt = require('jsonwebtoken');
const { getUserByEmail, verifyPassword } = require('../models/userModel');

const router = express.Router();

// POST /login - Autenticación de usuario
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validar que se enviaron los campos requeridos
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Por favor proporciona email y password.'
      });
    }

    // Buscar el usuario por email
    const user = getUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas.'
      });
    }

    // Verificar la contraseña
    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas.'
      });
    }

    // Crear el payload del token
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name
    };

    // Generar el token JWT con expiración de 30 segundos
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30s' // Token válido por 30 segundos
    });

    // Responder con el token
    res.json({
      success: true,
      message: 'Autenticación exitosa.',
      token: token,
      expiresIn: '30s',
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({
      success: false,
      message: 'Error en el servidor.'
    });
  }
});

module.exports = router;
