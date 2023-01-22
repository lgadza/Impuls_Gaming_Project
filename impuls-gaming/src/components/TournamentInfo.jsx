import { Row, Col, Card } from "react-bootstrap";

const TournamentInfo = () => {
  return (
    <Row>
      <Col sm={12} md={6}>
        <div className="d-flex  flex-column my-3">
          <h4 className="d-flex">Description</h4>
          <span className="d-flex mb-3">
            FIFA tournaments between players! progress in the month of January
          </span>
        </div>
        <h5 className="d-flex my-3">Structure</h5>
        <Card className="my-3 tournament-structure-card">
          <Card.Header>
            <strong>1.Groups</strong>
          </Card.Header>
          <Card.Body>
            <span className="border-right pr-1">16 Players</span>
            <span className="pl-1">4 Groups</span>
          </Card.Body>
        </Card>
        <Card className="mb-3 tournament-structure-card">
          <Card.Header>
            <strong>2.PlayOffs</strong>
          </Card.Header>
          <Card.Body>
            <h6>Single Elimination</h6>
            <span>8 Players</span>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6}>
        <div className="d-flex  flex-column my-3">
          <h4 className="d-flex">Prize</h4>
          <span className="d-flex">Cash prize</span>
        </div>
      </Col>
    </Row>
  );
};
export default TournamentInfo;
