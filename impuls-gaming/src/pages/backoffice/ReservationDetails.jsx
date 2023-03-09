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

const ReservationDetails = ({ visible, onhide, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                        <Button className="primary-btn textColor d-flex mr-3 px-1 align-items-center text-small justify-content-center">
                          <Icon.Envelope size={15} className="ml-0 pl-0" />
                          <span>send email</span>
                        </Button>

                        <Button className="primary-btn textColor d-flex px-1 mr-3 align-items-center text-small justify-content-center">
                          <Icon.Tv size={15} className="ml-0 pl-0" />
                          <span>assign station</span>
                        </Button>

                        <Button className="primary-btn textColor d-flex px-1 align-items-center text-small justify-content-center">
                          <Icon.Envelope size={15} className="ml-0 pl-0" />
                          <span>send email</span>
                        </Button>
                      </Col>
                    </Row>
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
                        {user.station_No ? (
                          <span>{user.station_No} </span>
                        ) : (
                          <span>N/A</span>
                        )}
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
                          <span>{user.hours} hours </span>
                        ) : (
                          <small>N/A</small>
                        )}
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col className="d-flex ">
                        <Icon.Check className="py-0 my-0 pl-0 ml-0" size={20} />
                        <span className="d-flex">Status </span>
                      </Col>
                      <Col className="d-flex  justify-content-end">
                        <span>Pending</span>
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
