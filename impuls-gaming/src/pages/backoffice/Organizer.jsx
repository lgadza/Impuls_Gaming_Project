import { Col, Container, Row, Button } from "react-bootstrap";
import logo from "../../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import CreateTournament from "./CreateTournament";
import fifa from "../../img/fifa23.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Organizer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const projects = useSelector((state) => state.tournament.data);
  return (
    <>
      <>
        <h1 className="d-flex ml-5 mt-4 ">My Projects</h1>
        <Row id="create-btn" className="w-100">
          <div className="d-grid gap-2 mx-5 mt-4 d-flex justify-content-center">
            <Button
              onClick={handleShow}
              variant="primary"
              size="lg"
              className=" d-flex justify-content-center create-btn"
            >
              <Icon.PlusLg size={30} color="rgba(244, 92, 93, 255)" />
              <span className=" textColor">Create Project</span>
            </Button>
          </div>
        </Row>
        <Row className="-d-flex  w-100 ml-auto organizer">
          <Col
            onClick={handleShow}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            xl={4}
            className="d-xs-none d-sm-none d-md-none d-lg-block"
          >
            <span className="d-flex mt-5 align-items-center justify-content-center flex-column main-container plus-project  mx-4">
              <Icon.PlusLg size={100} color="rgba(244, 92, 93, 255)" />
              <span className="d-flex justify-content-center mx-4 align-items-center">
                Create Project
              </span>
            </span>
          </Col>
          {projects.map((project, index) => (
            <Col lg={6} md={6} xl={4} sm={6} xs={12} key={index}>
              {/* TODO change the key Id */}
              <Link to={`projects/overview/${project.tournament_name}`}>
                <span className="d-flex mt-5 align-items-center justify-content-center flex-column main-container plus-project  mx-4 mr-4">
                  <img src={fifa} className="w-100" alt="fifa" />
                  {/* <hr className="hr" /> */}
                  <span className="d-flex justify-content-center mx-4 align-items-center py-3">
                    <strong>{project.tournament_name}</strong>
                  </span>
                </span>
              </Link>
            </Col>
          ))}
        </Row>
      </>
      <CreateTournament visible={show} onhide={handleClose} />
    </>
  );
};
export default Organizer;
