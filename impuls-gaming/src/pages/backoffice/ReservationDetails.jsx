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

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format, compareAsc } from "date-fns";
import { editReservation, getReservations } from "../../redux/actions";
import { Alert } from "react-bootstrap-v5";
const ReservationDetails = ({ visible, onhide, user }) => {
  const [isEmail, setIsEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [stationNumber, setStationNumber] = useState(user.station_No);
  const [hours, setHours] = useState(user.hours);
  const [status, setStatus] = useState(user.status);
  const [isError, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editedReservationData = {
    hours,
    station_No: stationNumber,
    status,
  };
  console.log(editedReservationData, "RESERVATION DATA");
  useEffect(() => {
    const timer = setTimeout(() => isError, 3000);
    return () => clearTimeout(timer);
  }, [isEmail]);
  return (
    <Modal show={visible} onHide={onhide} className="modal-hieght textColor">
      <Modal.Body className="py-0 mt-3 px-4">
        {user && (
          <Container>
            <Row>
              <Card className="w-100">
                <Card.Header>
                  <h5 className="my-0">{user.userName} </h5>
                  <small>{user.email} </small>
                </Card.Header>
                <Card.Body className="px-0">
                  <Card.Text>
                    <Row>
                      <Col className="d-flex justify-content-end">
                        <Button
                          onClick={() =>
                            isEmail ? setIsEmail(false) : setIsEmail(true)
                          }
                          className="primary-btn textColor d-flex mr-3 px-1 align-items-center text-small justify-content-center"
                        >
                          <Icon.Envelope size={15} className="ml-0 pl-0" />
                          <span>send email</span>
                        </Button>

                        {/* <Button className="primary-btn textColor d-flex px-1 mr-3 align-items-center text-small justify-content-center">
                          <Icon.Tv size={15} className="ml-0 pl-0" />
                          <span>assign station</span>
                        </Button> */}
                      </Col>
                    </Row>
                    {isError && (
                      <Row className="mt-3">
                        <Col className="d-flex align-items-center">
                          <Icon.ExclamationTriangle
                            size={25}
                            className="text-warning"
                          />
                          <Alert variant="warning">{isError} </Alert>
                        </Col>
                      </Row>
                    )}
                    {isEmail && (
                      <Row>
                        <Col>
                          <Form.Group className="mb-3 d-flex  flex-column ">
                            <Form.Label className="mr-4 d-flex">
                              Email
                            </Form.Label>
                            <div className="send-content-container d-flex align-items-center">
                              <Form.Control
                                as="textarea"
                                rows={2}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="main-container2 "
                              />
                              {email && (
                                <Link>
                                  <Icon.Send
                                    // onClick={sendMessage}
                                    className="send-btn-icon p-2"
                                    size={30}
                                  />
                                </Link>
                              )}
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                    )}
                    <Row className="mt-3">
                      <Col className="d-flex">
                        <Icon.Stopwatch
                          className="py-0 my-0 pl-0 ml-0"
                          size={15}
                        />
                        <span className="d-flex">Date:</span>
                      </Col>
                      <Col className="d-flex  justify-content-end">
                        <span>
                          {" "}
                          {format(new Date(user.date), "EEE dd MMM")}
                        </span>
                        <span className="ml-1">
                          at {format(new Date(user.date).getTime(), "HH:mm")}
                        </span>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col className="d-flex ">
                        <Icon.People
                          className="py-0 my-0 pl-0 ml-0"
                          size={15}
                        />
                        <span className="d-flex">How many people?</span>
                      </Col>
                      <Col className="d-flex  justify-content-end">
                        <span>{user.number} people </span>
                      </Col>
                    </Row>
                    <hr />

                    <Row>
                      <Col className="d-flex ">
                        <Icon.Tv className="py-0 my-0 pl-0 ml-0" size={15} />
                        <span className="d-flex">Number Station </span>
                      </Col>
                      <Col className="d-flex  justify-content-end">
                        <h6 className="h5-station mr-4 mb-0 d-flex justify-content-center align-items-center ">
                          {user.station_No}{" "}
                        </h6>
                        <Form.Select
                          onChange={(e) => setStationNumber(e.target.value)}
                          className="textColor"
                        >
                          {user.station_No ? (
                            <option>
                              <h5 className="mx-4">{user.station_No}</h5>
                            </option>
                          ) : (
                            <option>N/A</option>
                          )}
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col className="d-flex ">
                        <Icon.HourglassSplit
                          className="py-0 my-0 pl-0 ml-0"
                          size={15}
                        />
                        <span className="d-flex">How many hours? </span>
                      </Col>
                      <Col className="d-flex  justify-content-end">
                        {user.hours ? (
                          <small className=" mr-4 mb-0 d-flex justify-content-center align-items-center ">
                            {user.hours} hours
                          </small>
                        ) : (
                          <small className="mr-4 py-2">N/A </small>
                        )}

                        <Form.Select
                          onChange={(e) => setHours(e.target.value)}
                          className="textColor"
                        >
                          {user.hours ? (
                            <option>
                              <h5>{user.hours}</h5>
                            </option>
                          ) : (
                            <option>N/A</option>
                          )}
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col className="d-flex ">
                        {user.status === "completed" ? (
                          <Icon.CheckAll
                            className="py-0 text-success my-0 pl-0 ml-0"
                            size={20}
                          />
                        ) : user.status === "rejected" ? (
                          <Icon.X
                            className="py-0 text-danger my-0 pl-0 ml-0"
                            size={20}
                          />
                        ) : (
                          <Icon.Check
                            className="py-0 my-0 pl-0 ml-0"
                            size={20}
                          />
                        )}
                        <span className="d-flex">Status </span>
                      </Col>
                      <Col className="d-flex  justify-content-end">
                        {user.status ? (
                          <small
                            className={`mr-4 py-2 mb-0 d-flex justify-content-center align-items-center ${
                              user.status === "rejected"
                                ? "text-danger"
                                : user.status === "completed"
                                ? "text-success"
                                : ""
                            } `}
                          >
                            {user.status}
                          </small>
                        ) : (
                          <small className="mr-4 py-2">pending</small>
                        )}

                        <Form.Select
                          onChange={(e) => setStatus(e.target.value)}
                          className="textColor"
                        >
                          {user.status ? (
                            <option>
                              <h5>{user.status}</h5>
                            </option>
                          ) : (
                            <option>pending</option>
                          )}
                          <option value="rejected">rejected</option>
                          <option value="completed">completed</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col>
                        <div>
                          <span>Notes:</span>
                        </div>
                        <Card>
                          <Card.Header className="px-1">
                            {user.comment ? (
                              <small>{user.comment}</small>
                            ) : (
                              <small>N/A</small>
                            )}
                          </Card.Header>
                        </Card>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col>
                        <Link
                          to=""
                          className="d-flex  mb-4  justify-content-start"
                        >
                          <Button
                            className=" text-center px-1 primary-btn w-50   textColor "
                            variant="primary"
                            onClick={async () => {
                              if (stationNumber || hours || status) {
                                await dispatch(
                                  editReservation(
                                    editedReservationData,
                                    user._id
                                  )
                                );
                                dispatch(getReservations());
                                onhide();
                              } else {
                                setError(
                                  "No Changes made,to update this reservation, Please change the current information"
                                );
                              }
                            }}
                          >
                            <span className="text-small">
                              Update Reservation
                            </span>
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        )}
      </Modal.Body>
    </Modal>
  );
};
export default ReservationDetails;
