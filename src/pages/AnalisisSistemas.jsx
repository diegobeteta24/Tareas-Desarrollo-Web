import { Container, Table, Accordion, ListGroup } from "react-bootstrap";

export default function AnalisisSistemas() {
  return (
    <Container className="mt-4">
      <h2>Análisis de Sistemas</h2>
      <p>
        Este curso se centra en metodologías para analizar, modelar y documentar
        sistemas de información, asegurando el entendimiento de requisitos y procesos.
      </p>

      <h3>Clases destacadas</h3>
      <Accordion defaultActiveKey="0" className="mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Clase 1: Recolección de Requisitos</Accordion.Header>
          <Accordion.Body>
            Técnicas de entrevistas, encuestas y observación directa.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Clase 2: Modelado UML</Accordion.Header>
          <Accordion.Body>
            Diagramas de casos de uso, clases y secuencia.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Clase 3: Análisis de Procesos</Accordion.Header>
          <Accordion.Body>
            Uso de diagramas de flujo y BPMN para entender procesos actuales.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Clase 4: Diseño de Sistemas</Accordion.Header>
          <Accordion.Body>
            Propuestas de mejora y documentación técnica.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Clase 5: Validación de Requisitos</Accordion.Header>
          <Accordion.Body>
            Validación con stakeholders y ajuste de especificaciones.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h3>Comparación de Metodologías</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Metodología</th>
            <th>Ventaja</th>
            <th>Desventaja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cascada</td>
            <td>Claridad en fases</td>
            <td>Poco flexible a cambios</td>
          </tr>
          <tr>
            <td>Ágil</td>
            <td>Adaptabilidad</td>
            <td>Requiere compromiso constante</td>
          </tr>
        </tbody>
      </Table>

      <h3>Recursos adicionales</h3>
      <ListGroup>
        <ListGroup.Item>Guía de UML 2.5</ListGroup.Item>
        <ListGroup.Item>Libro: Análisis y Diseño de Sistemas</ListGroup.Item>
        <ListGroup.Item>Plantillas de casos de uso</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
