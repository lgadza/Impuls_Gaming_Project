import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "../styling/home.css";
import logo from "../img/impuls logo.png";
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
        className="my-0 py-2 d-none d-lg-block px-5 navBackground myNav "
      >
        <Container fluid className="my-0 py-0 position-relative">
          <Link to="/">
            <Navbar.Brand className="navbarBrand  d-md-block  my-0 py-0">
              <img className="logo-img" src={logo} alt="" />
            </Navbar.Brand>
          </Link>
          <div className="d-flex flex-column me-auto py-2 px-3  text-size-md">
            {/* <div className="d-flex ">
              <Icon.List
                onClick={() =>
                  isHidden ? setIsHidden(false) : setIsHidden(true)
                }
                className="d-md-none ml-auto"
                size={20}
              />
            </div> */}
            <Nav className="nav-links ">
              <Link to="/" className="textColor mr-4 link-btm-bar ">
                Home
              </Link>
              <Link to="/tournaments" className="textColor mr-4 link-btm-bar">
                Tournaments
              </Link>

              <Link to="" className="mr-4 textColor link-btm-bar">
                Features
              </Link>
              <Link to="" className=" mr-4  textColor link-btm-bar">
                News
              </Link>
              <Link to="" className=" textColor link-btm-bar">
                About Us
              </Link>
            </Nav>
          </div>
          <div className="d-flex align-items-center">
            <Link
              to="/organiser/signIn"
              className="link-none-deco text-small pr-2 link-btm-bar border-right"
            >
              Organizer
            </Link>
            <Link
              to={"/sign-up"}
              className="link-none-deco text-small ml-2 link-btm-bar"
            >
              Player
            </Link>
          </div>
        </Container>
      </Navbar>
      <Navbar className="d-lg-none my-0 py-2  px-5 navBackground2 myNav">
        <Container
          fluid
          className="my-0 pt-2 px-3 position-relative d-flex align-items-start"
        >
          <div>
            <Link to="/">
              <Navbar.Brand className="navbarBrand d-flex  d-md-block  my-0 py-0">
                <img className="logo-img" src={logo} alt="" />
              </Navbar.Brand>
            </Link>
            <div className="d-flex flex-column text-left pr-0">
              <div
                className={`nav-menu mt-4 ${
                  isOpen ? "open d-flex flex-column height" : ""
                }`}
              >
                <div className="d-flex flex-column ">
                  <Link to="/" className="textColor mb-4 pr-0  ">
                    Home
                  </Link>
                  <Link to="/tournaments" className="textColor mb-4 pr-0  ">
                    Tournaments
                  </Link>
                  <Link to="" className=" textColor mb-4 pr-0">
                    Features
                  </Link>
                  <Link to="" className=" textColor mb-4 pr-0">
                    News
                  </Link>
                </div>
                <div className="d-flex users flex-column mt-5 ">
                  <hr className="hr" />
                  <>
                    <Link
                      to="/organiser/signIn"
                      className="link-none-deco text-small mb-4 mr-2 link-btm-bar"
                    >
                      Organizer
                    </Link>
                    <Link to={"/sign-up"} className="   mb-2 ">
                      Player
                    </Link>
                  </>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end ">
            <div
              className={`nav-toggle  ${isOpen ? "open  " : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="textColor">Impuls</span>
              <span></span>
              <span className="textColor3">Gaming</span>
            </div>
          </div>
        </Container>
        {/* <Link
          to={"/sign-up"}
          className={`d-lg-none ml-2 login-closed ${isOpen ? "open " : ""}`}
        >
          <Icon.PersonCircle size={30} />
        </Link> */}
      </Navbar>
    </>
  );
};
export default NavigationBar;
