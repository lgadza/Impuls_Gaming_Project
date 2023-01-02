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
          md={3}
          lg={3}
          xl={2}
          sm={12}
          className=" my-projects giftcard-preview-nav d-flex flex-column"
        >
          <img className=" mt-4 logo-img" src={logo} alt="" />
          <hr className="hr" />
          <h3 className="d-flex">My Projects</h3>
        </Col>
        <Col md={9} className="">
          <Organizer />
        </Col>
      </Row>
    </Container>
  );
};
export default BackOffice;
