import { Container, Table, Accordion, ListGroup } from "react-bootstrap";

export default function SistemasOperativos() {
  return (
    <Container className="mt-4">
      <h2>Sistemas Operativos II</h2>
      <p>
        Este curso explora en profundidad los conceptos de concurrencia, manejo
        de procesos, memoria y sistemas distribuidos.
      </p>

      <h3>Clases destacadas</h3>
      <Accordion defaultActiveKey="0" className="mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Clase 1: Procesos e Hilos</Accordion.Header>
          <Accordion.Body>
            Conceptos de multitarea y diferencias entre procesos e hilos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Clase 2: Sincronización</Accordion.Header>
          <Accordion.Body>
            Problema de la sección crítica y uso de semáforos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Clase 3: Deadlocks</Accordion.Header>
          <Accordion.Body>
            Condiciones de interbloqueo y estrategias de prevención.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Clase 4: Gestión de Memoria</Accordion.Header>
          <Accordion.Body>
            Segmentación, paginación y memoria virtual.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Clase 5: Sistemas Distribuidos</Accordion.Header>
          <Accordion.Body>
            Comunicación entre procesos y sistemas de archivos distribuidos.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

  <h3>Comparación de Técnicas</h3>
  <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Técnica</th>
            <th>Ventaja</th>
            <th>Desventaja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paginación</td>
            <td>Mejor uso de memoria</td>
            <td>Fragmentación interna</td>
          </tr>
          <tr>
            <td>Segmentación</td>
            <td>Más natural para el programador</td>
            <td>Fragmentación externa</td>
          </tr>
        </tbody>
      </Table>

      <h3>Recursos adicionales</h3>
      <ListGroup>
        <ListGroup.Item>Libro: Modern Operating Systems</ListGroup.Item>
        <ListGroup.Item>Artículos sobre concurrencia</ListGroup.Item>
        <ListGroup.Item>Documentación de Linux Kernel</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
