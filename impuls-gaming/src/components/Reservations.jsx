import {
  Modal,
  Row,
  Container,
  Col,
  Button,
  Form,
  Alert,
  Card,
} from "react-bootstrap-v5";
import Spinner from "./Spinner";
import * as Icon from "react-bootstrap-icons";
import "../styling/reservations.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getComments,
  getMe,
  getProjectsImgs,
  getReservations,
  postComment,
} from "../redux/actions";

import MakeReservation from "./MakeReservation";
import logo from "../img/impuls logo.png";
import { format, compareAsc } from "date-fns";
import CommentCard from "./CommentCard";
import Carousel from "./Carousel";
import Avatar from "./Avatar";
import Footer from "./Footer";

const Reservations = ({ visible, onhide }) => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const isLoading = useSelector((state) => state.reservations.isLoading);
  const handleData = async () => {
    await onhide();
  };
  const [isPressed, setIsPressed] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const handleMouseDown = () => {
    setIsPressed(true);
    setIsAnimated(false);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleClick = () => {
    setIsAnimated(true);
  };
  const accessToken = useSelector((state) => state.accessToken.accessToken);
  const user = useSelector((state) => state.me.me);
  const gameCover = useSelector((state) => state.projectImgs.projectImgs);
  const isGameCoverLoading = useSelector(
    (state) => state.projectImgs.isLoading
  );
  const allComments = useSelector(
    (state) => state.reservationsComments.reservationsComments
  );
  const [stationNumber, setStationNumber] = useState(null);
  const [showMakeReservations, setShowMakeReservation] = useState(false);
  const [comment, setComment] = useState("");
  const handleHideMakeReservation = () => setShowMakeReservation(false);
  useEffect(() => {
    if (accessToken) {
      dispatch(getMe(accessToken.accessToken));
    }
    // dispatch(getProjectsImgs());
  }, []);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handlePostComment = async () => {
    await dispatch(
      postComment(accessToken.accessToken, { comment, user: user._id })
    );
    setComment("");
    dispatch(getComments());
  };
  useEffect(() => {
    dispatch(getComments());
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className="main-container px-0 reservations-bg" fluid>
      {/* <div className="reservation-cover"></div> */}
      <Row className="giftcard-preview-nav py-2 w-100 mx-0 ">
        <Col className="d-flex mx-4 justify-content-between">
          <div className="d-flex flex-column">
            <Link className="mr-auto" to={"/"}>
              <Avatar width={50} height={50} src={logo} alt="Logo" />
            </Link>
            <span className="mr-auto textColor">LIVE EXPIRIENCE</span>
          </div>
          {user && (
            <span sm={2} className="d-flex align-items-center">
              <span className="textColor">{user.email}</span>
              <Link className="ml-2" to={"/user-page"}>
                My account
              </Link>
            </span>
          )}
        </Col>
      </Row>
      <Row className="w-100 mx-0">
        <Col className="px-0">
          <Card>
            <Card.Img
              src="https://pbs.twimg.com/media/EL-qiTuXUAASbId.jpg"
              alt="reservations stations"
              className=" tournament-img-cover"
            />
            <Card.ImgOverlay className="tournament-info d-flex flex-column justify-content-center pl-4">
              <h5 className="d-flex">Reserve your own</h5>
              <h6 className="text-success d-flex">Station</h6>
              <span className="d-flex text-left">
                No waiting is needed, as we have many stations and quality
                games. Reserve now in seconds.
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
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <div
        style={{ width: "100%", overflowX: "scroll" }}
        className="scroll-text-container bg-black"
      >
        <div
          className=" d-flex align-items-center justify-content-between  mx-1 py-2 scroll-text"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          <div className="d-flex align-items-center">
            <Icon.CheckCircle size={15} />
            <span>No waiting in the queue</span>
          </div>
          <div className="d-flex align-items-center">
            <Icon.CheckCircle size={15} />
            <span>Easy online reservation</span>
          </div>
          <div className="d-flex align-items-center">
            <Icon.CheckCircle size={15} />
            <span>No registration required</span>
          </div>
          <div className="d-flex align-items-center">
            <Icon.CheckCircle size={15} />
            <span>live the LIVE EXPERIENCE</span>
          </div>
        </div>
      </div>
      <Container className="reservations-stations-container my-5">
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

        <Row className="mb-3 pt-4 mt-5">
          <Col
            md={6}
            sm={12}
            lg={3}
            className="d-flex mb-3 flex-column justify-content-center"
          >
            <Card>
              <Card.Body className="p-3" style={{ height: "10rem" }}>
                <div>
                  <Icon.Unlock className="d-flex my-3" size={30} />
                </div>
                <div className="d-flex flex-column">
                  <span>
                    <strong className="d-flex ">
                      No registration required
                    </strong>
                  </span>
                  <span className="d-flex  text-left">
                    You just need to press the reservation button to get started
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={6}
            sm={12}
            lg={3}
            className="d-flex flex-column mb-3 justify-content-center"
          >
            <Card>
              <Card.Body className="p-3" style={{ height: "10rem" }}>
                <div>
                  <Icon.CalendarCheck className="d-flex my-3" size={30} />
                </div>
                <div className="d-flex flex-column">
                  <span>
                    <strong className="d-flex">Make your reservation</strong>
                  </span>
                  <span className="d-flex  text-left">
                    Stay away from the pressure of queuing. Choose available
                    hours you wish to play
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={6}
            sm={12}
            lg={3}
            className="d-flex flex-column mb-3 justify-content-center"
          >
            <Card>
              <Card.Body className="p-3" style={{ height: "10rem" }}>
                <div>
                  <Icon.FilePdf color="red" className="d-flex my-3" size={30} />
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
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={6}
            sm={12}
            lg={3}
            className="d-flex flex-column mb-3 justify-content-center"
          >
            <Card>
              <Card.Body className="p-3" style={{ height: "10rem" }}>
                <div>
                  <Icon.ClockHistory className="d-flex my-3" size={30} />
                </div>
                <div className="d-flex flex-column">
                  <span>
                    <strong className="d-flex ">
                      So what are you waiting for?
                    </strong>
                  </span>
                  <span className="d-flex">Get started</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <h5 className="my-4">Comments</h5>
          </Col>
        </Row>
        {allComments > 5 && (
          <Link className="d-flex justify-content-end">View all</Link>
        )}
        <Row className="comments-section mt-3 d-flex flex-column align-items-center justify-content-center">
          {allComments.length > 0 ? (
            <Carousel>
              {allComments.map((comment, index) => {
                return (
                  <CommentCard
                    comment={comment}
                    user={user}
                    token={accessToken.accessToken}
                    key={index}
                  />
                );
              })}
            </Carousel>
          ) : (
            <div className="my-3">No Comments available</div>
          )}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            {user && (
              <Card>
                <Card.Body style={{ width: "18rem" }}>
                  <Form.Group className="mb-2  d-flex align-items-center main-container2 send-content-container ">
                    <Form.Control
                      className="main-container2"
                      placeholder="Write a comment..."
                      as="textarea"
                      rows={2}
                      onChange={(e) => setComment(e.target.value)}
                      value={comment}
                    />
                    {comment && (
                      <Icon.Send
                        onClick={handlePostComment}
                        className="send-btn-icon p-2"
                        size={30}
                      />
                    )}
                  </Form.Group>

                  <div>
                    <Link>
                      <Button
                        type="submit"
                        onClick={() => {
                          // handleUpdate()
                          handleClick();
                        }}
                        className={`primary-btn textColor d-flex align-items-center justify-content-center ${
                          isPressed ? "pressed" : ""
                        }`}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                      >
                        <span
                          className={`content ${isPressed ? "pressed" : ""}`}
                        >
                          <small>Add comment</small>
                        </span>
                        <span
                          className={`particles ${isAnimated ? "animate" : ""}`}
                        >
                          <span className="particle square red"></span>
                          <span className="particle circle green"></span>
                          <span className="particle square yellow"></span>
                          <span className="particle square red"></span>
                          <span className="particle square yellow"></span>
                          <span className="particle circle green"></span>
                          <span className="particle circle white"></span>
                        </span>
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>

        <Row>
          <Col className="d-flex  my-4  justify-content-end">
            <Link to="/">
              <Button
                className="px-3 primary-btn align-items-center  w-100 d-flex  textColor "
                variant="primary"
              >
                <Icon.ArrowLeft className="pl-0 ml-0" size={15} />
                <small>Back</small>
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
      <Footer />
    </Container>
  );
};
export default Reservations;
