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
import { getTournaments } from "../redux/actions";
import { format, compareAsc } from "date-fns";
import DatePicker from "react-datepicker";

const MakeReservation = ({ visible, onhide, tournamentId, stationNo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tournaments = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournaments.tournaments.find(
    (name) => name.name === tournamentId
  );
  const [isComment, setIsComment] = useState(false);
  const [comment, setComment] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
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
            <Col className="d-flex justify-content-between">
              <span className="d-flex flex-column">
                <span>{format(new Date().getTime(), "HH:mm")}</span>
                <span>{format(new Date(), "EEE dd MMM yyyy")}</span>
              </span>
              <span className="d-flex flex-column">
                <span>Station No</span>
                <h3>{stationNo}</h3>
              </span>
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
                    showTimeSelect
                    dateFormat="Pp"
                  />
                </Form.Group>
              </Form.Group>
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
                    <Link className="d-flex flex-column  justify-content-center align-items-center textColor">
                      <Icon.Person className="px-0 mx-0 text-muted" size={20} />
                      <span className="text-muted">{index + 1} </span>
                    </Link>
                  );
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link
                onClick={() => setIsComment(true)}
                className="d-flex my-2 align-items-center textColor"
              >
                <Icon.Plus className="mx-0 pl-0" size={15} />
                <span>Add a comment</span>
              </Link>
            </Col>
          </Row>
          {isComment && (
            <Row>
              <Col>
                <Form.Group className="mb-3 d-flex flex-column ">
                  <Form.Label className="mr-4 d-flex">Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
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
                  variant="primary"
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
