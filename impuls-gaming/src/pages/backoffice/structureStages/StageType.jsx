import {
  Modal,
  Row,
  Container,
  Col,
  Button,
  Form,
  Card,
  Dropdown,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BackOfficeNav from "../BackOfficeNav";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const StageType = () => {
  const params = useParams();
  // console.log(params.tournamentId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isCheckIn, setIsCheckIn] = useState(false);
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  const user = useSelector((state) => state.me.me);
  return (
    <Container fluid className="main-container textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav user={user} data={tournament} page={"structure"} />
        </Col>
        <Col lg={10} className="my-5 px-5">
          <h5 className="d-flex mb-5">Select a stage type</h5>
          <Row className=" mb-5">
            <Col md={6}>
              <Link
                to={`/backoffice/projects/structures/${params.tournamentId}/stages/multiple/Simple`}
              >
                <Card
                  className="border-hover textColor"
                  style={{ height: "12rem" }}
                >
                  <Card.Body className="d-flex flex-column  justify-content-center">
                    <h5 className="d-flex">Simple</h5>
                    <span className="d-flex text-left">
                      Stage containing a single round of matches.
                    </span>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6}>
              <Link
                to={`/backoffice/projects/structures/${params.tournamentId}/stages/multiple/Single Elimination`}
              >
                <Card
                  className="border-hover textColor"
                  style={{ height: "12rem" }}
                >
                  <Card.Body className="d-flex flex-column  justify-content-center">
                    <h5 className="d-flex">Single Elimination</h5>
                    <span className="d-flex text-left">
                      Bracket with matches where a set number of participants
                      qualifies for the next round.
                    </span>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Link
                to={`/backoffice/projects/structures/${params.tournamentId}/stages/multiple/Bracket Groups`}
              >
                <Card
                  className="border-hover textColor"
                  style={{ height: "12rem" }}
                >
                  <Card.Body className="d-flex flex-column  justify-content-center">
                    <h5 className="d-flex">Bracket Groups</h5>
                    <span className="d-flex text-left">
                      Groups in which participants play free-for-all matches in
                      single-elimination brackets.
                    </span>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6}>
              <Link
                to={`/backoffice/projects/structures/${params.tournamentId}/stages/multiple/league`}
              >
                <Card
                  className="border-hover textColor"
                  style={{ height: "12rem" }}
                >
                  <Card.Body className="d-flex flex-column  justify-content-center">
                    <h5 className="d-flex">League</h5>
                    <span className="d-flex text-left">
                      Divisions in which participants earn points in matches for
                      a ranking.
                    </span>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default StageType;
