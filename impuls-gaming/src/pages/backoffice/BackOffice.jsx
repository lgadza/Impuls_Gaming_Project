import {
  Col,
  Container,
  Row,
  Spinner,
  Form,
  Button,
  Nav,
  Alert,
} from "react-bootstrap";
import fifa from "../../img/fifa23.jpg";
import * as Icon from "react-bootstrap-icons";
import logo from "../../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import Organizer from "./Organizer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTournaments } from "../../redux/actions";

const BackOffice = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tournaments.isLoading);
  const isError = useSelector((state) => state.tournaments.isError);
  const projects = useSelector((state) => state.tournaments.tournaments);
  useEffect(() => {
    dispatch(getTournaments());
  }, []);
  return (
    <Container fluid className="">
      <Row>
        <Col
          md={3}
          lg={3}
          xl={2}
          className=" my-projects giftcard-preview-nav d-flex flex-column d-xs-none d-sm-none d-md-none d-lg-block"
        >
          <img className=" mt-4 logo-img" src={logo} alt="" />
          <hr className="hr" />
          <h3 className="d-flex">My Projects</h3>
        </Col>
        <Col lg={9} md={12} className="">
          {isLoading && (
            <div className="mt-5">
              {" "}
              <Spinner animation="grow" />;
            </div>
          )}
          {!isError && (
            <Alert variant="danger" className="mt-5">
              <Alert.Heading>!You got an error!</Alert.Heading>
              <p>
                Something went wrong on our side, we are working on it, we
                apologies for the inconvenience caused
              </p>
            </Alert>
          )}
          {projects.totalTournaments && <Organizer projects={projects} />}
        </Col>
      </Row>
    </Container>
  );
};
export default BackOffice;
