import { Container, Accordion, Table, ListGroup } from "react-bootstrap";

function Arquitectura() {
  return (
    <Container className="mt-4">
      <h2>Arquitectura de Computadoras</h2>
      <p>
        Este curso se centra en el estudio de la organización interna y el
        funcionamiento del hardware de un sistema de cómputo, abordando desde
        el nivel de compuertas lógicas hasta los procesadores modernos.
      </p>

      {/* Puntos clave */}
      <h4>Puntos Clave</h4>
      <ListGroup className="mb-4">
        <ListGroup.Item>Modelo de Von Neumann</ListGroup.Item>
        <ListGroup.Item>Jerarquía de Memoria</ListGroup.Item>
        <ListGroup.Item>Conjuntos de Instrucciones (ISA)</ListGroup.Item>
        <ListGroup.Item>Procesamiento Paralelo</ListGroup.Item>
        <ListGroup.Item>Arquitecturas RISC vs CISC</ListGroup.Item>
      </ListGroup>

      {/* Accordion con clases */}
      <h4>Clases Principales</h4>
      <Accordion defaultActiveKey="0" className="mb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Clase 1: Introducción a la Arquitectura</Accordion.Header>
          <Accordion.Body>
            Conceptos básicos de arquitectura y organización de computadores.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Clase 2: CPU y Registros</Accordion.Header>
          <Accordion.Body>
            Estructura de la Unidad Central de Procesamiento y tipos de registros.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Clase 3: Jerarquía de Memoria</Accordion.Header>
          <Accordion.Body>
            Memoria caché, RAM, almacenamiento secundario y su importancia en el
            rendimiento.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Clase 4: Pipelining</Accordion.Header>
          <Accordion.Body>
            Técnicas de segmentación de instrucciones para mejorar el
            rendimiento.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Clase 5: Procesamiento Paralelo</Accordion.Header>
          <Accordion.Body>
            Multiprocesadores, multinúcleos y arquitecturas SIMD/MIMD.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Tabla resumen */}
      <h4>Comparación RISC vs CISC</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Característica</th>
            <th>RISC</th>
            <th>CISC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Instrucciones</td>
            <td>Pocas y simples</td>
            <td>Muchas y complejas</td>
          </tr>
          <tr>
            <td>Ciclos por instrucción</td>
            <td>1 ciclo (generalmente)</td>
            <td>Varios ciclos</td>
          </tr>
          <tr>
            <td>Ejemplos</td>
            <td>ARM, MIPS</td>
            <td>x86, VAX</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Arquitectura;
