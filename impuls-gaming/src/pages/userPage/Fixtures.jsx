import { Col, Container, Row, Table } from "react-bootstrap";

const Fixtures = () => {
  return (
    <Container fluid>
      <Row className="fixture-container">
        {[...Array(30)].map((fixture) => (
          <Col md={6} className="border">
            <span className="d-flex d-block pb-2 text-mute text-secondary">
              League
            </span>
            <hr className="py-0 my-0" />
            <div className="d-flex justify-content-between  border-round p-2">
              <div className="d-flex flex-column ">
                <span className="mb-2 ">Louis</span>
                <span>Louis</span>
              </div>
              <div className="d-flex flex-column pl-4 border-left">
                <span>Mar 5</span>
                <span>15:00</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Fixtures;
