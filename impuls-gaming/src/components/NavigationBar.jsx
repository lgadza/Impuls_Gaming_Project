import { Container, Navbar, Nav } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "../styling/home.css";
import logo from "../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import { useState } from "react";
const NavigationBar = () => {
  const [hide, setHide] = useState(false);
  const handleHide = () => {
    hide ? setHide(false) : setHide(true);
    console.log("Clicked");
  };
  console.log(hide);
  return (
    <Navbar
      key="md"
      expand="md"
      variant="dark"
      className="my-0 py-2 px-5 navBackground myNav"
    >
      <Container fluid className="my-0 py-0 position-relative">
        <Navbar.Brand className="navbarBrand  d-md-block  my-0 py-0">
          <img className="logo-img" src={logo} alt="" />
          <span className="textColor3 d-none navbarBrandName">Impuls</span>
        </Navbar.Brand>
        <Icon.List
          onClick={handleHide}
          className="d-md-none ml-auto"
          size={20}
        />

        <Nav
          className={`${
            hide ? "me-auto  text-size-md" : "me-auto  text-size-md  d-none  "
          }`}
        >
          <Link to="/" className="textColor mr-4 ">
            Home
          </Link>
          <Link to="/" className="textColor mr-4 ">
            Tournaments
          </Link>
          <Link to="#" className="textColor">
            League
          </Link>
          <Link to="" className="mr-4 textColor">
            Features
          </Link>
          <Link to="" className="mr-4 textColor">
            Blog
          </Link>
          <Link to="/backoffice" className="link-none-deco mr-4 ">
            Backoffice
          </Link>
          <Link to={"/sign-up"} className="join-member  px-5 py-1 ">
            JOIN
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
