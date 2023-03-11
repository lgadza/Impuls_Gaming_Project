import { Col, Row, Button, Form, Container, Alert } from "react-bootstrap";

import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteReservation, getReservations } from "../../redux/actions";
import Spinner from "../../components/Spinner";
import DeleteConfirm from "../../components/DeleteConfirm";
import { Card } from "react-bootstrap-v5";
import { format, compareAsc } from "date-fns";

import MakeReservation from "../../components/MakeReservation";
const ReservationStations = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [deleteItem, setDeleteItem] = useState(false);
  const [selectedReservations, setSelectedReservations] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const [showReservationDetails, setShowReservationDetails] = useState(false);

  const handleCloseReservationDetails = () => setShowReservationDetails(false);
  const [showMakeReservations, setShowMakeReservation] = useState(false);
  const [stationNumber, setStationNumber] = useState(null);
  const handleHideMakeReservation = () => setShowMakeReservation(false);
  const handleDeleteItem = () => {
    deleteItem === false ? setDeleteItem(true) : setDeleteItem(false);
  };
  const reservations = useSelector((state) => state.reservations.reservations);

  useEffect(() => {
    dispatch(getReservations());
  }, []);
  const isLoading = useSelector((state) => state.reservations.isLoading);
  const handleDeleteSelectedReservations = async () => {
    for (let i = 0; i < selectedReservations.length; i++) {
      await dispatch(deleteReservation(selectedReservations[i]));
    }
    dispatch(getReservations());
    setSelectedReservations([]);
  };
  return (
    <>
      <>
        <h4 className="d-flex ml-5 my-4 ">Stations</h4>

        <Row className="-d-flex  w-100 ml-auto organizer">
          <Col className="tournament-card-edit">
            <Card className="mb-4">
              <Card.Header className="d-flex">
                <h5>Station setUp</h5>
                <div className="d-flex ml-auto">
                  {isLoading && <Spinner animation="grow" size="sm" />}
                  {!isLoading && (
                    <Link
                      onClick={() => dispatch(getReservations())}
                      className="d-flex justify-content-end align-items-center main-container2 my-1 mr-2 link-none-deco"
                    >
                      <Icon.ArrowClockwise size={13} />
                      <span className="pr-3">Refresh</span>
                    </Link>
                  )}
                </div>
              </Card.Header>
              <Card.Text>
                <Container className="reservations-stations-container">
                  <Row className="mt-3">
                    <Col>
                      <div className="registration-card mx-auto ">
                        <Alert key={"success"} variant={"success"}>
                          <Icon.CheckCircle size={15} />
                          <span>Reservation is successful</span>
                        </Alert>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="d-flex justify-content-end mt-3 px-5 mx-2">
                        <div className="d-flex">
                          <Link
                            to=""
                            onClick={() => setShowMakeReservation(true)}
                            className="d-flex  mb-4  justify-content-end"
                          >
                            <Button
                              className=" text-center px-3 primary-btn w-100 d-flex align-items-center   textColor "
                              variant="primary"
                            >
                              <Icon.SlashCircle className="ml-0" size={15} />
                              <span className="text-small">Block stations</span>
                            </Button>
                          </Link>
                          <Link
                            to=""
                            onClick={() => setShowMakeReservation(true)}
                            className="d-flex  mb-4 ml-3 justify-content-end"
                          >
                            <Button
                              className=" text-center px-3 primary-btn w-100 d-flex align-items-center  textColor "
                              variant="primary"
                            >
                              <Icon.Plus className="ml-0" size={15} />
                              <span className="text-small">
                                NEW RESERVATION
                              </span>
                            </Button>
                          </Link>
                          <Link
                            to=""
                            className="d-flex mb-4 ml-3 justify-content-end"
                          >
                            <Button
                              className=" text-center bg-warning text-dark d-flex align-items-center px-3 primary-btn w-100"
                              variant="primary"
                            >
                              <span className="mr-3 text-small">6</span>
                              <span className="text-small">
                                REMAINING STATIONS
                              </span>
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
                          (reservation) =>
                            reservation.station_No === index &&
                            reservation.status === "pending"
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
                                            new Date(
                                              reservation.date
                                            ).getTime(),
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
                                        <span className="ml-1">
                                          {reservation.number}
                                        </span>
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
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </>
      <MakeReservation
        visible={showMakeReservations}
        onhide={handleHideMakeReservation}
        stationNo={stationNumber}
      />

      <DeleteConfirm
        visible={showDelete}
        onhide={handleCloseDelete}
        reservation={user}
      />
    </>
  );
};
export default ReservationStations;
