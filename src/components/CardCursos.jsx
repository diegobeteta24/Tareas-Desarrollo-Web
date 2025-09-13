import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardCursos({ title, description, link }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button as={Link} to={link} variant="primary">Ver Curso</Button>
      </Card.Body>
    </Card>
  );
}
