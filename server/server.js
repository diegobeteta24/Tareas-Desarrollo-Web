const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Servir archivos estáticos del cliente React en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Arreglo en memoria para almacenar usuarios
let usuarios = [];

// Ruta de registro
app.post('/register', (req, res) => {
  const { nombre, dpi, email, password } = req.body;

  // Validar que todos los campos estén presentes
  if (!nombre || !dpi || !email || !password) {
    return res.status(400).json({ 
      success: false, 
      message: 'Todos los campos son requeridos' 
    });
  }

  // Validar que el email no esté registrado previamente
  const usuarioExistente = usuarios.find(user => user.email === email);
  if (usuarioExistente) {
    return res.status(400).json({ 
      success: false, 
      message: 'El email ya está registrado' 
    });
  }

  // Crear nuevo usuario
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    dpi,
    email,
    password
  };

  usuarios.push(nuevoUsuario);

  res.status(201).json({ 
    success: true, 
    message: 'Usuario registrado exitosamente' 
  });
});

// Ruta de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validar que los campos estén presentes
  if (!email || !password) {
    return res.status(400).json({ 
      success: false, 
      message: 'Email y contraseña son requeridos' 
    });
  }

  // Buscar usuario por email y contraseña
  const usuario = usuarios.find(
    user => user.email === email && user.password === password
  );

  if (!usuario) {
    return res.status(401).json({ 
      success: false, 
      message: 'Credenciales incorrectas' 
    });
  }

  // Login exitoso - devolver datos del usuario (sin la contraseña)
  const { password: _, ...usuarioSinPassword } = usuario;
  
  res.status(200).json({ 
    success: true, 
    message: 'Login exitoso',
    user: usuarioSinPassword
  });
});

// Ruta para obtener todos los usuarios (opcional, para debugging)
app.get('/usuarios', (req, res) => {
  const usuariosSinPassword = usuarios.map(({ password, ...user }) => user);
  res.json(usuariosSinPassword);
});

// En producción, servir el frontend para cualquier otra ruta
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
