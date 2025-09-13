import { Container, Table, Accordion, ListGroup } from "react-bootstrap";

export default function Compiladores() {
  return (
    <Container className="mt-4">
      <h2>Compiladores</h2>
      <p>
        Este curso aborda la construcción de compiladores, desde el análisis léxico
        hasta la generación de código intermedio y optimización.
      </p>

      <h3>Clases destacadas</h3>
      <Accordion defaultActiveKey="0" className="mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Clase 1: Análisis Léxico</Accordion.Header>
          <Accordion.Body>
            Uso de autómatas finitos para el reconocimiento de tokens.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Clase 2: Análisis Sintáctico</Accordion.Header>
          <Accordion.Body>
            Métodos descendentes y ascendentes para construcción de árboles.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Clase 3: Análisis Semántico</Accordion.Header>
          <Accordion.Body>
            Verificación de tipos, alcance de variables y reglas semánticas.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Clase 4: Generación de Código</Accordion.Header>
          <Accordion.Body>
            Traducción de expresiones y estructuras de control.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Clase 5: Optimización</Accordion.Header>
          <Accordion.Body>
            Técnicas para mejorar la eficiencia del código generado.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

  <h3>Comparación de Enfoques</h3>
  <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Enfoque</th>
            <th>Ventaja</th>
            <th>Desventaja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Top-Down</td>
            <td>Más intuitivo</td>
            <td>No maneja todas las gramáticas</td>
          </tr>
          <tr>
            <td>Bottom-Up</td>
            <td>Más poderoso</td>
            <td>Implementación más compleja</td>
          </tr>
        </tbody>
      </Table>

      <h3>Recursos adicionales</h3>
      <ListGroup>
        <ListGroup.Item>Libro: Compilers – Principles, Techniques & Tools</ListGroup.Item>
        <ListGroup.Item>Implementación con Flex y Bison</ListGroup.Item>
        <ListGroup.Item>Documentación sobre gramáticas libres de contexto</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
