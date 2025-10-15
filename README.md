# API REST con Autenticación JWT
## Hoja de Trabajo 6

API REST desarrollada con Node.js y Express.js que implementa autenticación mediante JSON Web Tokens (JWT). Esta API permite gestionar usuarios y protege ciertos endpoints mediante autenticación JWT.

---

## 🚀 URL de la API Desplegada

**🔗 [https://tareas-desarrollo-web-1.onrender.com](https://tareas-desarrollo-web-1.onrender.com)**

> ✅ **API funcionando correctamente en Render**

## 📦 Repositorio

**GitHub:** [https://github.com/diegobeteta24/Tareas-Desarrollo-Web/tree/jwt](https://github.com/diegobeteta24/Tareas-Desarrollo-Web/tree/jwt)

---

## 📋 Características

- ✅ Autenticación mediante JWT
- ✅ Tokens con expiración de 30 segundos
- ✅ Endpoints protegidos con middleware de autenticación
- ✅ CRUD completo de usuarios
- ✅ Contraseñas hasheadas con bcrypt
- ✅ Variables de entorno para configuración segura

---

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución de JavaScript
- **Express.js** - Framework web para Node.js
- **jsonwebtoken** - Generación y verificación de JWT
- **bcryptjs** - Hash de contraseñas
- **dotenv** - Gestión de variables de entorno
- **cors** - Habilitación de CORS

---

## 📦 Instalación Local

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/diegobeteta24/Tareas-Desarrollo-Web.git
   cd Tareas-Desarrollo-Web
   git checkout jwt
   cd JWT
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   
   Crea un archivo `.env` en la raíz del proyecto (puedes copiar `.env.example`):
   ```env
   PORT=3000
   JWT_SECRET=tu_clave_secreta_super_segura_cambiala_en_produccion
   ```

4. **Iniciar el servidor:**
   ```bash
   npm start
   ```
   
   Para desarrollo con auto-recarga:
   ```bash
   npm run dev
   ```

5. **Verificar que el servidor esté corriendo:**
   
   Abre tu navegador en `http://localhost:3000`

---

## 📚 Documentación de Endpoints

### Base URL
- **Local:** `http://localhost:3000`
- **Producción:** `https://tareas-desarrollo-web-1.onrender.com`

---

### 🔓 Endpoints Públicos

#### 1. Raíz de la API
```http
GET /
```

**Descripción:** Información general de la API.

**Respuesta Exitosa (200):**
```json
{
  "success": true,
  "message": "API REST con autenticación JWT - Hoja de Trabajo 6",
  "version": "1.0.0",
  "endpoints": {
    "auth": {
      "login": "POST /login"
    },
    "users": {
      "getAll": "GET /users (protegido)",
      "getById": "GET /users/:id",
      "create": "POST /users",
      "update": "PUT /users/:id (protegido)",
      "delete": "DELETE /users/:id (protegido)"
    }
  }
}
```

---

#### 2. Login (Autenticación)
```http
POST /login
```

**Descripción:** Autentica un usuario y devuelve un token JWT válido por 30 segundos.

**Body (JSON):**
```json
{
  "email": "juan@example.com",
  "password": "password123"
}
```

**Respuesta Exitosa (200):**
```json
{
  "success": true,
  "message": "Autenticación exitosa.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": "30s",
  "user": {
    "id": 1,
    "name": "Juan Pérez",
    "email": "juan@example.com"
  }
}
```

**Errores Posibles:**
- `400` - Faltan campos requeridos
- `401` - Credenciales inválidas

**Usuarios de Prueba:**
```
Email: juan@example.com | Password: password123
Email: maria@example.com | Password: password123
Email: carlos@example.com | Password: password123
```

---

#### 3. Obtener Usuario por ID
```http
GET /users/:id
```

**Descripción:** Obtiene la información de un usuario específico.

**Parámetros de URL:**
- `id` (number) - ID del usuario

**Ejemplo de Solicitud:**
```http
GET /users/1
```

**Respuesta Exitosa (200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Juan Pérez",
    "email": "juan@example.com"
  }
}
```

**Errores Posibles:**
- `404` - Usuario no encontrado

---

#### 4. Crear Usuario
```http
POST /users
```

**Descripción:** Crea un nuevo usuario en el sistema.

**Body (JSON):**
```json
{
  "name": "Ana Martínez",
  "email": "ana@example.com",
  "password": "password123"
}
```

**Respuesta Exitosa (201):**
```json
{
  "success": true,
  "message": "Usuario creado exitosamente.",
  "data": {
    "id": 4,
    "name": "Ana Martínez",
    "email": "ana@example.com"
  }
}
```

**Errores Posibles:**
- `400` - Faltan campos requeridos

---

### 🔒 Endpoints Protegidos (Requieren JWT)

Para acceder a estos endpoints, debes incluir el token JWT en el header `Authorization`:

```
Authorization: Bearer <tu_token_jwt>
```

---

#### 5. Listar Todos los Usuarios
```http
GET /users
```

**Descripción:** Obtiene la lista de todos los usuarios registrados. **Requiere autenticación.**

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Respuesta Exitosa (200):**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "name": "Juan Pérez",
      "email": "juan@example.com"
    },
    {
      "id": 2,
      "name": "María García",
      "email": "maria@example.com"
    },
    {
      "id": 3,
      "name": "Carlos López",
      "email": "carlos@example.com"
    }
  ]
}
```

**Errores Posibles:**
- `401` - Token no proporcionado o expirado
- `403` - Token inválido

---

#### 6. Actualizar Usuario
```http
PUT /users/:id
```

**Descripción:** Actualiza la información de un usuario existente. **Requiere autenticación.**

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Parámetros de URL:**
- `id` (number) - ID del usuario a actualizar

**Body (JSON) - Todos los campos son opcionales:**
```json
{
  "name": "Juan Pérez Actualizado",
  "email": "juan.nuevo@example.com",
  "password": "newpassword456"
}
```

**Ejemplo de Solicitud:**
```http
PUT /users/1
```

**Respuesta Exitosa (200):**
```json
{
  "success": true,
  "message": "Usuario actualizado exitosamente.",
  "data": {
    "id": 1,
    "name": "Juan Pérez Actualizado",
    "email": "juan.nuevo@example.com"
  }
}
```

**Errores Posibles:**
- `401` - Token no proporcionado o expirado
- `403` - Token inválido
- `404` - Usuario no encontrado

---

#### 7. Eliminar Usuario
```http
DELETE /users/:id
```

**Descripción:** Elimina un usuario del sistema. **Requiere autenticación.**

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Parámetros de URL:**
- `id` (number) - ID del usuario a eliminar

**Ejemplo de Solicitud:**
```http
DELETE /users/3
```

**Respuesta Exitosa (200):**
```json
{
  "success": true,
  "message": "Usuario eliminado exitosamente.",
  "data": {
    "id": 3,
    "name": "Carlos López",
    "email": "carlos@example.com"
  }
}
```

**Errores Posibles:**
- `401` - Token no proporcionado o expirado
- `403` - Token inválido
- `404` - Usuario no encontrado

---

## 🧪 Ejemplos de Uso con cURL

### Usando la API en Producción (Render)

#### 1. Login y obtener token
```bash
curl -X POST https://tareas-desarrollo-web-1.onrender.com/login \
  -H "Content-Type: application/json" \
  -d '{"email":"juan@example.com","password":"password123"}'
```

#### 2. Listar usuarios (con token)
```bash
curl -X GET https://tareas-desarrollo-web-1.onrender.com/users \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

#### 3. Actualizar usuario (con token)
```bash
curl -X PUT https://tareas-desarrollo-web-1.onrender.com/users/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -H "Content-Type: application/json" \
  -d '{"name":"Nuevo Nombre"}'
```

#### 4. Eliminar usuario (con token)
```bash
curl -X DELETE https://tareas-desarrollo-web-1.onrender.com/users/3 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

### Usando la API Localmente

#### 1. Login y obtener token
```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"juan@example.com","password":"password123"}'
```

#### 2. Listar usuarios (con token)
```bash
curl -X GET http://localhost:3000/users \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

---

## 🔐 Seguridad

- **JWT Secret:** Asegúrate de cambiar la clave secreta en producción
- **Expiración de tokens:** Los tokens expiran en 30 segundos
- **Contraseñas:** Todas las contraseñas se almacenan hasheadas con bcrypt
- **Variables de entorno:** Información sensible se maneja mediante `.env`

---

## 📁 Estructura del Proyecto

```
JWT/
├── middleware/
│   └── authMiddleware.js    # Middleware de autenticación JWT
├── models/
│   └── userModel.js          # Modelo de datos de usuarios
├── routes/
│   ├── authRoutes.js         # Rutas de autenticación
│   └── userRoutes.js         # Rutas de usuarios
├── .env                      # Variables de entorno (no subir a git)
├── .env.example              # Ejemplo de variables de entorno
├── .gitignore                # Archivos ignorados por git
├── package.json              # Dependencias y scripts
├── server.js                 # Archivo principal del servidor
└── README.md                 # Este archivo
```

---

## 🚀 Despliegue en Render

### Pasos para desplegar:

1. **Crear cuenta en Render:** [https://render.com](https://render.com)

2. **Crear un nuevo Web Service:**
   - Click en "New +" → "Web Service"
   - Conecta tu cuenta de GitHub si aún no lo has hecho
   - Selecciona el repositorio: `diegobeteta24/Tareas-Desarrollo-Web`
   - Selecciona la rama: `jwt`
   - Root Directory: `JWT` (muy importante para que encuentre los archivos)

3. **Configurar el servicio:**
   - **Name:** `jwt-auth-api-diegobeteta` (o el nombre que prefieras)
   - **Region:** Oregon (US West) - Recomendado para mejor rendimiento
   - **Branch:** `jwt`
   - **Root Directory:** `JWT`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free

4. **Variables de entorno (Environment Variables):**
   - Click en "Advanced" o ve a "Environment" después de crear
   - Agregar:
     - **Key:** `JWT_SECRET`
     - **Value:** `mi_clave_secreta_jwt_2025_super_segura` (o cualquier clave segura)
   - **Nota:** `PORT` no es necesario, Render lo asigna automáticamente

5. **Desplegar:**
   - Click en "Create Web Service"
   - Esperar 5-10 minutos mientras Render construye y despliega
   - Una vez completado, copia la URL generada (ejemplo: `https://jwt-auth-api-diegobeteta.onrender.com`)
   - Actualiza la sección "URL de la API Desplegada" en este README

6. **Verificar el despliegue:**
   - Visita `https://tu-url.onrender.com` en el navegador
   - Deberías ver la información de la API
   - Prueba el endpoint `/login` con Postman o Thunder Client

### ⚠️ Nota sobre el Free Tier de Render
- Las aplicaciones gratuitas se duermen después de 15 minutos de inactividad
- La primera solicitud después de dormirse puede tardar 30-60 segundos
- Es completamente normal y no afecta la funcionalidad

---

## 📝 Notas Importantes

- **Token de 30 segundos:** El token JWT expira en 30 segundos. Si recibes un error 401 con mensaje "Token expirado", debes hacer login nuevamente.

- **Datos en memoria:** Esta API utiliza un array en memoria para almacenar usuarios. Los datos se perderán cuando el servidor se reinicie. En producción, deberías usar una base de datos.

- **Usuarios de prueba:** Se incluyen 3 usuarios de prueba. Todos tienen la contraseña `password123`.

---

## 👨‍💻 Autor

**Diego Beteta García**  
**Carnet:** 9490-22-12878  
**Hoja de Trabajo 6 - Autenticación con JWT**

---

## 📄 Licencia

ISC
