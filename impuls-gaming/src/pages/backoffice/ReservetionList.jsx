import { Col, Row, Button } from "react-bootstrap";

import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
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
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const [showReservationDetails, setShowReservationDetails] = useState(false);
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
  return (
    <>
      <>
        <h4 className="d-flex ml-5 my-4 ">Reservations</h4>

        <Row className="-d-flex  w-100 ml-auto organizer">
          <Col className="tournament-card-edit">
            <Card className="mb-4">
              <Card.Header className="d-flex">
                <h5>Reservation List</h5>
              </Card.Header>
              <Card.Text>
                <div className=" d-flex px-3 my-2 justify-content-between">
                  <div className="my-auto">
                    <span>
                      <strong>5 reservations </strong>
                      <span className="text-mute">out of 45</span>
                    </span>
                  </div>
                  <div className="ml-auto">
                    <Button
                      //   disabled={selectedParticipant.length > 0 ? false : true}
                      //   type="submit"
                      //   onClick={handleDeleteSelectedParticipant}
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
                  {/* <span className="flex-grow-1 bd-highlight">Comments</span> */}
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
                                  {/* {reservation.comment ? (
                                    <span className="flex-grow-1 bd-highlight">
                                      <small>{reservation.comment}</small>
                                    </span>
                                  ) : (
                                    <span className="flex-grow-1 bd-highlight">
                                      <small>N/A</small>
                                    </span>
                                  )} */}
                                  <span className="flex-grow-1 bd-highlight">
                                    {reservation.number}
                                  </span>
                                  {/* <span className="flex-grow-1 bd-highlight">
                                    Select
                                  </span> */}
                                  <span className=" d-flex align-items-center justify-content-center flex-grow-1 bd-highlight">
                                    <input
                                      //   onClick={(e) => {
                                      //     if (
                                      //       selectedParticipant.includes(
                                      //         participant._id
                                      //       )
                                      //     ) {
                                      //       const filteredSelectedParticipant =
                                      //         selectedParticipant.filter(
                                      //           (id) => id !== participant._id
                                      //         );
                                      //       setSelectedParticipant(
                                      //         filteredSelectedParticipant
                                      //       );
                                      //     } else {
                                      //       setSelectedParticipant([
                                      //         ...selectedParticipant,
                                      //         participant._id,
                                      //       ]);
                                      //     }
                                      //   }}
                                      className="mr-1  px-2"
                                      type="checkbox"
                                    />
                                    <Link
                                    //   onClick={() => {
                                    //     setDeleteParticipantName(
                                    //       `${participant.name} ${participant.surname}`
                                    //     );
                                    //     setShowDelete(true);
                                    //     setDeleteParticipantId(participant._id);
                                    //   }}
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
              </Card.Text>
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
