import {
  Modal,
  Row,
  Container,
  Col,
  Button,
  Form,
  Alert,
} from "react-bootstrap-v5";
import Spinner from "./Spinner";
import * as Icon from "react-bootstrap-icons";
import "../styling/reservations.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTournament,
  getReservations,
  getTournaments,
} from "../redux/actions";
import NavigationBar from "./NavigationBar";
import MakeReservation from "./MakeReservation";
import logo from "../img/impuls logo.png";
import { format, compareAsc } from "date-fns";

const Reservations = ({ visible, onhide }) => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const isLoading = useSelector((state) => state.reservations.isLoading);
  const handleData = async () => {
    await onhide();
  };
  const [remainingStations, setRemainingStations] = useState("");
  const [stationNumber, setStationNumber] = useState(null);
  const [showMakeReservations, setShowMakeReservation] = useState(false);
  const handleHideMakeReservation = () => setShowMakeReservation(false);
  useEffect(() => {
    dispatch(getReservations());
  }, []);
  return (
    <Container className="main-container reservations-bg" fluid>
      <div className="reservation-cover"></div>
      <Row className="giftcard-preview-nav py-2 ">
        <Col className="d-flex flex-column ml-5">
          <Link className="mr-auto" to={"/"}>
            <img className="logo-img " src={logo} alt="" />
          </Link>
          <span className="mr-auto textColor">LIVE EXPIRIENCE</span>
        </Col>
      </Row>
      <Container className="reservations-stations-container">
        <Row className="mt-5">
          <Col>
            <div className="registration-card mx-auto ">
              <Alert key={"success"} variant={"success"}>
                <Icon.CheckCircle size={15} />
                <span>
                  Reservation is successful, we've sent an email as a
                  confirmation
                </span>
              </Alert>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-between mt-5 px-5 mx-2">
              <h4>Reserve a station now</h4>

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
            </div>
          </Col>
        </Row>
        {isLoading ? (
          <div className="d-flex my-5 justify-content-center">
            <Spinner />
          </div>
        ) : (
          <Row>
            {[...Array(9)].map((stations, index) => {
              index++;
              stations = reservations;
              const reservation = reservations.find(
                (No) => No.station_No === index
              );
              // let counter = 0;
              if (reservation) {
                // counter++;
                // setRemainingStations(Number(9 - counter));
                return (
                  <Col
                    xs={6}
                    lg={4}
                    key={index}
                    className="pb-5 d-flex justify-content-center"
                    onClick={() => setShowMakeReservation(true)}
                  >
                    <Link
                      onClick={() => setStationNumber(index)}
                      className=" mt-4 px-2 d-flex align-items-center station reserved station-1 textColor"
                    >
                      <div className="w-100 d-flex justify-content-between ">
                        <span className="d-flex flex-column justify-content-end">
                          <span className="d-flex align-items-center my-2">
                            {/* <Icon.Watch size={15} className="pl-0 ml-0" /> */}
                            <span className="reserve-info d-flex flex-column justify-content-start align-items-start">
                              <span>
                                {format(
                                  new Date(reservation.date).getTime(),
                                  "HH:mm"
                                )}
                              </span>
                              <span>
                                {format(
                                  new Date(reservation.date),
                                  "EEE dd MMM"
                                )}
                              </span>
                            </span>
                          </span>
                          <span className="d-flex align-items-center">
                            <span className="d-flex align-items-center">
                              <Icon.PersonFill
                                size={15}
                                className="p-0 mb-1 m-0"
                              />
                              <span className="ml-1">{reservation.number}</span>
                            </span>
                            <span className="reserve-info mx-2">
                              {reservation.userName}
                            </span>
                          </span>{" "}
                        </span>
                        <h6 className="d-flex align-items-center justify-content-center">
                          {index}
                        </h6>
                      </div>
                      {/* <span className="player-chair chair-1"></span>
                  <span className="player-chair chair-2"></span>
                  <span className="player-chair chair-3"></span>
                  <span className="player-chair chair-4"></span> */}
                    </Link>
                  </Col>
                );
              } else {
                return (
                  <Col
                    xs={6}
                    lg={4}
                    key={index}
                    className="pb-5 d-flex justify-content-center"
                    onClick={() => setShowMakeReservation(true)}
                  >
                    <Link
                      onClick={() => setStationNumber(index)}
                      className=" mt-4 px-2 d-flex align-items-center station free station-1 textColor"
                    >
                      <div className="w-100 d-flex justify-content-between ">
                        <span className="d-flex flex-column justify-content-end">
                          <span className="d-flex align-items-center">
                            <strong className="reserve-info">
                              Free for Reservation
                            </strong>
                          </span>{" "}
                        </span>
                        <h6 className="d-flex align-items-center justify-content-center">
                          {index}
                        </h6>
                      </div>
                      {/* <span className="player-chair chair-1"></span>
                  <span className="player-chair chair-2"></span>
                  <span className="player-chair chair-3"></span>
                  <span className="player-chair chair-4"></span> */}
                    </Link>
                  </Col>
                );
              }
            })}
          </Row>
        )}

        <Row>
          <Col className="d-flex  mb-4  justify-content-end">
            <Link to="/">
              <Button
                className="px-3 primary-btn  w-100 d-flex  textColor align-items-center "
                variant="primary"
              >
                <Icon.ArrowLeft className="pl-0 ml-0" size={20} />
                <span>Back</span>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <MakeReservation
        visible={showMakeReservations}
        onhide={handleHideMakeReservation}
        stationNo={stationNumber}
      />
    </Container>
  );
};
export default Reservations;
