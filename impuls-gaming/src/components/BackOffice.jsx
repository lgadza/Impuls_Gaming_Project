import { Col, Container, Row } from "react-bootstrap";
import fifa from "../img/fifa23.jpg";
import * as Icon from "react-bootstrap-icons";
import logo from "../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import Organizer from "./Organizer";

const BackOffice = () => {
  return (
    <Container fluid className="">
      <Row>
        <Col
          lg={3}
          className=" my-projects giftcard-preview-nav d-flex flex-column"
        >
          <img className=" mt-4 logo-img" src={logo} alt="" />
          <hr className="hr" />
          <h3 className="d-flex">My Projects</h3>
          <div>
            <h6 className="d-flex my-3">Tournament</h6>
            <div className="d-flex  ">
              <img className="tournament-name-img" src={fifa} alt="" />
              <div className="d-flex flex-column">
                <span className="d-flex ml-2">Name Of Tournament</span>{" "}
                <span className="d-flex ml-2">FIFA 23</span>{" "}
              </div>
            </div>
          </div>
          <hr className="hr" />
          <div className="d-flex flex-column align-items-start">
            <div>Overview</div>
            <div className="my-2">Settings</div>
            <div>Participants</div>
            <div className="my-2">Matches</div>
            <div>Final standing</div>
            <div className="my-2">Share</div>
          </div>
        </Col>
        <Col lg={9} className="">
          <Organizer />
        </Col>
      </Row>
    </Container>
  );
};
export default BackOffice;
