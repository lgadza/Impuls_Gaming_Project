import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const PlayerList = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="d-flex  flex-column my-3">
            <h4 className="d-flex">Participants</h4>
          </div>
        </Col>
        <Col>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search here"
              className="mr-3"
              aria-label="Search"
            />
            <Button variant="secondary">
              <Icon.Search size={20} />
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {[...Array(19)].map((player, index) => {
          return (
            <Col xs={6} lg={3}>
              <Link className="link-none-deco">
                <div className="border round textColor  d-flex px-2 participant-names py-3 my-2">
                  Louis Gadza
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default PlayerList;
