import {
  Modal,
  Row,
  Container,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getReservations,
  getTournaments,
  postReservation,
} from "../redux/actions";
import { format, compareAsc } from "date-fns";
import DatePicker from "react-datepicker";
import getDay from "date-fns/fp/getDay";
import { setHours, setMinutes } from "date-fns/fp";

const MakeReservation = ({ visible, onhide, tournamentId, stationNo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservationsMade = useSelector(
    (state) => state.reservations.reservations
  );

  const [discipline, setDiscipline] = useState("");
  const [people, setPeople] = useState(1);
  const [playHours, setPlayHours] = useState(1);
  const [hover, setHover] = useState(0);
  const [isNotes, setIsNotes] = useState(false);
  const [notes, setNotes] = useState("");
  const [reservationDate, setReservationDate] = useState(new Date());
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  //  BOOKED HOUR
  function isHourBooked(bookings, date, hour) {
    const bookingsForHour = bookings.filter((booking) => {
      const bookingDate = new Date(booking.date);
      return (
        bookingDate.getFullYear() === date.getFullYear() &&
        bookingDate.getMonth() === date.getMonth() &&
        bookingDate.getDate() === date.getDate() &&
        bookingDate.getHours() === hour
      );
    });

    return bookingsForHour.length >= 9;
  }

  //  BOOKED HOUR

  function getExcludedHours(bookings) {
    // Create an array of 9 slots, one for each table
    const tableSlots = new Array(9).fill(false);

    // Loop through the bookings and mark the corresponding slot as true
    for (const booking of bookings) {
      const slot = booking.time.getHours();
      tableSlots[booking.tableNumber - 1] = true;
    }

    // Create an array of excluded hours based on the marked slots
    const excludedHours = [];
    for (let i = 0; i < tableSlots.length; i++) {
      if (tableSlots[i]) {
        excludedHours.push(i);
      }
    }

    return excludedHours;
  }
  // NIFHYUYTXCHJKIUKYJTDGUYFG
  const openTime = (time, bookings, date, hour) => {
    bookings = reservationsMade;
    date = reservationDate;
    const selectedDate = new Date(time);
    const selectedHour = selectedDate.getHours();
    const bookingsForHour = bookings.filter((booking) => {
      const bookingDate = new Date(booking.date);
      return (
        bookingDate.getFullYear() === date.getFullYear() &&
        bookingDate.getMonth() === date.getMonth() &&
        bookingDate.getDate() === date.getDate()
        // bookingDate.getHours() === date.getHours()
      );
    });

    if (selectedHour <= 21 && selectedHour > 8) {
      return true;
    } else if (bookingsForHour.length >= 3) {
      return true;
    }

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  console.log(discipline, "discipline");
  const reservationData = {
    date: reservationDate,
    station_No: stationNo,
    userName,
    email,
    notes,
    number: people,
    hours: playHours,
    discipline,
  };

  useEffect(() => {
    dispatch(getReservations());
  }, []);
  return (
    <Modal
      show={visible}
      //   size="lg"
      onHide={onhide}
      //   centered
      //   className="modal-dialog modal-dialog-right modal-dialog-bottom"
    >
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-between w-100">
          <h6>Choose a station</h6>
          <Link>
            <Icon.X
              onClick={onhide}
              size={20}
              className="d-flex justify-content-end btn-close mr-0 pr-0 textColor"
            />
          </Link>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body scrollable={true} className="py-0 mt-3 px-4">
        <Container>
          <Row>
            <Col className="d-flex justify-content-end">
              <span className="d-flex flex-column">
                <span>{format(new Date().getTime(), "HH:mm")}</span>
                <span>{format(new Date(), "EEE dd MMM yyyy")}</span>
              </span>
              {/* <span className="d-flex flex-column">
                <span>Station No</span>
                <h5 className="h5-station d-flex justify-content-center align-items-center">
                  {stationNo}
                </h5>
              </span> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="my-3 d-flex flex-column justify-content-start">
                <Form.Label className="d-flex">Date and Time</Form.Label>
                <Form.Group className="">
                  <DatePicker
                    className="datepicker py-2 px-4 w-100"
                    selected={reservationDate}
                    placeholderText={new Date()}
                    onChange={(date) => setReservationDate(date)}
                    minDate={new Date()}
                    filterDate={isWeekday}
                    showTimeSelect
                    filterTime={openTime}
                    excludeTimes={[
                      setHours(setMinutes(new Date(), 0), 17),
                      setHours(setMinutes(new Date(), 30), 18),
                      setHours(setMinutes(new Date(), 30), 19),
                      setHours(setMinutes(new Date(), 30), 17),
                    ]}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    // dateFormat="Pp"
                  />
                </Form.Group>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="my-3 d-flex flex-column justify-content-start">
                  <Form.Label className="d-flex">How many hour?</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="how many hours?"
                    value={playHours}
                    onChange={(e) => setPlayHours(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="my-3 d-flex flex-column justify-content-start">
                  <Form.Label className="d-flex">Discipline</Form.Label>
                  {/* <Form.Control
                    type="number"
                    placeholder="how many hours?"
                    value={playHours}
                    onChange={(e) => setPlayHours(e.target.value)}
                  /> */}
                  <Form.Select
                    onChange={(e) => setDiscipline(e.target.value)}
                    className="textColor py-2"
                  >
                    <option>Select a discipline</option>
                    <option value="Mortal Kombat">Mortal Kombat</option>
                    <option value="Call of Duty: Morden Warfare">
                      Call of Duty: Morden Warfare
                    </option>
                    <option value="FIFA 23">FIFA 23</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="my-3 d-flex flex-column justify-content-start">
                  <Form.Label className="d-flex">username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="enter username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="my-3 d-flex flex-column justify-content-start">
                  <Form.Label className="d-flex">email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="enter email"
                    value={email}
                    onChange={handleEmail}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <span>How many people</span>
              <div className="d-flex mt-2 align-items-center justify-content-between">
                {[...Array(10)].map((player, index) => {
                  return (
                    <Link
                      className={`d-flex flex-column  justify-content-center align-items-center textColor`}
                    >
                      <Icon.PersonFill
                        onClick={() => {
                          setPeople(index + 1);
                        }}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(people)}
                        className={`px-0 mx-0 ${
                          index < (hover || people) ? "on" : "text-muted"
                        }  `}
                        size={20}
                      />
                      <span
                        className={`${
                          index < (hover || people) ? "on" : "text-muted"
                        }`}
                      >
                        {index + 1}{" "}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link
                onClick={() => setIsNotes(true)}
                className="d-flex my-2 align-items-center textColor"
              >
                <Icon.Plus className="mx-0 pl-0" size={15} />
                <span>Add a notes</span>
              </Link>
            </Col>
          </Row>
          {isNotes && (
            <Row>
              <Col>
                <Form.Group className="mb-3 d-flex flex-column ">
                  <Form.Label className="mr-4 d-flex">Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          )}
          <Row>
            <Col>
              <Link to="" className="d-flex  mb-4  justify-content-start">
                <Button
                  className=" text-center px-3 primary-btn w-25   textColor "
                  disabled={!reservationDate || !email || !userName}
                  variant="primary"
                  onClick={async () => {
                    await dispatch(postReservation(reservationData));
                    dispatch(getReservations());
                    onhide();
                  }}
                >
                  <span className="text-small">Reserve</span>
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default MakeReservation;
