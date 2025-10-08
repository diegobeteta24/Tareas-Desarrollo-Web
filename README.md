# Sistema de Login y Registro con React y Express

Sistema completo de registro y autenticación de usuarios desarrollado con React para el frontend y Express para el backend. Este proyecto implementa gestión de sesiones mediante Context API, rutas protegidas, y un diseño responsive con Bootstrap 5.

## 👥 Integrantes del Proyecto

- **Diego## 📊 Estado del Deploy

- ✅ **Código subido a GitHub**: Rama `tarea-login-registro`
- ✅ **Deploy en Render**: Desplegado y funcionando
- ✅ **URL de Producción**: [https://tareas-desarrollo-web.onrender.com](https://tareas-desarrollo-web.onrender.com)
- 📦 **Estado**: Activo y operacionalta García** - Carnet: 9490-22-12878
- **Sergio Enrique Sánchez Sánchez** - Carnet: 9490-21-1077

## 🔗 Enlaces del Proyecto

- **Repositorio GitHub**: [https://github.com/diegobeteta24/Tareas-Desarrollo-Web](https://github.com/diegobeteta24/Tareas-Desarrollo-Web)
- **Aplicación en Producción (Render)**: [https://tareas-desarrollo-web.onrender.com](https://tareas-desarrollo-web.onrender.com)
- **API en Producción**: [https://tareas-desarrollo-web.onrender.com/login](https://tareas-desarrollo-web.onrender.com/login)
- **Desarrollo Local (Frontend)**: `http://localhost:3000`
- **Desarrollo Local (Backend)**: `http://localhost:5000`

## 📋 Descripción del Proyecto

Este proyecto fue desarrollado como parte de una tarea académica para implementar un sistema de autenticación completo utilizando tecnologías web modernas. El sistema permite a los usuarios registrarse, iniciar sesión y acceder a contenido protegido mediante gestión de sesiones con React Context API.

## ✨ Características Principales

### Frontend (React)
- ✅ Página de registro con formulario completo (nombre, DPI, email, contraseña)
- ✅ Página de login con autenticación de usuarios
- ✅ Página principal protegida que muestra información del usuario
- ✅ Context API de React para gestión global de sesión
- ✅ Rutas protegidas con componente PrivateRoute
- ✅ Diseño responsive con Bootstrap 5
- ✅ Persistencia de sesión en localStorage
- ✅ Manejo de errores y estados de carga
- ✅ Componentes desarrollados con extensión .jsx

### Backend (Express)
- ✅ Servidor Express con endpoints RESTful
- ✅ Ruta `/register` para registro de usuarios
- ✅ Ruta `/login` para autenticación
- ✅ Validación de email duplicado en el registro
- ✅ Validación de credenciales de usuario
- ✅ Almacenamiento en memoria (array simulado)
- ✅ CORS habilitado para comunicación con frontend
- ✅ Middleware body-parser para procesar JSON

## 📁 Estructura del Proyecto

```
Tarea/
├── client/                    # Frontend React
│   ├── public/
│   │   └── index.html        # HTML principal
│   ├── src/
│   │   ├── components/
│   │   │   └── PrivateRoute.jsx    # Componente para rutas protegidas
│   │   ├── context/
│   │   │   └── AuthContext.js      # Context API para gestión de sesión
│   │   ├── pages/
│   │   │   ├── Register.jsx        # Página de registro
│   │   │   ├── Login.jsx           # Página de login
│   │   │   └── Home.jsx            # Página principal protegida
│   │   ├── App.jsx                 # Componente principal con rutas
│   │   └── index.js                # Punto de entrada de React
│   └── package.json
├── server/
│   └── server.js             # Backend Express con API
├── package.json
└── README.md
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn
- Git

### 1. Clonar el Repositorio

```bash
git clone https://github.com/diegobeteta24/Tareas-Desarrollo-Web.git
cd Tareas-Desarrollo-Web
```

### 2. Instalar Dependencias del Servidor

```bash
npm install
```

### 3. Instalar Dependencias del Cliente

```bash
cd client
npm install
cd ..
```

## ▶️ Ejecución del Proyecto

### Opción 1: Ejecutar Todo con un Solo Comando

```bash
npm run dev
```

Este comando inicia simultáneamente el servidor backend y el cliente React.

### Opción 2: Ejecutar Servidor y Cliente por Separado

**Terminal 1 - Servidor Backend (Puerto 5000):**
```bash
npm run server
```

**Terminal 2 - Cliente React (Puerto 3000):**
```bash
cd client
npm start
```

### Acceder a la Aplicación

Una vez iniciados los servidores:
- **Frontend**: Abre tu navegador en `http://localhost:3000`
- **Backend API**: El servidor estará disponible en `http://localhost:5000`

## 🚀 Despliegue en Render

### Preparación del Proyecto

El proyecto ya está configurado para desplegarse en Render con los siguientes cambios:

1. **Variables de entorno configuradas** para producción
2. **Scripts de build** incluidos en `package.json`
3. **Servidor configurado** para servir archivos estáticos en producción
4. **Puerto dinámico** usando `process.env.PORT`

### Pasos para Desplegar en Render

1. **Sube el código a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Configuración para deploy en Render"
   git branch -M main
   git remote add origin https://github.com/diegobeteta24/Tareas-Desarrollo-Web.git
   git push -u origin main
   ```

2. **Crea un nuevo Web Service en Render**:
   - Ve a [Render Dashboard](https://dashboard.render.com/)
   - Haz clic en "New +" → "Web Service"
   - Conecta tu repositorio de GitHub
   - Selecciona el repositorio `Tareas-Desarrollo-Web`

3. **Configura el Web Service**:
   - **Name**: `sistema-login-registro` (o el nombre que prefieras)
   - **Environment**: `Node`
   - **Region**: `Oregon (US West)` o el más cercano
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

4. **Variables de Entorno** (opcional):
   - `NODE_ENV`: `production`

5. **Deploy**:
   - Haz clic en "Create Web Service"
   - Render automáticamente construirá y desplegará tu aplicación
   - El proceso tomará unos minutos

6. **Accede a tu aplicación**:
   - Una vez completado, Render te dará una URL
   - **URL de este proyecto**: [https://tareas-desarrollo-web.onrender.com](https://tareas-desarrollo-web.onrender.com)
   - La aplicación estará lista para usar

### Notas Importantes para Render

- ⚠️ **Primera carga lenta**: En el plan gratuito, Render pone en "sleep" las aplicaciones inactivas. La primera carga después de inactividad puede tomar 30-50 segundos.
- 💾 **Datos en memoria**: Los usuarios se pierden cuando el servicio se reinicia (esto es esperado con almacenamiento en memoria).
- 🔄 **Actualizaciones automáticas**: Cada push a la rama `main` desplegará automáticamente la nueva versión.

## 📖 Guía de Uso

### 1. Registro de Usuario
1. Accede a `http://localhost:3000` (serás redirigido a `/login`)
2. Haz clic en "Regístrate aquí"
3. Completa el formulario con:
   - Nombre completo
   - DPI (13 dígitos)
   - Email
   - Contraseña (mínimo 6 caracteres)
4. Haz clic en "Registrarse"
5. Serás redirigido automáticamente al login

### 2. Iniciar Sesión
1. Ingresa el email y contraseña registrados
2. Haz clic en "Iniciar Sesión"
3. Serás redirigido a la página principal

### 3. Página Principal
- Visualiza tu información de usuario (nombre, DPI, email, ID)
- Tu nombre aparecerá en la barra de navegación superior
- Puedes cerrar sesión haciendo clic en "Cerrar Sesión"

### 4. Persistencia de Sesión
- La sesión se mantiene activa incluso si recargas la página
- Los datos se almacenan en localStorage del navegador
- Al cerrar sesión, los datos se eliminan

## 🔌 API Endpoints

### URL Base
```
http://localhost:5000
```

### POST /register
Registra un nuevo usuario.

**Body:**
```json
{
  "nombre": "Juan Pérez",
  "dpi": "1234567890123",
  "email": "juan@ejemplo.com",
  "password": "123456"
}
```

**Respuesta exitosa:**
```json
{
  "success": true,
  "message": "Usuario registrado exitosamente"
}
```

### POST /login
Autentica un usuario.

**Body:**
```json
{
  "email": "juan@ejemplo.com",
  "password": "123456"
}
```

**Respuesta exitosa:**
```json
{
  "success": true,
  "message": "Login exitoso",
  "user": {
    "id": 1,
    "nombre": "Juan Pérez",
    "dpi": "1234567890123",
    "email": "juan@ejemplo.com"
  }
}
```

### GET /usuarios
Obtiene la lista de usuarios registrados (para debugging).

## 🧪 Casos de Prueba

### Caso 1: Registro Exitoso
1. Completa todos los campos del formulario de registro
2. Resultado esperado: Mensaje de éxito y redirección a `/login`

### Caso 2: Email Duplicado
1. Intenta registrar un usuario con un email ya existente
2. Resultado esperado: Error "El email ya está registrado"

### Caso 3: Login Exitoso
1. Ingresa credenciales correctas
2. Resultado esperado: Redirección a `/home` con información del usuario

### Caso 4: Login Fallido
1. Ingresa credenciales incorrectas
2. Resultado esperado: Error "Credenciales incorrectas"

### Caso 5: Protección de Rutas
1. Sin autenticación, intenta acceder a `http://localhost:3000/home`
2. Resultado esperado: Redirección automática a `/login`

### Caso 6: Persistencia de Sesión
1. Inicia sesión exitosamente
2. Recarga la página (F5)
3. Resultado esperado: La sesión se mantiene activa

### Caso 7: Cerrar Sesión
1. En la página principal, haz clic en "Cerrar Sesión"
2. Resultado esperado: Redirección a `/login` y eliminación de sesión

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Librería para construir interfaces de usuario
- **React Router DOM 6** - Enrutamiento y navegación
- **Bootstrap 5** - Framework CSS para diseño responsive
- **Axios** - Cliente HTTP para peticiones a la API
- **Context API** - Gestión de estado global

### Backend
- **Node.js** - Entorno de ejecución de JavaScript
- **Express** - Framework web para Node.js
- **CORS** - Middleware para habilitar peticiones cross-origin
- **Body-parser** - Middleware para parsear cuerpos de peticiones JSON

### Herramientas de Desarrollo
- **Create React App** - Configuración inicial del proyecto React
- **React Scripts** - Scripts de desarrollo y construcción
- **Concurrently** - Ejecución simultánea de múltiples comandos npm

## 📝 Notas Importantes

⚠️ **Advertencias de Desarrollo:**
- Los datos se almacenan en **memoria** (array), se perderán al reiniciar el servidor
- Las contraseñas se almacenan en **texto plano** (solo para demostración educativa)
- **NO usar en producción** sin implementar las mejoras de seguridad necesarias

ℹ️ **Configuración:**
- Puerto del servidor backend: **5000**
- Puerto del cliente React: **3000**
- La sesión persiste en **localStorage** del navegador
- CORS está habilitado para permitir comunicación entre cliente y servidor

## 🔮 Mejoras Futuras

Si este proyecto se llevara a producción, se deberían implementar:

- [ ] Base de datos real (MongoDB, PostgreSQL, MySQL)
- [ ] Encriptación de contraseñas con bcrypt
- [ ] Autenticación con tokens JWT
- [ ] Validación robusta en frontend y backend
- [ ] Recuperación de contraseña por email
- [ ] Confirmación de registro por email
- [ ] Rate limiting para prevenir ataques de fuerza bruta
- [ ] HTTPS en producción
- [ ] Variables de entorno para configuración
- [ ] Tests unitarios e integración
- [ ] Logs de seguridad y auditoría
- [ ] Validación de formato de DPI
- [ ] Requisitos de contraseña segura

## � Estado del Deploy

- ✅ **Código subido a GitHub**: Rama `tarea-login-registro`
- ⏳ **Deploy en Render**: Pendiente de configuración
- 📦 **Listo para producción**: Configuración completa

### URL del Proyecto en GitHub

🔗 **Repositorio**: [https://github.com/diegobeteta24/Tareas-Desarrollo-Web](https://github.com/diegobeteta24/Tareas-Desarrollo-Web)  
🌿 **Rama**: `tarea-login-registro`

## �📄 Licencia

Este proyecto fue desarrollado con fines académicos como parte del curso de Desarrollo Web.

## 👨‍💻 Desarrollado Por

**Universidad Mariano Gálvez de Guatemala**  
Curso: Desarrollo Web  
Fecha: Octubre 2025

**Integrantes**:
- Diego Beteta García (9490-22-12878)
- Sergio Enrique Sánchez Sánchez (9490-21-1077)

---

Para cualquier duda o consulta sobre el proyecto, crear un issue en el repositorio de GitHub.
