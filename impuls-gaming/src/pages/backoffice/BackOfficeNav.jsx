import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import logo from "../../img/impuls logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoggedInOrganizer from "../../components/LoggedInOrganizer";
import SocialMediaSharing from "../../components/SocialMediaSharing";
import "font-awesome/css/font-awesome.css";
import "../../styling/socialSharing.css";

const BackOfficeNav = ({ data, page, user }) => {
  const [profileClicked, setProfileClicked] = useState(false);
  const handleProfileClicked = () => {
    profileClicked ? setProfileClicked(false) : setProfileClicked(true);
  };
  return (
    <Col className=" my-projects giftcard-preview-nav d-flex flex-column">
      <img className=" mt-4 logo-img" src={logo} alt="" />
      <hr className="hr" />
      <Link className="link-none-deco" to="/backoffice">
        <h4 className="d-flex">My Projects</h4>
      </Link>
      <hr className="hr" />

      <div>
        <h6 className="d-flex my-3">Tournament</h6>
        <div className="d-flex w-100 ">
          <img
            className="tournament-name-img"
            src={data.discipline_cover}
            alt=""
          />
          <div className="d-flex flex-column w-75">
            <span className="text-left ml-2  tournament-name w-75">
              {data.name}
            </span>{" "}
            <span className="text-left text-small ml-2">
              {data.discipline_name}
            </span>{" "}
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
              <Icon.Speedometer2 size={15} />
              <span className="text-small">Overview</span>
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/settings/${data.name}`}
            className="my-2 d-flex"
          >
            <span
              className={
                page === "settings" ? "current textColor text-small" : undefined
              }
            >
              <Icon.Gear size={15} />
              <span className="text-small">Settings</span>
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/structures/${data.name}/stages`}
            className="my-2 d-flex"
          >
            <span
              className={page === "structure" ? "current textColor" : undefined}
            >
              <Icon.Boxes size={15} />
              <span className="text-small">Structures</span>
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
              <Icon.People size={15} />
              <span className="text-small">Participants</span>
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/${data.name}/matches`}
            className="my-2 d-flex"
          >
            <span
              className={page === "matches" ? "current textColor" : undefined}
            >
              <Icon.LightningCharge size={15} />
              <span className="text-small">Matches</span>
            </span>
          </Link>
          <Link
            to={`/backoffice/projects/${data.name}/finals`}
            className="d-flex my-2"
          >
            <span
              className={
                page === "final-standing" ? "current textColor" : undefined
              }
            >
              <Icon.Trophy size={15} />
              <span className="text-small"> Final standing</span>
            </span>
          </Link>
          {/* // TODO SHARING OPTIONS */}
          {/* <Link className="mt-4 pt-3">
            <Icon.Share size={15} />
            <span className="text-small">share</span>
          </Link>
          <SocialMediaSharing /> */}
          {/* // TODO SHARING OPTIONS */}
        </Nav>
      </Navbar>
      <div
        className={`organizer-profile giftcard-preview-nav ${
          profileClicked ? "active" : ""
        } w-75`}
      >
        <hr className="hr" />
        <LoggedInOrganizer clicked={handleProfileClicked} user={user} />
      </div>
    </Col>
  );
};
export default BackOfficeNav;
