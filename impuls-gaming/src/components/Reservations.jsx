import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap-v5";
import * as Icon from "react-bootstrap-icons";
import "../styling/reservations.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTournament, getTournaments } from "../redux/actions";
import NavigationBar from "./NavigationBar";
import MakeReservation from "./MakeReservation";

const Reservations = ({ visible, onhide }) => {
  const dispatch = useDispatch();

  const handleData = async () => {
    await onhide();
  };
  const [stationNumber, setStationNumber] = useState(null);
  const [showMakeReservations, setShowMakeReservation] = useState(false);
  const handleHideMakeReservation = () => setShowMakeReservation(false);
  return (
    <Modal
      show={visible}
      size="xl"
      onHide={onhide}
      className="reservations-stations-container textColor"
    >
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-between w-100">
          <h5>Reserve a station now</h5>
          <Link>
            <Icon.X
              onClick={onhide}
              size={30}
              className="d-flex justify-content-end btn-close mr-0 pr-0 textColor"
            />
          </Link>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body scrollable={true} className="py-0 mt-3 px-4">
        <Container>
          <Row>
            <Col className="d-flex justify-content-end">
              <div className="d-flex">
                <Link
                  to=""
                  onClick={() => setShowMakeReservation(true)}
                  className="d-flex  mb-4  justify-content-end"
                >
                  <Button
                    className=" text-center px-3 primary-btn w-100   textColor "
                    variant="primary"
                  >
                    <Icon.Plus className="ml-0" size={15} />
                    <span className="text-small">NEW RESERVATION</span>
                  </Button>
                </Link>
                <Link to="" className="d-flex mb-4 ml-3 justify-content-end">
                  <Button
                    className=" text-center bg-warning text-dark px-3 primary-btn w-100"
                    variant="primary"
                  >
                    <span className="mr-3 text-small">6</span>
                    <span className="text-small">REMAINING STATIONS</span>
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            {[...Array(12)].map((station, index) => {
              return (
                <Col
                  lg={4}
                  key={index}
                  className="pb-5 d-flex justify-content-center"
                >
                  <Link
                    onClick={() => setStationNumber(index + 1)}
                    className=" mt-4 px-2 d-flex align-items-center station free station-1 textColor"
                  >
                    <div className="w-100 d-flex justify-content-between ">
                      <span className="d-flex flex-column justify-content-end">
                        <span className="d-flex align-items-center">
                          <Icon.Watch size={15} className="pl-0 ml-0" />
                          <span>14:00</span>
                        </span>
                        <span className="d-flex align-items-center">
                          <Icon.Person size={15} className="pl-0 ml-0" />
                          <span>Louis Gadza</span>
                        </span>{" "}
                      </span>
                      <h6>{index + 1}</h6>
                    </div>
                    <span className="player-chair chair-1"></span>
                    <span className="player-chair chair-2"></span>
                    <span className="player-chair chair-3"></span>
                    <span className="player-chair chair-4"></span>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Modal.Body>
      <MakeReservation
        visible={showMakeReservations}
        onhide={handleHideMakeReservation}
        stationNo={stationNumber}
      />
    </Modal>
  );
};
export default Reservations;
