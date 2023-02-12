import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import fifa from "../../img/fifa23.jpg";
import * as Icon from "react-bootstrap-icons";
import logo from "../../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const BackOfficeNav = ({ data, page }) => {
  const [profileClicked, setProfileClicked] = useState(false);
  const handleProfileClicked = () => {
    profileClicked ? setProfileClicked(false) : setProfileClicked(true);
  };
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
        <div className="d-flex w-100 ">
          <img className="tournament-name-img" src={fifa} alt="" />
          <div className="d-flex flex-column w-75">
            <span className="d-flex ml-2 tournament-name w-75">
              {data.name}
            </span>{" "}
            <span className="d-flex ml-2">{data.discipline_name}</span>{" "}
          </div>
        </div>
      </div>
      <hr className="hr" />
      <Navbar className="d-flex flex-column align-items-start">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="d-flex flex-column">
          <Link
            to={`/backoffice/projects/overview/${data.name}`}
            className="d-flex d-flex "
          >
            <span
              className={page === "overview" ? "current textColor" : undefined}
            >
              <Icon.Speedometer2 size={20} />
              Overview
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/settings/${data.name}`}
            className="my-2 d-flex"
          >
            <span
              className={page === "settings" ? "current textColor" : undefined}
            >
              <Icon.Gear size={20} />
              Settings
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/structures/${data.name}/stages`}
            className="my-2 d-flex"
          >
            <span
              className={page === "structure" ? "current textColor" : undefined}
            >
              <Icon.Boxes size={20} />
              Structures
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/participants/${data.name}`}
            className="d-flex my-2"
          >
            <span
              className={
                page === "participants" ? "current textColor" : undefined
              }
            >
              <Icon.People size={20} />
              Participants
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/settings/${data.name}`}
            className="my-2 d-flex"
          >
            <span
              className={page === "matches" ? "current textColor" : undefined}
            >
              <Icon.LightningCharge size={20} />
              Matches
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/settings/${data.name}`}
            className="d-flex my-2"
          >
            <span
              className={
                page === "final-standing" ? "current textColor" : undefined
              }
            >
              <Icon.Trophy size={20} />
              Final standing
            </span>
          </Link>
          <Link className="my-2 d-flex">
            <Icon.Share size={20} />
            Share
          </Link>
        </Nav>
      </Navbar>
      <div
        className={`organizer-profile giftcard-preview-nav ${
          profileClicked ? "active" : ""
        } w-75`}
      >
        <hr className="hr" />
        <Link
          onClick={handleProfileClicked}
          className="d-flex justify-content-between textColor align-items-center "
        >
          <span>Louis Gadza</span>
          <Icon.CaretDown size={15} />
        </Link>
        <div className="d-flex flex-column align-items-start">
          <Link className="my-3 textColor">
            <span>Account</span>
          </Link>
          <Link className="textColor">
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </Col>
  );
};
export default BackOfficeNav;
