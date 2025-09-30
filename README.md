# API de Usuarios (Node.js + Express)

API REST para gestionar usuarios con validación de DPI (único). Implementa crear, listar, actualizar y eliminar usuarios. Almacenamiento en memoria para fines educativos.

## Endpoints

- POST /users
  - Crea un nuevo usuario.
  - Body (JSON): { dpi: string, name: string, email: string, password: string }
  - Reglas:
    - El `dpi` debe ser único. Si ya existe, responde 409.
  - Respuestas:
    - 201 Created: usuario creado.
    - 400 Bad Request: faltan campos requeridos.
    - 409 Conflict: DPI duplicado.
  - Ejemplo de solicitud:
    - PowerShell
      ```powershell
      Invoke-RestMethod -Method Post -Uri http://localhost:3000/users -ContentType "application/json" -Body (@{dpi="123";name="Alice";email="a@example.com";password="pass"} | ConvertTo-Json)
      ```
    - curl
      ```bash
      curl -X POST http://localhost:3000/users \
        -H "Content-Type: application/json" \
        -d '{"dpi":"123","name":"Alice","email":"a@example.com","password":"pass"}'
      ```
  - Ejemplo de respuesta 201:
    ```json
    {
      "dpi": "123",
      "name": "Alice",
      "email": "a@example.com",
      "password": "pass"
    }
    ```

- GET /users
  - Lista todos los usuarios almacenados.
  - Respuestas: 200 OK con arreglo de usuarios.
  - Ejemplo de respuesta 200:
    ```json
    [
      { "dpi": "123", "name": "Alice", "email": "a@example.com", "password": "pass" }
    ]
    ```

- PUT /users/:dpi
  - Actualiza un usuario existente identificado por `:dpi` (DPI actual del usuario).
  - Body (JSON): puede incluir `name`, `email`, `password` y opcionalmente `dpi` para cambiarlo.
  - Reglas:
    - Debe existir el usuario con el `:dpi` dado; si no, 404.
    - Si se intenta cambiar el DPI a uno ya registrado por otro usuario, responde 409.
  - Respuestas: 200 OK con el usuario actualizado; 404 Not Found; 409 Conflict.
  - Ejemplo de solicitud (cambiar nombre y DPI):
    ```bash
    curl -X PUT http://localhost:3000/users/123 \
      -H "Content-Type: application/json" \
      -d '{"name":"Alice Updated","dpi":"789"}'
    ```
  - Ejemplo de respuesta 200:
    ```json
    { "dpi": "789", "name": "Alice Updated", "email": "a@example.com", "password": "pass" }
    ```

- DELETE /users/:dpi
  - Elimina un usuario por DPI.
  - Respuestas: 200 OK con el usuario eliminado; 404 Not Found si no existe.
  - Ejemplo:
    ```bash
    curl -X DELETE http://localhost:3000/users/789
    ```
  - Respuesta 200:
    ```json
    { "message": "User deleted", "user": { "dpi": "789", "name": "Alice Updated", "email": "a@example.com", "password": "pass" } }
    ```

## Correr localmente

Requisitos: Node.js 18+.

1. Instalar dependencias:

```powershell
npm install
```

2. Levantar el servidor en desarrollo:

```powershell
npm run dev
```

El servidor estará en http://localhost:3000

3. Correr pruebas:

```powershell
npm test
```

## Estructura del proyecto

- `src/app.js`: Aplicación Express, rutas y almacenamiento en memoria.
- `src/server.js`: Punto de entrada del servidor.
- `tests/users.test.js`: Pruebas con Jest + Supertest.
- `jest.config.json`: Configuración de Jest.

## Despliegue en Render

1. Crear un repositorio en Git y subir el código.
2. En Render, crear un nuevo servicio Web (Runtime: Node).
3. Configuración sugerida:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Node Version: 18+
4. Render asignará un `PORT` automáticamente; la app ya lo usa (`process.env.PORT`).
5. Una vez desplegado, actualiza la URL aquí (sección siguiente).

## Repositorio y URL desplegada

- Repositorio (rama de entrega): https://github.com/diegobeteta24/Tareas-Desarrollo-Web/tree/feature/users-api
- URL de producción (Render): https://users-api-jivr.onrender.com/

## Notas

- El almacenamiento es en memoria (se pierde al reiniciar). Para persistencia, integra una base de datos (por ej. PostgreSQL). 
- El proyecto incluye middleware `cors` y `morgan` para CORS y logging.
- Seguridad: en un entorno real, nunca retornes ni guardes contraseñas en texto plano; usa hashing (ej. bcrypt).

## Autoría y Licencia

- Autor: Diego Antonio Beteta García
- Carnet: 9490-22-12878

Uso educativo. Puedes modificar libremente este proyecto.