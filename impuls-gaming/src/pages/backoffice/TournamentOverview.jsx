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
  const [isCheckIn, setIsCheckIn] = useState(false);
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
                  {/* (//TODO: do not delete this its import for when thing ) */}

                  {/* {isRegistration && isStructure && ( */}
                  <Card.Text>
                    <Icon.InfoCircleFill size={15} />
                    <span>
                      {" "}
                      You should now enable the registration or manually add
                      participants. You could also create the tournament
                      structure.
                    </span>
                  </Card.Text>
                  {/* )} */}
                  {/* (//TODO: do not delete this its import for when thing ) */}

                  {/* (//TODO: do not delete this its import for when thing ) */}
                  {/* <Card.Text>
                    <Icon.InfoCircleFill size={15} />
                    <span>
                      {" "}
                      You should wait for participants to register and then
                      choose to accept or refuse them.
                    </span>
                  </Card.Text> */}
                  {/* (//TODO: do not delete this its import for when thing ) */}
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
                    <Icon.Gear size={25} />
                    <span>Configure check-in</span>
                  </Link>
                  {/* (//TODO: do not delete this its import for when thing ) */}
                  {/* <Card.Text>
                    <div>
                      <div className="d-flex justify-content-around mb-3">
                        <div className="text-primary">
                          <h2>0</h2>
                          <span>Participants </span>
                        </div>
                        {isCheckIn && (
                          <div className="text-success">
                            <h2>0</h2>
                            <span>Checked in </span>
                          </div>
                        )}
                        <div className="text-secondary">
                          <h2>36</h2>
                          <span>Tournament size</span>
                        </div>
                      </div>
                      {isCheckIn && (
                        <div className="d-flex flex-column">
                          <span>Participant check-in enabled</span>
                          <span className="text-muted text-small">
                            {" "}
                            Open until 25 Janunary 2023 at 02:30
                          </span>
                        </div>
                      )}
                    </div>
                    {!isCheckIn && (
                      <Link
                        to={`/backoffice/projects/settings/${tournament.tournament_name}/registration/`}
                      >
                        <Icon.Gear size={25} />
                        <span>Configure check-in</span>
                      </Link>
                    )}
                  </Card.Text> */}
                  {/* (//TODO: do not delete this its import for when thing change ) */}
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
                    {/* {isStrucure && ( */}
                    <Link className="link-none-deco ">
                      <Icon.Plus size={30} />
                      <span className="link-btm-bar">Create new stage</span>
                    </Link>
                    {/* )} */}
                  </Row>
                  <hr className="hr" />
                  {/* {!isStrucure && (
                    <>
                      <Card.Text>
                        The tournament does not have any stage yet. You should
                        create the first stage and may use our Structure Guide
                        if you are not sure of which stage to create.
                      </Card.Text>

                      <Link>
                        <Icon.Plus size={30} />
                        <span>Create new stage</span>
                      </Link>
                    </>
                  )} */}
                  <Card.Text>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-column ">
                        <span>Name of Tournament</span>
                        <span className="text-small text-muted d-flex">
                          FFA League
                        </span>
                      </div>
                      <div className="d-flex justify-content-around">
                        <span className="text-small text-muted">
                          1/20 players
                        </span>
                        <span className="text-small text-muted mx-4">
                          Pending
                        </span>
                        <span>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              <Icon.ThreeDotsVertical
                                size={20}
                                color="#0cc4f2"
                              />
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ width: "18rem" }}>
                              <Dropdown.Item>
                                <Icon.Gear size={20} color="#0cc4f2" />
                                <span className="textColor3 link-btm-bar">
                                  Configure
                                </span>
                              </Dropdown.Item>
                              <Dropdown.Item className="my-2">
                                <Icon.Search size={20} color="#0cc4f2" />
                                <span className="textColor3 link-btm-bar">
                                  Results
                                </span>
                              </Dropdown.Item>
                              <hr />
                              <Dropdown.Item>
                                <Icon.Trash size={20} color="red" />
                                <span className="text-danger link-btm-bar">
                                  Delete
                                </span>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </span>
                      </div>
                    </div>
                  </Card.Text>
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
                    <Icon.Gear size={25} />
                    <span>Enable registration</span>
                  </Link>
                  {/* (//TODO: do not delete this its import for when thing change ) */}

                  {/* ************************************* DO NOT DELETE ME */}
                  {/* <Card.Text>
                    <div className="d-flex justify-content-around">
                      <div className="text-primary">
                        <h1>0</h1>
                        <span>Pending</span>
                      </div>
                      <div className="text-success">
                        <h1>0</h1>
                        <span>Accepted</span>
                      </div>
                      <div className="text-secondary">
                        <h1>0</h1>
                        <span>Refused</span>
                      </div>
                      <div className="text-secondary">
                        <h1>0</h1>
                        <span>Cancelled</span>
                      </div>
                    </div>
                    <div className="my-4 text-muted">
                      No pending registration
                    </div>
                  </Card.Text> */}
                  {/* (//TODO: do not delete this its import for when thing change ) */}
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
