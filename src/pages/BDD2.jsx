import { Container, Table, Accordion, ListGroup } from "react-bootstrap";

export default function BDD2() {
  return (
    <Container className="mt-4">
      <h2>Base de Datos II</h2>
      <p>En este curso se profundiza en conceptos avanzados de bases de datos.</p>

      <h3>Clases destacadas</h3>
      <Accordion defaultActiveKey="0" className="mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Clase 1: Normalización Avanzada</Accordion.Header>
          <Accordion.Body>Se estudiaron formas normales y cómo evitar redundancias.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Clase 2: Procedimientos Almacenados</Accordion.Header>
          <Accordion.Body>Introducción a PL/SQL y T-SQL.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Clase 3: Optimización de Consultas</Accordion.Header>
          <Accordion.Body>Uso de índices y planes de ejecución.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Clase 4: Replicación y Particionamiento</Accordion.Header>
          <Accordion.Body>Estrategias de escalabilidad.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Clase 5: Seguridad en BD</Accordion.Header>
          <Accordion.Body>Gestión de roles, usuarios y cifrado.</Accordion.Body>
        </Accordion.Item>
      </Accordion>

  <h3>Comparación de Sistemas</h3>
  <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Característica</th>
            <th>Oracle</th>
            <th>SQL Server</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Procedimientos almacenados</td>
            <td>PL/SQL</td>
            <td>T-SQL</td>
          </tr>
          <tr>
            <td>Soporte a replicación</td>
            <td>Avanzado</td>
            <td>Limitado</td>
          </tr>
          <tr>
            <td>Optimización automática</td>
            <td>Sí</td>
            <td>Parcial</td>
          </tr>
        </tbody>
      </Table>

      <h3>Recursos adicionales</h3>
      <ListGroup>
        <ListGroup.Item>Documentación oficial de Oracle</ListGroup.Item>
        <ListGroup.Item>Documentación oficial de SQL Server</ListGroup.Item>
        <ListGroup.Item>Artículos de investigación en bases distribuidas</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
