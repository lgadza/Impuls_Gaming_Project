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
import { getReservations, postReservation } from "../../redux/actions";
import { format, compareAsc } from "date-fns";

const ReservationsStationSettings = ({ visible, onhide, stationNo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservations = useSelector((state) => state.reservations.reservations);

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
          <h6>Station settings</h6>
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
                <h5 className="h5-station d-flex justify-content-center align-items-center">
                  {stationNo}
                </h5>
              </span>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="d-flex my-3 bd-highlight justify-content-between text-success">
                <span className="flex-grow-1 bd-highlight">Status</span>
                <span className=" flex-grow-1 bd-highlight">Station No</span>

                <span className="flex-grow-1 bd-highlight">Blocked</span>
                <span className="flex-grow-1 bd-highlight">Select</span>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Link to="" className="d-flex  mb-4  justify-content-start">
                <Button
                  className=" text-center px-3 primary-btn w-25   textColor "
                  // disabled={!reservationDate || !email || !userName}
                  variant="primary"
                  onClick={async () => {
                    // await dispatch(postReservation(reservationData));
                    dispatch(getReservations());
                    onhide();
                  }}
                >
                  <span className="text-small">Update</span>
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ReservationsStationSettings;
