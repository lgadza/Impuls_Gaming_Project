import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { format, compareAsc } from "date-fns";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const navigate = useNavigate();
  return (
    <div className="background footer container-fluid mt-5 mb-3 textColor">
      <Container className="pt-4">
        <Row>
          <Col md={6} lg={3}>
            <ListGroup variant="flush" className="navbar-nav">
              <ListGroup.Item className="text-left px-0">
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
                  <Icon.Linkedin color="#1DA1F2" size={25} />
                </Link>
                <Link>
                  <Icon.Youtube color="red" size={25} />
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="text-left px-0">
                <Link className=" textColor">Media Center</Link>
              </ListGroup.Item>

              <ListGroup.Item className="text-left px-0">
                <Link className=" textColor">Contact Us</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6} lg={3}>
            <ListGroup variant="flush" className="navbar-nav">
              <ListGroup.Item className="text-left px-0">
                <Link className=" textColor ">Investor Relations</Link>
              </ListGroup.Item>
              <ListGroup.Item className="text-left px-0">
                <Link className=" textColor">Legal Notices</Link>
              </ListGroup.Item>
              <ListGroup.Item className="text-left px-0">
                <Link className="textColor">Service Code</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6} lg={3}>
            <ListGroup variant="flush" className="navbar-nav">
              <ListGroup.Item className="text-left px-0">
                <Link className=" textColor">Help Center</Link>
              </ListGroup.Item>
              <ListGroup.Item className="text-left px-0">
                <Link className=" textColor">Jobs</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6} lg={3}>
            <ListGroup variant="flush" className="navbar-nav">
              <ListGroup.Item className="text-left px-0">
                <Link to={"/giftcard"} className=" textColor">
                  Gift Cards
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="text-left px-0">
                <Link className=" textColor">Terms Of Use</Link>
              </ListGroup.Item>
              <ListGroup.Item className="text-left px-0">
                <Link className=" textColor">Privacy</Link>
              </ListGroup.Item>
              <ListGroup.Item className="text-left px-0">
                <Link className=" textColor">Corporate Information</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <hr />
      <Link className=" textColor ">
        @{date.getFullYear()} Impuls Gaming. All rights reserved
      </Link>
    </div>
  );
};

export default Footer;
