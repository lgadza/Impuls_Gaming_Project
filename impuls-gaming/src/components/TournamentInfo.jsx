import { Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TournamentInfo = () => {
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  console.log(params);
  return (
    <Row>
      <Col sm={12} md={6}>
        <div className="d-flex  flex-column my-3">
          <h5 className="d-flex">Description</h5>
          <span className="d-flex mb-3">{tournament.description}</span>
        </div>
        <h6 className="d-flex my-3">Structure</h6>
        {tournament.structures.length > 0 ? (
          tournament.structures.map((structure, index) => {
            return (
              <Card key={index} className="my-3 tournament-structure-card">
                <Card.Header>
                  <strong>
                    {structure.general.number}
                    {". "}
                    {structure.general.name}
                  </strong>
                </Card.Header>
                <Card.Body>
                  <span className="border-right pr-1">
                    {structure.general.size} Players
                  </span>
                  <span className="pl-1">
                    {structure.general.divisions} Groups
                  </span>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <Card className="mb-3 tournament-structure-card">
            <Card.Header>
              <h6 className="d-flex">No structures available</h6>
            </Card.Header>
          </Card>
        )}
      </Col>
      <Col sm={12} md={6}>
        <div className="d-flex  flex-column my-3">
          <Card className="mb-3 tournament-structure-card">
            <Card.Header>
              <h5 className="d-flex">Prize</h5>
            </Card.Header>
            <Card.Body>
              <span className="d-flex">{tournament.price}</span>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  );
};
export default TournamentInfo;
