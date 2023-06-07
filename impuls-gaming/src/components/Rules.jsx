import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Rules = () => {
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  return (
    <Row>
      {tournament && (
        <>
          <Col>
            <div className="d-flex  flex-column my-3">
              <h4 className="d-flex">Rules</h4>
              {<span className="d-flex">{tournament.rules}</span>}
              {/* <span className="d-flex">Rules not available.</span> */}
            </div>
          </Col>
          <Col></Col>
        </>
      )}
    </Row>
  );
};
export default Rules;
