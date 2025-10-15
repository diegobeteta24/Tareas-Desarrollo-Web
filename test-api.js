// Script de prueba para la API JWT
// Ejecutar con: node test-api.js (asegúrate de que el servidor esté corriendo)

const baseURL = 'http://localhost:3000';

console.log('🧪 Iniciando pruebas de la API JWT...\n');

// Función para hacer peticiones
async function makeRequest(method, endpoint, body = null, token = null) {
  const url = `${baseURL}${endpoint}`;
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error('❌ Error en la petición:', error.message);
    return null;
  }
}

// Función para esperar
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Ejecutar pruebas
async function runTests() {
  try {
    // Test 1: Verificar servidor
    console.log('1️⃣ Test: Verificar que el servidor esté corriendo');
    const test1 = await makeRequest('GET', '/');
    if (test1 && test1.status === 200) {
      console.log('✅ Servidor funcionando correctamente\n');
    } else {
      console.log('❌ Error al conectar con el servidor\n');
      return;
    }

    // Test 2: Login
    console.log('2️⃣ Test: Login y obtener token JWT');
    const test2 = await makeRequest('POST', '/login', {
      email: 'juan@example.com',
      password: 'password123'
    });
    
    if (test2 && test2.status === 200 && test2.data.token) {
      console.log('✅ Login exitoso');
      console.log('   Token obtenido:', test2.data.token.substring(0, 30) + '...');
      console.log('   Expira en:', test2.data.expiresIn, '\n');
      
      const token = test2.data.token;

      // Test 3: Listar usuarios con token
      console.log('3️⃣ Test: Listar usuarios (con token válido)');
      const test3 = await makeRequest('GET', '/users', null, token);
      
      if (test3 && test3.status === 200) {
        console.log('✅ Usuarios obtenidos correctamente');
        console.log('   Cantidad de usuarios:', test3.data.count, '\n');
      } else {
        console.log('❌ Error al listar usuarios\n');
      }

      // Test 4: Actualizar usuario con token
      console.log('4️⃣ Test: Actualizar usuario (con token válido)');
      const test4 = await makeRequest('PUT', '/users/1', {
        name: 'Juan Pérez Actualizado'
      }, token);
      
      if (test4 && test4.status === 200) {
        console.log('✅ Usuario actualizado correctamente');
        console.log('   Nuevo nombre:', test4.data.data.name, '\n');
      } else {
        console.log('❌ Error al actualizar usuario\n');
      }

      // Test 5: Esperar a que el token expire
      console.log('5️⃣ Test: Esperar 31 segundos a que el token expire...');
      console.log('   (El token dura 30 segundos)');
      await wait(31000);
      console.log('   ⏰ Han pasado 31 segundos\n');

      // Test 6: Intentar listar usuarios con token expirado
      console.log('6️⃣ Test: Intentar listar usuarios con token expirado');
      const test6 = await makeRequest('GET', '/users', null, token);
      
      if (test6 && test6.status === 401) {
        console.log('✅ Token expirado detectado correctamente');
        console.log('   Mensaje:', test6.data.message, '\n');
      } else {
        console.log('❌ El token debería haber expirado\n');
      }

      // Test 7: Intentar acceder sin token
      console.log('7️⃣ Test: Intentar acceder a ruta protegida sin token');
      const test7 = await makeRequest('GET', '/users');
      
      if (test7 && test7.status === 401) {
        console.log('✅ Acceso denegado correctamente sin token');
        console.log('   Mensaje:', test7.data.message, '\n');
      } else {
        console.log('❌ Debería denegar acceso sin token\n');
      }

      console.log('🎉 ¡Todas las pruebas completadas!');
      console.log('📝 Resumen:');
      console.log('   - Autenticación JWT funcionando correctamente');
      console.log('   - Tokens expiran en 30 segundos');
      console.log('   - Endpoints protegidos verifican el token');
      console.log('   - Sistema de seguridad operativo ✅');

    } else {
      console.log('❌ Error en el login\n');
    }

  } catch (error) {
    console.error('❌ Error durante las pruebas:', error);
  }
}

// Ejecutar las pruebas
runTests();
