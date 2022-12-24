import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styling/home.css";
const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Impuls Gaming</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="#home">Home</Link>
          <Link to="#features" className="mx-4">
            Features
          </Link>
          <Link to="#pricing" className="mr-4">
            Pricing
          </Link>
          <Link to={``} className="join-member px-3 py-1">
            JOIN
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
