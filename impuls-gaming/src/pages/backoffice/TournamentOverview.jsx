import {
  Modal,
  Row,
  Container,
  Col,
  Button,
  Form,
  Card,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import fifa from "../../img/fifa23.jpg";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BackOfficeNav from "./BackOfficeNav";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const TournamentOverview = () => {
  const params = useParams();
  console.log(params.tournamentId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tournamentData = useSelector((state) => state.tournament.data);
  const tournament = tournamentData.find(
    (name) => name.tournament_name === params.tournamentId
  );
  console.log(tournament);
  return (
    <Container fluid className="main-container textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav data={tournament} page={"overview"} />
        </Col>
        <Col lg={10} className="my-5 px-5">
          <h3 className="d-flex mb-5">Overview</h3>
          <Row className=" mb-5">
            <Col>
              <Card>
                <Card.Body>
                  <Row>
                    <Col>
                      <div className="d-flex  ">
                        <img
                          className="tournament-name-img"
                          src={fifa}
                          alt=""
                        />
                        <div className="d-flex flex-column">
                          <span className="d-flex ml-2">
                            {tournament.tournament_name}
                          </span>{" "}
                          <span className="d-flex ml-2">
                            {" "}
                            {tournament.discipline}
                          </span>{" "}
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="my-4 mx-2 d-flex justify-content-between">
                    <span className="overview-border">SETUP</span>{" "}
                    <span>PENDING</span> <span>RUNNING</span>{" "}
                  </Row>
                  <Card.Text>
                    <Icon.InfoCircleFill size={15} />
                    <span>
                      {" "}
                      You should now enable the registration or manually add
                      participants. You could also create the tournament
                      structure.
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Row className="d-flex justify-content-between align-items-center mb-3 mx-1">
                    <span>Participants</span>
                    <Button className="primary-btn ml-3 textColor">
                      <Icon.Plus size={30} />
                      Add
                    </Button>
                  </Row>
                  <hr className="hr" />
                  <Card.Text>
                    You can manually create participants, especially if you do
                    not use the registration. You may configure the check-in
                    either way.
                  </Card.Text>
                  <Link
                    to={`/backoffice/projects/settings/${tournament.tournament_name}/participants`}
                  >
                    <Icon.Gear size={30} />
                    <span>Configure check-in</span>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Row className="d-flex justify-content-between align-items-center mb-3 mx-1">
                    <span>Structure</span>
                  </Row>
                  <hr className="hr" />
                  <Card.Text>
                    The tournament does not have any stage yet. You should
                    create the first stage and may use our Structure Guide if
                    you are not sure of which stage to create.
                  </Card.Text>
                  <Link>
                    <Icon.Plus size={30} />
                    <span>Create new stage</span>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Row className="d-flex justify-content-between align-items-center mb-3 mx-1">
                    <span>Registrations</span>
                  </Row>
                  <hr className="hr" />
                  <Card.Text>
                    Enable the registration to have participants register to the
                    tournament. They will enjoy all the participant features the
                    platform offers: check-in, matches list, results report ...
                  </Card.Text>
                  <Link
                    to={`/backoffice/projects/settings/${tournament.tournament_name}/registration/`}
                  >
                    <Icon.Gear size={30} />
                    <span>Enable registration</span>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default TournamentOverview;
