import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap-v5";
import * as Icon from "react-bootstrap-icons";
import "../styling/reservations.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTournament, getTournaments } from "../redux/actions";

const Reservations = ({ visible, onhide }) => {
  const dispatch = useDispatch();

  const handleData = async () => {
    await onhide();
  };

  return (
    <Modal
      show={visible}
      size="lg"
      backdrop="static"
      keyboard={false}
      //   fullscreen={true}
      onHide={onhide}
      className="m-0"
    >
      <Modal.Header closeButton>
        <Modal.Title>Reservations</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container
          fluid
          className="reservations-stations-container  textColor py-5"
        >
          <Row className="mx-0 px-0">
            {[...Array(4)].map((station, index) => {
              return (
                <Col key={index} className="mb-5">
                  <div className=" mt-4 px-2 d-flex align-items-center station free station-1">
                    <div className="w-100 d-flex justify-content-between ">
                      <h6>{index + 1}</h6>
                      <span className="d-flex flex-column justify-content-end">
                        <span className="d-flex align-items-center">
                          <Icon.Watch size={15} />
                          <span>14:00</span>
                        </span>
                        <span className="d-flex align-items-center">
                          <Icon.Person size={15} />
                          <span>Louis Gadza</span>
                        </span>{" "}
                      </span>
                    </div>
                    <span className="player-chair chair-1"></span>
                    <span className="player-chair chair-2"></span>
                    <span className="player-chair chair-3"></span>
                    <span className="player-chair chair-4"></span>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row className="mx-0 px-0">
            {[...Array(4)].map((station, index) => {
              return (
                <Col key={index} className="mb-5">
                  <div className=" mt-4 px-2 d-flex align-items-center station reserved station-1">
                    <div className="w-100 d-flex justify-content-between ">
                      <h6>{index + 1}</h6>
                      <span className="d-flex flex-column justify-content-end">
                        <span className="d-flex align-items-center">
                          <Icon.Watch size={15} />
                          <span>14:00</span>
                        </span>
                        <span className="d-flex align-items-center">
                          <Icon.Person size={15} />
                          <span>Louis Gadza</span>
                        </span>{" "}
                      </span>
                    </div>
                    <span className="player-chair chair-1"></span>
                    <span className="player-chair chair-2"></span>
                    <span className="player-chair chair-3"></span>
                    <span className="player-chair chair-4"></span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default Reservations;
