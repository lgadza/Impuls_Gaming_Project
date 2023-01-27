import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Nav,
  Navbar,
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
  const projects = useSelector((state) => state.tournaments.tournaments);
  console.log(projects);
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
          <Organizer projects={projects} />
        </Col>
      </Row>
    </Container>
  );
};
export default BackOffice;
