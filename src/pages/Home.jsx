import Carousel from "../components/Carousel";
import CardCursos from "../components/CardCursos";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Carousel />
      <Container className="mt-4">
        <h2>Bienvenido</h2>
        <p>
          Este portal contiene información detallada sobre los cursos que más me han gustado
          de mi carrera universitaria.
        </p>
        <h2 className="mt-4">Cursos Disponibles</h2>
        <Row>
          <Col md={6} lg={3}><CardCursos title="Base de Datos II" description="Modelado y consultas avanzadas." link="/bdd2" /></Col>
          <Col md={6} lg={3}><CardCursos title="Compiladores" description="Construcción de analizadores y parsers." link="/compiladores" /></Col>
          <Col md={6} lg={3}><CardCursos title="Análisis de Sistemas" description="Modelado y análisis de requisitos." link="/analisis-sistemas" /></Col>
          <Col md={6} lg={3}><CardCursos title="Sistemas Operativos II" description="Procesos, concurrencia y memoria." link="/sistemas-operativos" /></Col>
          <Col md={6} lg={3}><CardCursos title="Arquitectura de Computadoras" description="Organización y funcionamiento del hardware." link="/arquitectura" /></Col>
        </Row>
      </Container>
    </>
  );
}
