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

const MatchType = () => {
  const params = useParams();
  console.log(params.tournamentId);
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
          <BackOfficeNav data={tournament} user={user} page={"structure"} />
        </Col>
        <Col lg={10} className="my-5 px-5">
          <div className="d-flex justify-content-between">
            <h3 className="d-flex mb-5">Select a match type</h3>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span className=" notification-bell">
                  <Icon.BellFill color="rgb(0, 123, 255)" size={20} />
                  <span className="notification-message text-primary text-small"></span>
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Row className=" mb-5">
            <Col>
              <Link
                to={`/backoffice/projects/structures/${params.tournamentId}/stages/dual/simple`}
              >
                <Card
                  className="border-hover textColor"
                  style={{ height: "12rem" }}
                >
                  <Card.Body className="d-flex  align-items-center">
                    <Row>
                      <Col md={4} className="d-flex align-items-center">
                        <Icon.PersonFill
                          size={50}
                          className="text-muted mr-0"
                        />
                        <Icon.PersonFill
                          size={50}
                          className="text-muted ml-0"
                        />
                      </Col>
                      <Col md={8}>
                        <h5 className="d-flex">Dual</h5>
                        <span className="d-flex text-left">
                          Matches involving two participants (either two players
                          or two teams) require a structure using duel-based
                          stages such as single or double elimination, gauntlet,
                          round-robin or swiss system.
                        </span>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link
                to={`/backoffice/projects/structures/${params.tournamentId}/stages/multiple/`}
              >
                <Card
                  className="border-hover textColor"
                  style={{ height: "12rem" }}
                >
                  <Card.Body className="d-flex  align-items-center">
                    <Row>
                      <Col md={4} className="d-flex align-items-center">
                        <Icon.PeopleFill
                          size={50}
                          className="text-muted mr-0"
                        />
                        <Icon.PersonFill
                          size={50}
                          className="text-muted ml-0"
                        />
                      </Col>
                      <Col md={8}>
                        <h5 className="d-flex">Multiple</h5>
                        <span className="d-flex text-left">
                          Matches involving more than two participants, matches
                          require a structure using stages specifically designed
                          for FFA.
                        </span>
                      </Col>
                    </Row>
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
export default MatchType;
