import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Portal de Cursos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            
            {/* Dropdown de cursos */}
            <NavDropdown title="Cursos" id="cursos-dropdown" align="end" menuVariant="dark">
              <NavDropdown.Item as={Link} to="/bdd2">Base de Datos II</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/compiladores">Compiladores</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/analisis-sistemas">Análisis de Sistemas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sistemas-operativos">Sistemas Operativos II</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/arquitectura">Arquitectura de Computadoras</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
