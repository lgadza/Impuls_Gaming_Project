import {
  Container,
  Col,
  Row,
  Card,
  Button,
  Alert,
  Form,
} from "react-bootstrap";

import BackOfficeNav from "./BackOfficeNav";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  editOneTournamentParticipant,
  getTournaments,
  getUsers,
} from "../../redux/actions/index.js";
import { Spinner } from "react-bootstrap-v5";

const Participants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );

  const [checkedIn, setCheckedIn] = useState(false);
  const [clicked, setClicked] = useState("");
  const users = tournament.tournamentParticipants;
  useEffect(() => {
    // const URL = `${process.env.REACT_APP_BE_PROD_URL}/users?limit=10`;
    // dispatch(getUsers(URL));
    dispatch(getTournaments());
  }, []);
  const isLoading = useSelector((state) => state.editParticipant.isLoading);
  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setUpdate(true);
  };
  const user = useSelector((state) => state.me.me);
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    search ? setSearch(false) : setSearch(true);
  };
  const tournamentParticipant = useSelector(
    (state) => state.participant.participant
  );
  console.log(isLoading);
  return (
    <Container fluid className="main-container2 textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav data={tournament} user={user} page={"participants"} />
        </Col>
        {users.length >= 0 && (
          <Col lg={10} className="my-5 px-5">
            {update && (
              <div className="registration-card mx-auto">
                <Alert key={"success"} variant={"success"}>
                  <Icon.CheckCircle size={15} />
                  <span>Settings have been successfully updated.</span>
                </Alert>
              </div>
            )}
            <Card className="registration-card mx-auto mb-5 main-container2">
              <Card.Body>
                <div className="d-flex ">
                  <h3 className="d-flex my-1">Participants</h3>
                  <div className="d-flex ml-auto">
                    <Link className="d-flex justify-content-end my-1 mr-2 link-none-deco">
                      <Button
                        type="submit"
                        onClick={handleUpdate}
                        className="primary-btn textColor"
                      >
                        <Icon.Plus size={20} />
                        Add
                      </Button>
                    </Link>
                    <Link className="d-flex justify-content-end my-1 link-none-deco">
                      <Button
                        type="submit"
                        onClick={handleUpdate}
                        className="primary-btn textColor"
                      >
                        <Icon.ListOl size={20} />
                        Fill All
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="registration-card mx-auto mb-4">
              <Card.Body>
                <div className="d-flex ">
                  <Col className="d-flex flex-column border-right">
                    <h1>{users.length}</h1>
                    <span>participants</span>
                  </Col>
                  <Col className="d-flex flex-column  border-right">
                    <h1 className=" text-success">{users.length}</h1>
                    <span className=" text-success"> Checked-in </span>
                  </Col>
                  <Col className="d-flex flex-column ml-auto">
                    <h1>{tournament.size}</h1>
                    <span>Tournament size</span>
                  </Col>
                </div>
              </Card.Body>
            </Card>
            <Card className="registration-card mx-auto">
              <Card.Header>
                <div className="d-flex ">
                  <h3 className="d-flex my-1">List of participants</h3>
                  <div className="d-flex ml-auto">
                    <Link className="d-flex justify-content-end align-items-center main-container2 my-1 mr-2 link-none-deco">
                      <Icon.ArrowClockwise size={20} />
                      <span className="pr-3">Refresh</span>
                    </Link>
                    {!search ? (
                      <Link
                        onClick={handleSearch}
                        className="d-flex justify-content-end align-items-center my-1 main-container2 link-none-deco"
                      >
                        <Icon.Search size={20} />
                        <span className="pr-3">Search</span>
                      </Link>
                    ) : (
                      <Link
                        onClick={handleSearch}
                        className="d-flex justify-content-end align-items-center my-1 main-container2 link-none-deco"
                      >
                        <Icon.X size={20} />
                        <span className="pr-3">Hide search</span>
                      </Link>
                    )}
                  </div>
                </div>
              </Card.Header>

              <Card.Body>
                <Card.Text>
                  {search && (
                    <>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                            <Form.Label className="d-flex">Name</Form.Label>
                            <Form.Control
                              type="text"
                              required
                              // onChange={handleNumber}
                            />
                          </Form.Group>
                          <div>
                            <div className="d-flex">
                              <span>Check-in status</span>
                            </div>

                            <div className="my-3 d-flex">
                              <Form.Check
                                type="radio"
                                name="autoPlacement"
                                label="All"
                                // onClick={handleTrueAutoParticipantPlacement}
                                className="mr-3"
                                defaultChecked
                              />

                              <Form.Check
                                type="radio"
                                // onClick={handleFalseAutoParticipantPlacement}
                                className="mr-3"
                                name="autoPlacement"
                                label="Checked in"
                              />
                              <Form.Check
                                type="radio"
                                // onClick={handleFalseAutoParticipantPlacement}
                                name="autoPlacement"
                                label="Not checked in"
                              />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                            <Form.Label className="d-flex">Email</Form.Label>
                            <Form.Control
                              type="email"
                              required
                              // onChange={handleSize}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <hr />
                    </>
                  )}
                  <div className=" d-flex justify-content-between">
                    <div className="my-auto">
                      <span>
                        <strong>{users.length} participants </strong>
                        <span className="text-mute">out of 36</span>
                      </span>
                    </div>
                    <div className="ml-auto">
                      <Button
                        disabled={true}
                        type="submit"
                        //   onClick={handleUpdate}
                        className="primary-btn textColor"
                      >
                        <Icon.Trash3Fill size={20} />
                        Delete All
                      </Button>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex mb-3 bd-highlight justify-content-between text-success">
                    {/* <div className="d-flex  justify-content-between">
                    </div> */}
                    <span className="flex-grow-1 bd-highlight">Status</span>
                    <span className=" flex-grow-1 bd-highlight">Name</span>
                    <span className="flex-grow-1 bd-highlight">Email</span>
                    <span className="flex-grow-1 bd-highlight">Select</span>
                  </div>

                  <div>
                    {users.length > 0 && (
                      <ul className="pl-0 w-100">
                        {users.map((participant, index) => (
                          <li className="w-100 participant-list" key={index}>
                            <div className="d-flex justify-content-between px-2 py-3 bd-highligh">
                              {/* <div className="d-flex align-items-center"> */}
                              {tournamentParticipant.checkedIn && !isLoading ? (
                                <span className=" d-flex align-items-center justify-content-center flex-grow-1 bd-highlight">
                                  <Icon.CheckCircleFill
                                    size={15}
                                    color="green"
                                    className="mx-0 px-0"
                                  />
                                  <span className="text-small text-muted pl-1">
                                    Checked-in
                                  </span>
                                </span>
                              ) : (
                                <span className=" d-flex align-items-center justify-content-center flex-grow-1 bd-highlight">
                                  <Icon.XCircleFill size={15} color="gray" />
                                  <span className="text-small text-muted">
                                    Not checked in
                                  </span>
                                </span>
                              )}

                              {isLoading && clicked && (
                                <Spinner animation="grow" size="sm" />
                              )}

                              <span className="flex-grow-1 bd-highlight">
                                {participant.name} {participant.surname}
                              </span>
                              {/* </div> */}

                              <div className="flex-grow-1 bd-highlight">
                                <span>{participant.email} </span>
                              </div>

                              <div className=" d-flex align-items-center justify-content-center flex-grow-1 bd-highlight">
                                <Link
                                  onClick={() => {
                                    checkedIn
                                      ? setCheckedIn(false)
                                      : setCheckedIn(true);
                                    setClicked("clicked");
                                  }}
                                >
                                  {checkedIn ? (
                                    <Icon.ToggleOn
                                      color="green"
                                      size={20}
                                      onClick={() =>
                                        dispatch(
                                          editOneTournamentParticipant(
                                            tournament._id,
                                            participant._id,
                                            { checkedIn: true }
                                          )
                                        )
                                      }
                                    />
                                  ) : (
                                    <Icon.ToggleOff
                                      size={20}
                                      color="gray"
                                      onClick={() =>
                                        dispatch(
                                          editOneTournamentParticipant(
                                            tournament._id,
                                            participant._id,
                                            { checkedIn: false }
                                          )
                                        )
                                      }
                                    />
                                  )}
                                </Link>

                                <input className="mr-1  px-2" type="checkbox" />
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {users.length === 0 && (
                    <>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="mx-auto my-4">
                          <strong>No participants found</strong>
                        </span>
                      </div>
                    </>
                  )}
                  {/* <div className="d-flex justify-content-center mb-2">
                    {users.links.first && (
                      <Button
                        type="submit"
                        variant="outline-dark"
                        onClick={() => dispatch(getUsers(users.links.first))}
                        className=" mx-1 text-dark"
                      >
                        First
                      </Button>
                    )}
                    {users.links.prev && (
                      <Button
                        type="submit"
                        variant="outline-dark"
                        onClick={() => dispatch(getUsers(users.links.prev))}
                        className=" mx-1 text-dark"
                      >
                        Back
                      </Button>
                    )}
                    {users.links.next && (
                      <Button
                        type="submit"
                        variant="outline-dark"
                        onClick={() => dispatch(getUsers(users.links.next))}
                        className=" mx-1 text-dark"
                      >
                        Next
                      </Button>
                    )}
                    {users.links.last && (
                      <Button
                        type="submit"
                        variant="outline-dark"
                        onClick={() => dispatch(getUsers(users.links.last))}
                        className=" mx-1 text-dark"
                      >
                        Last
                      </Button>
                    )}
                  </div> */}
                  <div className="d-flex">
                    <div className="my-auto">
                      <span>
                        <strong>0 participants </strong>
                        <span className="text-mute">out of {users.length}</span>
                      </span>
                    </div>

                    <div className="ml-auto">
                      <Button
                        disabled={true}
                        type="submit"
                        //   onClick={handleUpdate}
                        className="primary-btn textColor"
                      >
                        <Icon.Trash3Fill size={20} />
                        Delete All
                      </Button>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};
export default Participants;
