import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "../styling/home.css";
import logo from "../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import { useState } from "react";
const NavigationBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar
        key="md"
        expand="md"
        variant="dark"
        className="my-0 py-2 d-none d-lg-block px-5 navBackground myNav"
      >
        <Container fluid className="my-0 py-0 position-relative">
          <Navbar.Brand className="navbarBrand  d-md-block  my-0 py-0">
            <img className="logo-img" src={logo} alt="" />
          </Navbar.Brand>
          <div className="d-flex flex-column me-auto  text-size-md">
            <div className="d-flex ">
              <Icon.List
                onClick={() =>
                  isHidden ? setIsHidden(false) : setIsHidden(true)
                }
                className="d-md-none ml-auto"
                size={20}
              />
            </div>
            <Nav className=" ">
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
            </Nav>
          </div>
          <Link
            to={"/sign-up"}
            className="join-member d-none d-lg-block  px-5 py-1 "
          >
            LogIn
          </Link>
        </Container>
      </Navbar>
      <Navbar className="d-lg-none my-0 py-2  px-5 navBackground myNav">
        <Container fluid className="my-0 py-0 position-relative ">
          <Navbar.Brand className="navbarBrand  d-md-block  my-0 py-0">
            {/* <img className="logo-img" src={logo} alt="" /> */}
            <h3 className="impuls">Impuls</h3>
          </Navbar.Brand>
          <div>
            <div className="d-flex justify-content-end">
              <div
                className={`nav-toggle ${isOpen ? "open " : ""}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="textColor">Impuls</span>
                <span></span>
                <span>Gaming</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-start">
              <div
                className={`nav-menu mt-4 ${
                  isOpen ? "open d-flex flex-column" : ""
                }`}
              >
                <Link to="/" className="textColor mb-3  ">
                  Home
                </Link>
                <Link to="/" className="textColor mb-3  ">
                  Tournaments
                </Link>
                <Link to="#" className="textColor mb-3">
                  League
                </Link>
                <Link to="" className=" textColor mb-3">
                  Features
                </Link>
                <Link to="" className=" textColor mb-3">
                  Blog
                </Link>
                <Link to="/backoffice" className="link-none-deco  mb-3">
                  Backoffice
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <Link
          to={"/sign-up"}
          className={`d-lg-none ml-4 login-closed ${isOpen ? "open " : ""}`}
        >
          <Icon.PersonCircle size={30} />
        </Link>
      </Navbar>
    </>
  );
};
export default NavigationBar;
