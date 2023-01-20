import { Container, Navbar, Nav } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "../styling/home.css";
import "..";
import logo from "../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
const NavigationBar = () => {
  return (
    <Navbar
      key="md"
      expand="md"
      variant="dark"
      className="my-0 py-2 px-5 navBackground myNav"
    >
      <Container fluid className="my-0 py-0 position-relative">
        <Navbar.Brand className="navbarBrand  d-none d-md-block  my-0 py-0">
          <img className="logo-img" src={logo} alt="" />
        </Navbar.Brand>

        <Nav className="me-auto text-size-md">
          <Link to="/" className="textColor mr-4 ">
            Home
          </Link>
          <Link to="/" className="textColor mr-4 ">
            Tournaments
          </Link>
          <Link to="#" className="textColor">
            League
          </Link>
          <Link to="" className="mx-4 textColor">
            Features
          </Link>
          <Link to="/giftcard" className="mr-4 textColor">
            Gift
          </Link>
          <Link to="/backoffice" className="link-none-deco mr-4 ">
            Backoffice
          </Link>
          <Link to={"/sign-up"} className="join-member px-5 py-1 ">
            JOIN
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
