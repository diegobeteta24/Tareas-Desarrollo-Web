// ----- UTILIDADES -----
function $(selector, scope = document) {
  return scope.querySelector(selector);
}
function $all(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}
function setYear() {
  const y = new Date().getFullYear();
  const span = document.getElementById('year');
  if (span) span.textContent = y;
}

// Fisher–Yates shuffle
function shuffle(arr) {
  const a = arr.slice(); // no mutar original
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ----- ITINERARIOS -----
function showItinerary(tableId) {
  // Ocultar todas
  $all('.itinerary-table').forEach(t => {
    t.style.display = 'none'; // requerido: display none/block
  });
  // Mostrar seleccionada
  const target = document.getElementById(tableId);
  if (target) target.style.display = 'table'; // mostrar como tabla

  // Estado visual de botones
  const map = {
    'tabla-playa': 'btn-playa',
    'tabla-montana': 'btn-montana',
    'tabla-cultural': 'btn-cultural'
  };
  Object.values(map).forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) btn.classList.remove('active');
  });
  const activeBtn = document.getElementById(map[tableId]);
  if (activeBtn) activeBtn.classList.add('active');
}

// ----- COMENTARIOS -----

// Al menos 10 nombres
const NOMBRES = [
  "María López","Carlos Pérez","Ana Gómez","Luis Hernández","Sofía Castillo",
  "Jorge Ramírez","Daniela Cruz","Fernando Méndez","Paola Ríos","Ricardo Ortiz",
  "Valeria Soto","Diego Campos"
];

// Al menos 10 comentarios
const COMENTARIOS = [
  "El itinerario estuvo muy bien equilibrado entre descanso y actividad.",
  "La guía fue súper amable y conocedora de la zona.",
  "Me encantó el almuerzo típico, ¡qué sabor!",
  "Los tiempos fueron exactos y nunca sentimos prisa.",
  "La caminata tuvo vistas increíbles, valió totalmente la pena.",
  "La organización fue impecable desde el inicio.",
  "Repetiría la experiencia con mis amigos.",
  "Agradezco que consideraran opciones vegetarianas.",
  "Excelente relación calidad-precio.",
  "Los horarios están perfectos para aprovechar la luz del día.",
  "El transporte fue cómodo y puntual."
];

// Crea tarjeta de comentario (Bootstrap card)
function createCommentCard(nombre, comentario) {
  const col = document.createElement('div');
  col.className = 'col-12 col-md-6 col-lg-4';

  const card = document.createElement('div');
  card.className = 'card comment-card';

  const body = document.createElement('div');
  body.className = 'card-body';

  const header = document.createElement('div');
  header.className = 'd-flex align-items-center gap-3 mb-2';

  const avatar = document.createElement('div');
  avatar.className = 'comment-avatar';
  avatar.textContent = nombre.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();

  const nameEl = document.createElement('div');
  nameEl.className = 'comment-name';
  nameEl.textContent = nombre;

  const text = document.createElement('p');
  text.className = 'comment-text mb-0';
  text.textContent = comentario;

  header.appendChild(avatar);
  header.appendChild(nameEl);
  body.appendChild(header);
  body.appendChild(text);
  card.appendChild(body);
  col.appendChild(card);
  return col;
}

// Selecciona 3 nombres y 3 comentarios aleatorios SIN repetir
function renderComments() {
  const cont = document.getElementById('contenedor-comentarios');
  if (!cont) return;

  cont.innerHTML = '';

  const nombresBarajados = shuffle(NOMBRES).slice(0, 3);
  const comentariosBarajados = shuffle(COMENTARIOS).slice(0, 3);

  for (let i = 0; i < 3; i++) {
    const tarjeta = createCommentCard(nombresBarajados[i], comentariosBarajados[i]);
    cont.appendChild(tarjeta);
  }
}

// ----- INICIALIZACIÓN -----
document.addEventListener('DOMContentLoaded', () => {
  setYear();
  // Por defecto mostrar Playa
  showItinerary('tabla-playa');
  // Render inicial de comentarios
  renderComments();

  // Validación y envío de formulario de contacto
  const form = document.getElementById('form-contacto');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Validar campos
      const nombre = form.nombre.value.trim();
      const fecha = form.fecha.value;
      const email = form.email.value.trim();
      const mensaje = form.mensaje.value.trim();
      let valido = true;

      // Validar email con regex simple
      const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        form.email.classList.add('is-invalid');
        valido = false;
      } else {
        form.email.classList.remove('is-invalid');
      }

      // Validar campos vacíos
      if (!nombre || !fecha || !email || !mensaje) {
        valido = false;
      }

      if (valido) {
        // Mostrar modal Bootstrap con datos
        const modalBody = document.getElementById('modalConfirmBody');
        modalBody.innerHTML = `
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Fecha de nacimiento:</strong> ${fecha}</p>
          <p><strong>Correo electrónico:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${mensaje}</p>
        `;
        const modal = new bootstrap.Modal(document.getElementById('modalConfirm'));
        modal.show();
        // Mostrar en consola
        console.log({ nombre, fecha, email, mensaje });
        form.reset();
      }
    });
  }
});
