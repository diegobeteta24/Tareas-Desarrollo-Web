require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API REST con autenticación JWT - Hoja de Trabajo 6',
    version: '1.0.0',
    endpoints: {
      auth: {
        login: 'POST /login'
      },
      users: {
        getAll: 'GET /users (protegido)',
        getById: 'GET /users/:id',
        create: 'POST /users',
        update: 'PUT /users/:id (protegido)',
        delete: 'DELETE /users/:id (protegido)'
      }
    },
    documentation: 'Consulta el README.md para más información'
  });
});

// Rutas
app.use('/', authRoutes);
app.use('/', userRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada.'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📝 Endpoints disponibles:`);
  console.log(`   POST   /login - Autenticación`);
  console.log(`   GET    /users - Listar usuarios (protegido)`);
  console.log(`   GET    /users/:id - Obtener usuario`);
  console.log(`   POST   /users - Crear usuario`);
  console.log(`   PUT    /users/:id - Actualizar usuario (protegido)`);
  console.log(`   DELETE /users/:id - Eliminar usuario (protegido)`);
});

module.exports = app;
