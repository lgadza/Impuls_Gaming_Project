import { Card, Col, Container, Row } from "react-bootstrap";
import BackOfficeNav from "./BackOfficeNav";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";

const MatchOverview = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  const user = useSelector((state) => state.me.me);
  return (
    <Container fluid className="main-container2 textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav data={tournament} user={user} page={"matches"} />
        </Col>
        <Col lg={10} className="my-5 px-5">
          <Card className="registration-card mx-auto mb-5 main-container2">
            <Card.Header>
              <h3 className="d-flex p-3 my-1">Matches</h3>
            </Card.Header>
          </Card>
          <Card className="registration-card mx-auto mb-5">
            <Card.Body>
              <div className="d-flex justify-content-between ">
                <Col className="d-flex flex-column  border-right">
                  <h1>{tournament.size}</h1>
                  <span>Matches</span>
                </Col>

                <Col className="d-flex flex-column ml-auto">
                  <h1>{tournament.size}</h1>
                  <span>Completed</span>
                </Col>
              </div>
            </Card.Body>
          </Card>
          <Card className="registration-card mx-auto mt-4">
            <Card.Header>
              <h3 className="d-flex my-1">List of matches</h3>
            </Card.Header>
            <Card.Body>No matches to display yet</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default MatchOverview;
