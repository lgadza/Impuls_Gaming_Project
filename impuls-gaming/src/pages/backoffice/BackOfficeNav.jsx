import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import fifa from "../../img/fifa23.jpg";
import * as Icon from "react-bootstrap-icons";
import logo from "../../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import { Link } from "react-router-dom";

const BackOfficeNav = ({ data, page }) => {
  console.log(page);
  return (
    <Col className=" my-projects giftcard-preview-nav d-flex flex-column">
      <img className=" mt-4 logo-img" src={logo} alt="" />
      <hr className="hr" />
      <Link className="link-none-deco" to="/backoffice">
        <h3 className="d-flex">My Projects</h3>
      </Link>
      <hr className="hr" />

      <div>
        <h6 className="d-flex my-3">Tournament</h6>
        <div className="d-flex  ">
          <img className="tournament-name-img" src={fifa} alt="" />
          <div className="d-flex flex-column">
            <span className="d-flex ml-2">{data.tournament_name}</span>{" "}
            <span className="d-flex ml-2">{data.discipline}</span>{" "}
          </div>
        </div>
      </div>
      <hr className="hr" />
      <Navbar className="d-flex flex-column align-items-start">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="d-flex flex-column">
          <Link
            to={`/backoffice/projects/overview/${data.tournament_name}`}
            className="d-flex d-flex "
          >
            <span
              className={page === "overview" ? "current textColor" : undefined}
            >
              Overview
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/settings/${data.tournament_name}`}
            className="my-2 d-flex"
          >
            <span
              className={page === "settings" ? "current textColor" : undefined}
            >
              Settings
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/participants/${data.tournament_name}`}
            className="d-flex"
          >
            <span
              className={
                page === "participants" ? "current textColor" : undefined
              }
            >
              Participants
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/settings/${data.tournament_name}`}
            className="my-2 d-flex"
          >
            <span
              className={page === "matches" ? "current textColor" : undefined}
            >
              Matches
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/settings/${data.tournament_name}`}
            className="d-flex"
          >
            <span
              className={
                page === "final-standing" ? "current textColor" : undefined
              }
            >
              Final standing
            </span>
          </Link>
          <Link className="my-2 d-flex">Share</Link>
        </Nav>
      </Navbar>
    </Col>
  );
};
export default BackOfficeNav;
