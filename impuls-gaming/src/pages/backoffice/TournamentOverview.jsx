import {
  Row,
  Container,
  Col,
  Button,
  Card,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const isLoading = useSelector((state) => state.tournaments.isLoading);
  // const tournament = useSelector((state) => state.tournament.tournament);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  const checkedInParticipants = tournament.tournamentParticipants.filter(
    (player) => player.checkedIn === true
  );
  const user = useSelector((state) => state.me.me);
  useEffect(() => {
    dispatch(getUsers(`${URL}/users?limit=10`));
    // dispatch(getTournaments());
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

  const pending =
    (tournament.tournamentParticipants.length / tournament.size) * 100;
  const running = 0;
  return (
    <Container fluid className="main-container textColor">
      {tournament.name === params.tournamentId && (
        <Row>
          <Col lg={2} className="px-0 sizeable">
            <BackOfficeNav data={tournament} user={user} page={"overview"} />
          </Col>
          <Col lg={10} className="my-5 px-5">
            <div className="d-flex justify-content-between">
              <h5 className="d-flex mb-4 ">Overview</h5>

              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <span className="notification-bell">
                    <Icon.BellFill color="rgb(0, 123, 255)" size={20} />
                    <span className="notification-message text-primary text-small "></span>
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() =>
                      navigate(
                        `/backoffice/projects/${tournament.name}/reports/disputes`
                      )
                    }
                  >
                    Louis vs Sage
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Row className=" mb-5">
              <Col>
                <Card style={{ height: "16rem" }}>
                  <Card.Body>
                    <Row>
                      <Col>
                        <div className="d-flex  ">
                          <img
                            className="tournament-name-img"
                            src={tournament.discipline_cover}
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
                        <small className="d-flex">SETUP</small>
                        <ProgressBar now={setup} visuallyHidden />
                      </Col>{" "}
                      <Col>
                        <small className="d-flex"> PENDING</small>
                        <ProgressBar now={pending} visuallyHidden />
                      </Col>{" "}
                      <Col>
                        <small className="d-flex">RUNNING</small>
                        <ProgressBar now={running} visuallyHidden />
                      </Col>{" "}
                    </Row>

                    {setup !== 100 && (
                      <Card.Text>
                        <Icon.InfoCircleFill
                          color="rgb(229, 176, 14)"
                          size={15}
                        />
                        <span className="text-warning">
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
                <Card style={{ height: "16rem" }}>
                  <Card.Body>
                    <Row className="d-flex justify-content-between align-items-center mb-3 mx-1">
                      <span>Participants</span>
                      <Button className="primary-btn ml-3 textColor d-flex align-items-center justify-content-center">
                        <Icon.Plus size={20} />
                        <span className="text-small">Add</span>
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
                          <Icon.Gear size={15} />
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
                              <h3>
                                {tournament.tournamentParticipants.length}
                              </h3>
                              <span>Participants </span>
                            </div>

                            <div className="text-success">
                              <h3>{checkedInParticipants.length}</h3>
                              <span>Checked in </span>
                            </div>

                            <div className="text-secondary">
                              <h3>{tournament.size}</h3>
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
                            <Icon.Gear size={15} />
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
                <Card style={{ height: "16rem" }}>
                  <Card.Body>
                    <Row className="d-flex justify-content-between align-items-center mb-3 mx-1">
                      <span>Structure</span>
                      {tournament.structures.length > 0 && (
                        <Link
                          to={`/backoffice/projects/structures/${tournament.name}/stages/`}
                          className="link-none-deco "
                        >
                          <Icon.Plus size={20} />
                          <span className="link-btm-bar">Create new stage</span>
                        </Link>
                      )}
                    </Row>
                    <hr className="hr mb-3 pb-0" />
                    {tournament.structures.length === 0 && (
                      <>
                        <Card.Text>
                          The tournament does not have any stage yet. You should
                          create the first stage and may use our Structure Guide
                          if you are not sure of which stage to create.
                        </Card.Text>

                        <Link
                          to={`/backoffice/projects/structures/${tournament.name}/stages/`}
                        >
                          <Icon.Plus size={20} />
                          <span className=" link-btm-bar">
                            Create new stage
                          </span>
                        </Link>
                      </>
                    )}
                    <div className="structure-card-scroll">
                      {tournament.structures.length > 0 && (
                        <>
                          <Card.Text>
                            {tournament.structures.map((structure, index) => (
                              <div
                                key={index}
                                className="d-flex justify-content-between py-2 participant-list"
                              >
                                <div className="d-flex flex-column ">
                                  <span className="d-flex">
                                    <span className="px-1">
                                      {structure.general.number}.
                                    </span>

                                    <span>{structure.general.name} </span>
                                  </span>
                                  <span className="text-small text-muted d-flex px-1">
                                    {structure.stage_type}
                                  </span>
                                </div>
                                <div className="d-flex justify-content-around align-items-center">
                                  <span className="text-small text-muted">
                                    {tournament.tournamentParticipants.length}/
                                    {structure.general.size} players
                                  </span>
                                  <span className="text-small text-muted mx-4">
                                    Pending
                                  </span>
                                  <span>
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        variant="success"
                                        id="dropdown-basic"
                                        className="align-text-end pr-0"
                                      >
                                        <Icon.ThreeDotsVertical
                                          size={20}
                                          color="#0cc4f2"
                                          className="pr-0 mr-0 "
                                        />
                                      </Dropdown.Toggle>

                                      <Dropdown.Menu style={{ width: "5rem" }}>
                                        <Dropdown.Item className="text-left">
                                          <Icon.Gear
                                            size={15}
                                            color="#0cc4f2"
                                          />
                                          <span className="textColor3 text-small link-btm-bar">
                                            Configure
                                          </span>
                                        </Dropdown.Item>
                                        <Dropdown.Item className="my-2">
                                          <Icon.Search
                                            size={15}
                                            color="#0cc4f2"
                                          />
                                          <span className="textColor3 text-small link-btm-bar">
                                            Results
                                          </span>
                                        </Dropdown.Item>
                                        <hr className="py-0 my-0" />
                                        <Dropdown.Item>
                                          <Icon.Trash size={13} color="red" />
                                          <span className="text-danger text-small link-btm-bar">
                                            Delete
                                          </span>
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </span>
                                </div>
                              </div>
                            ))}
                          </Card.Text>

                          <hr />
                          <Card.Text>
                            <Link
                              to={`/backoffice/projects/${tournament.name}/structures`}
                            >
                              <span className="textColor3 link-none-deco link-btm-bar all-stages ">
                                View all stages
                              </span>
                            </Link>
                          </Card.Text>
                        </>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ height: "16rem" }}>
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
                          <Icon.Gear size={15} />
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
                            <h3>0</h3>
                            <span>Pending</span>
                          </div>
                          <div className="text-success">
                            <h3>0</h3>
                            <span>Accepted</span>
                          </div>
                          <div className="text-secondary">
                            <h3>0</h3>
                            <span>Refused</span>
                          </div>
                          <div className="text-danger">
                            <h3>0</h3>
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
