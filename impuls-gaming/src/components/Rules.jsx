import { Row, Col } from "react-bootstrap";
const Rules = ({ tournament }) => {
  return (
    <Row>
      <Col>
        <div className="d-flex  flex-column my-3">
          <h4 className="d-flex">Rules</h4>
          {/* {tournament.rules && (
            <span className="d-flex">{tournament.rules}</span>
          )} */}
          <span className="d-flex">Rules not available.</span>
        </div>
      </Col>
      <Col></Col>
    </Row>
  );
};
export default Rules;
