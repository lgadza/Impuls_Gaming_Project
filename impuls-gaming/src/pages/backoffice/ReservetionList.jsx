import { Col, Row, Button, Form } from "react-bootstrap";

import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteReservation,
  getProjectsImgs,
  getReservations,
  getTournaments,
} from "../../redux/actions";
import Spinner from "../../components/Spinner";
import DeleteConfirm from "../../components/DeleteConfirm";
import { Card } from "react-bootstrap-v5";
import { format, compareAsc } from "date-fns";
import ReservationDetails from "./ReservationDetails";
const ReservationList = ({ projects }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [deleteItem, setDeleteItem] = useState(false);
  const [selectedReservations, setSelectedReservations] = useState([]);
  console.log(selectedReservations);
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const [showReservationDetails, setShowReservationDetails] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchEmail, setSearchEmail] = useState("");
  const [searchName, setSearchName] = useState("");
  const handleSearch = () => {
    search ? setSearch(false) : setSearch(true);
  };
  const handleCloseReservationDetails = () => setShowReservationDetails(false);

  const handleDeleteItem = () => {
    deleteItem === false ? setDeleteItem(true) : setDeleteItem(false);
  };

  const reservationList = useSelector(
    (state) => state.reservations.reservations
  );
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
        <h4 className="d-flex ml-5 my-4 ">Reservations</h4>

        <Row className="-d-flex  w-100 ml-auto organizer">
          <Col className="tournament-card-edit">
            <Card className="mb-4">
              <Card.Header className="d-flex">
                <h5>Reservation List</h5>
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
                  {!search ? (
                    <Link
                      onClick={handleSearch}
                      className="d-flex justify-content-end align-items-center my-1 main-container2 link-none-deco"
                    >
                      {isLoading ? (
                        <Spinner animation="grow" size="sm" />
                      ) : (
                        <>
                          <Icon.Search size={13} />
                          <span className="pr-3">Search</span>
                        </>
                      )}
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
              </Card.Header>
              <Card.Body>
                {search && (
                  <>
                    <Row className="mx-3 mt-3">
                      <Col>
                        <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                          <Form.Label className="d-flex">Name</Form.Label>
                          <Form.Control
                            type="text"
                            required
                            onChange={(e) => setSearchName(e.target.value)}
                          />
                        </Form.Group>
                        <div>
                          <div className="d-flex">
                            <span> Reservation status</span>
                          </div>

                          <div className="my-3 d-flex">
                            <Form.Check
                              type="radio"
                              name="status"
                              label="All"
                              // onClick={handleTrueAutoParticipantPlacement}
                              className="mr-3"
                              defaultChecked
                            />

                            <Form.Check
                              type="radio"
                              // onClick={handleFalseAutoParticipantPlacement}
                              className="mr-3"
                              name="status"
                              label="pending"
                            />
                            <Form.Check
                              type="radio"
                              // onClick={handleFalseAutoParticipantPlacement}
                              name="status"
                              label="completed"
                              className="mr-3"
                            />
                            <Form.Check
                              type="radio"
                              // onClick={handleFalseAutoParticipantPlacement}
                              name="status"
                              label="rejected"
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
                            onChange={(e) => setSearchEmail(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <hr />
                  </>
                )}
                <div className=" d-flex px-3 my-2 justify-content-between">
                  <div className="my-auto">
                    <span>
                      <strong>
                        {selectedReservations.length} reservations{" "}
                      </strong>
                      <span className="text-mute">
                        out of {reservationList.length}
                      </span>
                    </span>
                  </div>
                  <div className="ml-auto">
                    <Button
                      disabled={selectedReservations.length > 0 ? false : true}
                      type="submit"
                      onClick={handleDeleteSelectedReservations}
                      className="primary-btn textColor d-flex align-items-center text-small justify-content-center"
                    >
                      <Icon.Trash3Fill size={13} />
                      <span>Delete All</span>
                    </Button>
                  </div>
                </div>
                <hr />
                <div className="d-flex mb-3 bd-highlight justify-content-between text-success">
                  {/* <div className="d-flex  justify-content-between">
                    </div> */}
                  <span className="flex-grow-1 bd-highlight">Name</span>
                  <span className="flex-grow-1 bd-highlight">Email</span>
                  <span className=" flex-grow-1 bd-highlight">Date</span>
                  <span className=" flex-grow-1 bd-highlight">Time</span>
                  <span className=" flex-grow-1 bd-highlight">Hours</span>
                  <span className="flex-grow-1 bd-highlight">Station No</span>
                  <span className="flex-grow-1 bd-highlight">Status</span>
                  <span className="flex-grow-1 bd-highlight">No of People</span>
                  <span className="flex-grow-1 bd-highlight">Select</span>
                </div>
                <div>
                  {isLoading ? (
                    <div className="d-flex justify-content-center">
                      <Spinner />
                    </div>
                  ) : (
                    <div>
                      {reservationList.length > 0 ? (
                        <ul className="pl-0 w-100">
                          {reservationList.map((reservation, index) => {
                            return (
                              <li
                                onClick={() => {
                                  setUser(reservation);
                                  setShowReservationDetails(true);
                                }}
                                className="w-100 py-3 participant-list"
                                key={index}
                              >
                                <div className="d-flex  bd-highlight">
                                  {/* <div className="d-flex  justify-content-between">
                    </div> */}
                                  <span className="flex-grow-1 bd-highlight justify-content-center d-flex">
                                    {reservation.userName}
                                  </span>
                                  <span className="flex-grow-1 bd-highlight">
                                    {reservation.email}
                                  </span>
                                  <span className=" flex-grow-1 bd-highlight">
                                    {format(
                                      new Date(reservation.date),
                                      "EEE dd MMM"
                                    )}
                                  </span>
                                  <span className=" flex-grow-1 bd-highlight">
                                    {format(
                                      new Date(reservation.date).getTime(),
                                      "HH:mm"
                                    )}
                                  </span>
                                  {reservation.hours ? (
                                    <span className=" flex-grow-1 bd-highlight">
                                      {reservation.hours}
                                    </span>
                                  ) : (
                                    <span className=" flex-grow-1 bd-highlight">
                                      <small>N/A</small>
                                    </span>
                                  )}
                                  <span className="flex-grow-1 bd-highlight">
                                    {reservation.station_No}
                                  </span>
                                  {reservation.status ? (
                                    <span className="flex-grow-1 bd-highlight">
                                      <small
                                        className={`${
                                          reservation.status === "rejected"
                                            ? "text-danger"
                                            : reservation.status === "completed"
                                            ? "text-success"
                                            : ""
                                        }`}
                                      >
                                        {reservation.status}
                                      </small>
                                    </span>
                                  ) : (
                                    <span className="flex-grow-1 bd-highlight">
                                      <small>pending</small>
                                    </span>
                                  )}
                                  <span className="flex-grow-1 bd-highlight">
                                    {reservation.number}
                                  </span>
                                  {/* <span className="flex-grow-1 bd-highlight">
                                    Select
                                  </span> */}
                                  <span className=" d-flex align-items-center justify-content-center flex-grow-1 bd-highlight">
                                    <input
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (
                                          selectedReservations.includes(
                                            reservation._id
                                          )
                                        ) {
                                          const filteredSelectedReservations =
                                            selectedReservations.filter(
                                              (id) => id !== reservation._id
                                            );
                                          setSelectedReservations(
                                            filteredSelectedReservations
                                          );
                                        } else {
                                          setSelectedReservations([
                                            ...selectedReservations,
                                            reservation._id,
                                          ]);
                                        }
                                      }}
                                      className="mr-1  px-2"
                                      type="checkbox"
                                    />
                                    <Link
                                      onClick={async (e) => {
                                        e.stopPropagation();
                                        await dispatch(
                                          deleteReservation(reservation._id)
                                        );
                                        dispatch(getReservations());
                                      }}
                                    >
                                      <Icon.Trash3Fill size={13} color="red" />
                                    </Link>
                                  </span>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <div>
                          <h6>No reservations available</h6>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <hr />

                <div className=" d-flex px-3 my-2 justify-content-between">
                  <div className="my-auto">
                    <span>
                      <strong>
                        {selectedReservations.length} reservations{" "}
                      </strong>
                      <span className="text-mute">
                        out of {reservationList.length}
                      </span>
                    </span>
                  </div>
                  <div className="ml-auto">
                    <Button
                      disabled={selectedReservations.length > 0 ? false : true}
                      type="submit"
                      onClick={handleDeleteSelectedReservations}
                      className="primary-btn textColor d-flex align-items-center text-small justify-content-center"
                    >
                      <Icon.Trash3Fill size={13} />
                      <span>Delete All</span>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
      <ReservationDetails
        visible={showReservationDetails}
        onhide={handleCloseReservationDetails}
        user={user}
      />
      <DeleteConfirm
        visible={showDelete}
        onhide={handleCloseDelete}
        reservation={user}
      />
    </>
  );
};
export default ReservationList;
