import { Carousel } from "react-bootstrap";

export default function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://picsum.photos/1200/400?1" alt="Cursos" />
        <Carousel.Caption>
          <h3 className="text-light">Bienvenido al Portal</h3>
          <p className="text-light">Explora los cursos más destacados de la carrera.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://picsum.photos/1200/400?2" alt="Estudio" />
        <Carousel.Caption>
          <h3 className="text-light">Cursos Prácticos</h3>
          <p className="text-light">Material con tablas, listas y resúmenes.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
