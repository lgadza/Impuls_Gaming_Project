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
          {/* <Card className="mx-auto mb-5 main-container2"></Card> */}
          <Card className="mx-auto mb-5">
            <Card.Header>
              <h5 className="d-flex p-2 ">Matches</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between ">
                <Col className="d-flex flex-column  border-right">
                  <h2>{tournament.size}</h2>
                  <span>Matches</span>
                </Col>

                <Col className="d-flex flex-column ml-auto">
                  <h2>0</h2>
                  <span>Completed</span>
                </Col>
              </div>
            </Card.Body>
          </Card>
          <Card className="mx-auto mt-4">
            <Card.Header>
              <h5 className="d-flex my-1">List of matches</h5>
            </Card.Header>
            <Card.Body>No matches to display yet</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default MatchOverview;
