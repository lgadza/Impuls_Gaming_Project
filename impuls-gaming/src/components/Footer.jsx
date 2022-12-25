import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { format, compareAsc } from "date-fns";

const Footer = () => {
  const date = new Date();
  return (
    <div className="background container-fluid mt-5 textColor">
      <Container className="pt-4">
        <Row>
          <Col md={3}>
            <ListGroup className="navbar-nav">
              <ListGroup.Item>
                <Link>
                  <Icon.Facebook color="#4267B2" size={25} />
                </Link>
                <Link>
                  <Icon.Instagram color="#cd486b" size={25} />
                </Link>
                <Link>
                  <Icon.Twitter color="#1DA1F2" size={25} />
                </Link>
                <Link>
                  <Icon.Youtube color="red" size={25} />
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className=" textColor" href="#">
                  Media Center
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className=" textColor" href="#">
                  Privacy
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className=" textColor" href="#">
                  Contact Us
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className=" mt-2">
                <Link className="textColor">Service Code</Link>
              </ListGroup.Item>
              <ListGroup.Item className=" mt-2">
                <Link className=" textColor" href="#">
                  © 2022-{date.getFullYear()} Impuls Gaming
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush" className="navbar-nav">
              <ListGroup.Item>
                <Link className=" textColor" href="#">
                  Investor Relations
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className=" textColor" href="#">
                  Legal Notices
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush" className="navbar-nav">
              <ListGroup.Item>
                <Link className=" textColor" href="#">
                  Help Center
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className=" textColor" href="#">
                  Jobs
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className=" textColor" href="#">
                  Cookie Preferences
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush" className="navbar-nav">
              <ListGroup.Item>
                <Link to={"/giftcard"} className=" textColor" href="#">
                  Gift Cards
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className=" textColor" href="#">
                  Terms Of Use
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className=" textColor" href="#">
                  Corporate Information
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
