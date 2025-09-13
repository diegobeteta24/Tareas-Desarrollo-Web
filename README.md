# Portal de Cursos – React + Bootstrap (Vite)

Sitio informativo sobre cursos finalizados de la carrera. Construido con React, React Router y Bootstrap.

## Datos del equipo

- Diego Beteta García – 9490-22-12878
- Sergio Enrique Sánchez Sánchez – 9490-21-1077

## Demo en producción (Netlify)

Deploy: [https://TU-SITIO-NETLIFY.netlify.app](https://tarea2dw25.netlify.app/)

## Requisitos cubiertos

- Página de Inicio con resumen, carrusel, cards de cursos y navbar/footer.
- Páginas de Cursos (5): BDD II, Compiladores, Análisis de Sistemas, Sistemas Operativos II, Arquitectura.
- Componentes Bootstrap: Navbar, Carousel, Card, Table (responsive), Accordion, ListGroup, Footer.
- React Router para navegación SPA.
- Diseño responsivo con utilidades de Bootstrap.

## Scripts

- Desarrollo: `npm run dev`
- Lint: `npm run lint`
- Build producción: `npm run build`
- Preview build: `npm run preview`

## Cómo correr localmente

1) Requisitos: Node.js 18+ (o 20+).  
2) Instalar dependencias: `npm install`  
3) Levantar dev server: `npm run dev` y abrir la URL mostrada (por defecto http://localhost:5173/).

## Despliegue en Netlify

1) Crear sitio nuevo desde Netlify vinculando este repositorio.  
2) Build command: `npm run build`  
3) Publish directory: `dist`  
4) Para SPA, asegurar redirección `/*` -> `/index.html` (ver `netlify.toml`).
