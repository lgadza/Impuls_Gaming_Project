import {
  Modal,
  Row,
  Container,
  Col,
  Button,
  Form,
  Alert,
  Carousel,
} from "react-bootstrap-v5";
import Spinner from "./Spinner";
import * as Icon from "react-bootstrap-icons";
import "../styling/reservations.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjectsImgs, getReservations } from "../redux/actions";

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

  const gameCover = useSelector((state) => state.projectImgs.projectImgs);
  const isGameCoverLoading = useSelector(
    (state) => state.projectImgs.isLoading
  );
  const [remainingStations, setRemainingStations] = useState("");
  const [stationNumber, setStationNumber] = useState(null);
  const [showMakeReservations, setShowMakeReservation] = useState(false);
  const handleHideMakeReservation = () => setShowMakeReservation(false);
  useEffect(() => {
    dispatch(getReservations());
    dispatch(getProjectsImgs());
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
        {/* <Row className="mt-5">
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
        </Row> */}
        <Row>
          <Col>
            <div className="d-flex justify-content-between my-4">
              <h3>Reserve a station now</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h5 className="d-flex">Reserve your own</h5>
            <h6 className="text-success d-flex">Station</h6>
            <span className="d-flex text-left">
              No waiting is needed, as we have many stations and quality games.
              Reserve now in seconds.
            </span>

            <Link
              onClick={() => setShowMakeReservation(true)}
              className="w-100 d-flex my-4"
            >
              {" "}
              <Button variant="danger" className="register-btn">
                Reserve now
              </Button>
            </Link>
          </Col>
          <Col></Col>
        </Row>
        <Row className="bg-success py-2">
          <Col md={6} sm={12} lg={3} className="d-flex align-items-center">
            <Icon.CheckCircle className="ml-0 pl-0" size={15} />
            <span>No waiting in the queue</span>
          </Col>
          <Col md={6} sm={12} lg={3} className="d-flex align-items-center">
            <Icon.CheckCircle className="ml-0 pl-0" size={15} />
            <span>Easy online reservation</span>
          </Col>
          <Col md={6} sm={12} lg={3} className="d-flex align-items-center">
            <Icon.CheckCircle className="ml-0 pl-0" size={15} />
            <span>No registration required</span>
          </Col>
          <Col md={6} sm={12} lg={3} className="d-flex align-items-center">
            <Icon.CheckCircle className="ml-0 pl-0" size={15} />
            <span>live the LIVE EXPIRIENCE</span>
          </Col>
        </Row>
        <Row className="my-3">
          <Col
            md={6}
            sm={12}
            lg={3}
            className="d-flex flex-column justify-content-center"
          >
            <div>
              <Icon.Unlock color="gold" className="d-flex my-3" size={40} />
            </div>
            <div className="d-flex flex-column">
              <span>
                <strong className="d-flex ">No registration required</strong>
              </span>
              <span className="d-flex  text-left">
                You just need to press the reservation button to get started
              </span>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            lg={3}
            className="d-flex flex-column justify-content-center"
          >
            <div>
              <Icon.CalendarCheck
                color="yellow"
                className="d-flex my-3"
                size={40}
              />
            </div>
            <div className="d-flex flex-column">
              <span>
                <strong className="d-flex">Make your reservation</strong>
              </span>
              <span className="d-flex  text-left">
                Stay away from the pressure of queuing. Choose available hours
                you wish to play
              </span>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            lg={3}
            className="d-flex flex-column justify-content-center"
          >
            <div>
              <Icon.FilePdf color="red" className="d-flex my-3" size={40} />
            </div>
            <div className="d-flex flex-column">
              <span>
                <strong className="d-flex  text-left ">
                  Download your reservation soon after
                </strong>
              </span>
              <span className="d-flex text-left">
                No need to worry, we will also send it via your email
              </span>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            lg={3}
            className="d-flex flex-column justify-content-center"
          >
            <div>
              <Icon.ClockHistory
                color="green"
                className="d-flex my-3"
                size={40}
              />
            </div>
            <div className="d-flex flex-column">
              <span>
                <strong className="d-flex ">
                  So what are you waiting for?
                </strong>
              </span>
              <span className="d-flex">Get started</span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex  mb-4  justify-content-end">
            <Link to="/">
              <Button
                className="px-3 primary-btn  w-100 d-flex  textColor "
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
