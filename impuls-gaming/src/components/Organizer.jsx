import { Col, Container, Row } from "react-bootstrap";
import logo from "../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import CreateTournament from "./CreateTournament";

const Organizer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <Container fluid className="">
      <Row>
        <Col
          lg={3}
          className=" my-projects giftcard-preview-nav d-flex flex-column"
        >
          <img className=" mt-4 logo-img" src={logo} alt="" />
          <hr />
          <h3 className="d-flex">My Projects</h3>
          <div>
            <h6>Tournament</h6>
            <div>
              <img src="" alt="" />
              <div>
                <span>Name Of Tournament</span> <span>FIFA 23</span>{" "}
              </div>
            </div>
          </div>
        </Col>
        <Col lg={9} className="">
          <h1 className="d-flex ml-4 mt-4">My Projects</h1>
          <Row>
            <Col onClick={handleShow} lg={4}>
              <span className="d-flex mt-5 align-items-center justify-content-center flex-column main-container plus-project  mx-4">
                <Icon.PlusLg size={100} color="rgba(244, 92, 93, 255)" />
                <span className="d-flex justify-content-center mx-4 align-items-center">
                  Create Project
                </span>
              </span>
            </Col>
            {[...Array(2)].map((project) => (
              <Col lg={4}>
                <span className="d-flex mt-5 align-items-center justify-content-center flex-column main-container plus-project  mx-4 mr-4">
                  <Icon.PlusLg size={100} color="rgba(244, 92, 93, 255)" />
                  <span className="d-flex justify-content-center mx-4 align-items-center">
                    Create Project
                  </span>
                </span>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <CreateTournament visible={show} onhide={handleClose} />
    </Container>
  );
};
export default Organizer;
