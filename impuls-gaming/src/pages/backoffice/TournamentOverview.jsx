import {
  Modal,
  Row,
  Container,
  Col,
  Button,
  Form,
  Card,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import fifa from "../../img/fifa23.jpg";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import BackOfficeNav from "./BackOfficeNav";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTournaments, getUsers } from "../../redux/actions";
const URL = process.env.REACT_APP_BE_PROD_URL;

const TournamentOverview = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isCheckIn, setIsCheckIn] = useState(false);
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  // const tournament = useSelector((state) => state.tournament.tournament);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  console.log(tournamentData);
  console.log(tournament.registration.activation.isRegistration);
  console.log(params.tournamentId);
  useEffect(() => {
    dispatch(getUsers(`${URL}/users?limit=10`));
    dispatch(getTournaments());
  }, []);
  // const setup = 50;
  let setup = 0;
  if (
    tournament.participants.isCheck_in &&
    tournament.registration.activation.isRegistration
  ) {
    setup = 100;
  } else if (
    tournament.participants.isCheck_in ||
    tournament.registration.activation.isRegistration
  ) {
    setup = 50;
  } else {
    setup = 0;
  }
  const pending = 0;
  const running = 0;
  return (
    <Container fluid className="main-container textColor">
      {tournament.name === params.tournamentId && (
        <Row>
          <Col lg={2} className="px-0">
            <BackOfficeNav data={tournament} page={"overview"} />
          </Col>
          <Col lg={10} className="my-5 px-5">
            <div className="d-flex justify-content-between">
              <h3 className="d-flex mb-5 ">Overview</h3>

              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <span className="textColor2 notification-bell">
                    <Icon.BellFill size={35} />
                    <span className="notification-message text-primary text-small bg-white">
                      <strong>5</strong>
                    </span>
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link
                      to={`/backoffice/projects/${tournament.name}/reports/dispute`}
                    >
                      Notification 1
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
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
                              {tournament.name}
                            </span>{" "}
                            <span className="d-flex ml-2">
                              {" "}
                              {tournament.discipline_name}
                            </span>{" "}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="my-4 mx-2 d-flex justify-content-between">
                      <Col>
                        <span className="d-flex">SETUP</span>
                        <ProgressBar now={setup} visuallyHidden />
                      </Col>{" "}
                      <Col>
                        <span className="d-flex"> PENDING</span>
                        <ProgressBar now={pending} visuallyHidden />
                      </Col>{" "}
                      <Col>
                        <span className="d-flex">RUNNING</span>
                        <ProgressBar now={running} visuallyHidden />
                      </Col>{" "}
                    </Row>

                    {setup !== 100 && (
                      <Card.Text>
                        <Icon.InfoCircleFill size={15} />
                        <span>
                          {" "}
                          You should now enable the registration or manually add
                          participants. You could also create the tournament
                          structure.
                        </span>
                      </Card.Text>
                    )}

                    {setup === 100 && (
                      <Card.Text>
                        <Icon.InfoCircleFill size={15} />
                        <span className="text-primary">
                          {" "}
                          You should wait for participants to register and then
                          choose to accept or refuse them.
                        </span>
                      </Card.Text>
                    )}
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
                    {!tournament.participants.isCheck_in && (
                      <>
                        <Card.Text>
                          You can manually create participants, especially if
                          you do not use the registration. You may configure the
                          check-in either way.
                        </Card.Text>
                        <Link
                          to={`/backoffice/projects/settings/${tournament.name}/participants`}
                        >
                          <Icon.Gear size={25} />
                          <span className=" link-btm-bar">
                            Configure check-in
                          </span>
                        </Link>
                      </>
                    )}
                    {tournament.participants.isCheck_in && (
                      <Card.Text>
                        <div>
                          <div className="d-flex justify-content-around mb-3">
                            <div className="text-primary">
                              <h2>
                                {tournament.tournamentParticipants.length}
                              </h2>
                              <span>Participants </span>
                            </div>
                            {isCheckIn && (
                              <div className="text-success">
                                <h2>0</h2>
                                <span>Checked in </span>
                              </div>
                            )}
                            <div className="text-secondary">
                              <h2>{tournament.size}</h2>
                              <span>Tournament size</span>
                            </div>
                          </div>
                          {tournament.participants.isCheck_in && (
                            <div className="d-flex flex-column">
                              <span className="text-success">
                                Participant check-in enabled
                              </span>
                              {tournament.participants.checkInClosingDate && (
                                <span className="text-muted text-small">
                                  Open until{" "}
                                  {format(
                                    new Date(
                                      tournament.participants.checkInClosingDate.toString()
                                    ),
                                    "dd MMM yyyy 'at' HH:mm"
                                  )}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        {!tournament.participants.isCheck_in && (
                          <Link
                            to={`/backoffice/projects/settings/${tournament.name}/registration/`}
                          >
                            <Icon.Gear size={25} />
                            <span className=" link-btm-bar">
                              Configure check-in
                            </span>
                          </Link>
                        )}
                      </Card.Text>
                    )}
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
                      <Link
                        to={`/backoffice/projects/structures/${tournament.name}/stages/`}
                        className="link-none-deco "
                      >
                        <Icon.Plus size={30} />
                        <span className="link-btm-bar">Create new stage</span>
                      </Link>
                      {/* )} */}
                    </Row>
                    <hr className="hr" />
                    {/* {!isStrucure && ( */}
                    <>
                      <Card.Text>
                        The tournament does not have any stage yet. You should
                        create the first stage and may use our Structure Guide
                        if you are not sure of which stage to create.
                      </Card.Text>

                      <Link
                        to={`/backoffice/projects/structures/${tournament.name}/stages/`}
                      >
                        <Icon.Plus size={30} />
                        <span className=" link-btm-bar">Create new stage</span>
                      </Link>
                    </>
                    {/* )} */}
                    {/* <Card.Text>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column ">
                          <span>Name of Tournament</span>
                          <span className="text-small text-muted d-flex">
                            FFA League
                          </span>
                        </div>
                        <div className="d-flex justify-content-around align-items-center">
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
                     
                    <hr />
                    <Card.Text>
                      <Link>
                        <span className="textColor3 link-none-deco link-btm-bar">
                          View all stages
                        </span>
                      </Link>
                    </Card.Text>
                    */}
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
                    {!tournament.registration.activation.isRegistration && (
                      <>
                        <Card.Text>
                          Enable the registration to have participants register
                          to the tournament. They will enjoy all the participant
                          features the platform offers: check-in, matches list,
                          results report ...
                        </Card.Text>
                        <Link
                          to={`/backoffice/projects/settings/${tournament.name}/registration/`}
                        >
                          <Icon.Gear size={25} />
                          <span className=" link-btm-bar">
                            Enable registration
                          </span>
                        </Link>
                      </>
                    )}

                    {tournament.registration.activation.isRegistration && (
                      <Card.Text>
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
                          <div className="text-danger">
                            <h1>0</h1>
                            <span>Cancelled</span>
                          </div>
                        </div>
                        <div className="my-4 text-muted">
                          No pending registration
                        </div>
                      </Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default TournamentOverview;
