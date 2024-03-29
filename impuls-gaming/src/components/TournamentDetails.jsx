import {
  Container,
  Col,
  Form,
  Row,
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
  Alert,
} from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

import { useSelector, useDispatch } from "react-redux";
import { format, compareAsc } from "date-fns";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";

import Footer from "./Footer";
import GroupStructure from "../pages/userPage/GroupStructure";
import RegistrationForm from "./RegistrationForm";
import TournamentInfo from "./TournamentInfo";
import Rules from "./Rules";
import PlayerList from "./PlayerList";
import { ReactComponent as Swords } from "../img/swords.svg";
import { Dropdown } from "react-bootstrap-v5";
import Avatar from "./Avatar";
import { logout } from "../redux/actions";

const TournamentDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  const dispatch = useDispatch();
  const user = useSelector((state) => state.me.me);
  const handleLogout = async () => {
    await dispatch(logout(user._id));
    navigate("/");
  };

  return (
    <Container
      fluid
      className="main-container textColor tournament-details  px-0 "
    >
      {/* <NavigationBar /> */}
      <Row className="mb-3 px-5 py-3 d-flex align-items-center justify-content-between position-fixed giftcard-preview-nav ">
        <div>
          <Link to="/user-page">Home</Link>
          <Icon.CaretRightFill color="white" size={10} />

          <Link>
            {user.name} {user.surname}
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span className="textColor notification-bell">
                  <Icon.BellFill
                    color="rgb(0, 123, 255)"
                    size={18}
                    className="mx-0 px-0 "
                  />
                  <span className="notification-message text-primary text-small "></span>
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                // onClick={() =>
                //   navigate(
                //     `/backoffice/projects/${tournament.name}/reports/disputes`
                //   )
                // }
                >
                  Louis vs Sage
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Dropdown>
            <Dropdown.Toggle>
              {/* <img src={profilePic} className="small-profile-img" alt="" /> */}
              <Avatar
                src={user.avatar}
                alt="Profile Avatar"
                className="avatar"
                width={25}
                height={25}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <div className="d-flex align-items-center ml-2 justify-content-between">
                  <span>
                    {user.name} {user.surname}
                  </span>
                  <img
                    src={user.avatar}
                    className="small-profile-img "
                    alt=""
                  />
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" className="textColor px-2 py-5">
                  Registrations
                </Link>
              </Dropdown.Item>
              <hr className="my-0 py-0" />
              <Dropdown.Item>
                <Link
                  to=""
                  onClick={handleLogout}
                  className="textColor px-2 py-5"
                >
                  Log out
                </Link>
              </Dropdown.Item>
              <Dropdown.Item as="div">
                <Link>
                  <Button
                    className="px-3 primary-btn  w-100 d-flex justify-content-center  textColor "
                    variant="primary"
                  >
                    <small>Delete Account</small>
                  </Button>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Row>

      <div className="tournament-img-cover-container ">
        <Card className="bg-dark text-white   ">
          <Card.Img
            src={tournament.discipline_cover}
            alt={tournament.discipline_name}
            className=" tournament-img-cover"
          />
          <Card.ImgOverlay className="tournament-info">
            <Container>
              <Card.Text>
                <div className="d-flex mt-5 pt-5 align-items-center justify-content-between  text-white ">
                  <div>
                    <div className="d-flex">
                      <span className="mr-3 bg-secondary rounded text-white px-3 py-1">
                        {tournament.platform}
                      </span>
                      <Link>{tournament.discipline_name}</Link>
                    </div>
                    <h5 className="d-flex my-3 text-nowrap">
                      {tournament.name}
                    </h5>
                    <span className="d-flex">
                      {tournament.startDate && tournament.endDate && (
                        <span className="d-flex">
                          {" "}
                          {format(
                            new Date(tournament.startDate.toString()),
                            "dd MMM yyyy"
                          )}
                          {" - "}
                          {format(
                            new Date(tournament.endDate.toString()),
                            "dd MMM yyyy"
                          )}
                        </span>
                      )}
                    </span>
                  </div>
                  <div className=" d-none d-lg-block textColor ">
                    <div className="d-flex giftcard-preview-nav register-card-top  justify-content-between py-1 px-4 ">
                      <div className="d-flex flex-column justify-content-center reg-border-right mr-4 pr-3">
                        <span
                          className="d-flex 
textColor"
                        >
                          Registration open
                        </span>

                        {tournament.registration.activation
                          .registrationClosingDate && (
                          <span
                            className="d-flex
textColor"
                          >
                            until{" "}
                            {format(
                              new Date(
                                tournament.registration.activation.registrationClosingDate.toString()
                              ),
                              "dd MMM yyyy 'at' HH:mm"
                            )}
                          </span>
                        )}
                      </div>
                      <div>
                        <h5 className="border-bottom pb-2  textColor">
                          {tournament.tournamentParticipants.length}
                        </h5>
                        <h5 className="mt-0  textColor">{tournament.size}</h5>
                        <span className=" textColor">Players</span>
                      </div>
                    </div>
                    <div className="bg-success px-3 text-white py-2">
                      Register to the tournament
                    </div>
                  </div>
                </div>
              </Card.Text>
            </Container>
          </Card.ImgOverlay>
        </Card>
      </div>

      <Container className=" ">
        <Row>
          <Col className="mb-5 d-none d-lg-block ">
            <Tabs defaultActiveKey="information" className="mb-3  " justify>
              <Tab eventKey="information" title="Information">
                <TournamentInfo tournament={tournament} />
              </Tab>
              <Tab eventKey="matches" title="Matches">
                <GroupStructure tournament={tournament} />
              </Tab>
              <Tab eventKey="participants" title="Participants">
                {/* *********************************************************** */}
                <Container className="participants-registered pb-3">
                  <Row>
                    <Col>
                      <div className="d-flex  flex-column my-3">
                        <h5 className="d-flex">Participants</h5>
                      </div>
                    </Col>
                    <Col>
                      <Form className="d-flex my-3">
                        <Form.Control
                          type="search"
                          placeholder="Search here"
                          className="mr-3"
                          aria-label="Search"
                        />
                        <Button variant="secondary">
                          <Icon.Search size={20} />
                        </Button>
                      </Form>
                    </Col>
                  </Row>

                  <hr />

                  <Row>
                    {tournament.tournamentParticipants.length > 0 &&
                      tournament.tournamentParticipants.map((player, index) => {
                        return (
                          <Col xs={6} key={player._id} lg={3}>
                            <Link className="link-none-deco">
                              <div className="border round textColor  d-flex px-2 participant-names py-3 my-2 justify-content-center">
                                <span className="mr-2">{player.name}</span>
                                <span>{player.surname}</span>
                              </div>
                            </Link>
                          </Col>
                        );
                      })}

                    {tournament.tournamentParticipants.length === 0 && (
                      <Col xs={6} lg={3}>
                        <span>No participants available yet</span>
                      </Col>
                    )}
                  </Row>
                  <div className="d-flex text-danger justify-content-end">
                    <span className="px-3">Total</span>
                    <span>
                      {tournament.tournamentParticipants.length}/
                      {tournament.size}
                    </span>
                  </div>
                </Container>
              </Tab>
              <Tab eventKey="rules" title="Rules">
                <Rules />
              </Tab>
              <Tab eventKey="registration" title="Registration">
                {tournament.registration.activation.isRegistration &&
                new Date(
                  tournament.registration.activation.registrationClosingDate
                ) >= new Date() ? (
                  <RegistrationForm tournamentId={tournament._id} />
                ) : (
                  <h5 className="text-left mt-4 text-danger">
                    Registration closed, Please find an open tournament
                  </h5>
                )}
              </Tab>
            </Tabs>
          </Col>
          <Col className="mb-5  d-lg-none ">
            <Tabs defaultActiveKey="information" className="mb-3  " justify>
              <Tab eventKey="information" title={<Icon.InfoCircle size={20} />}>
                <TournamentInfo />
              </Tab>
              <Tab eventKey="matches" title={<Icon.Tools size={20} />}>
                <GroupStructure />
              </Tab>
              <Tab
                eventKey="participants"
                title={<Icon.PeopleFill size={20} />}
              >
                <Container className="participants-registered pb-3">
                  <Row>
                    <Col>
                      <div className="d-flex  flex-column my-3">
                        <h5 className="d-flex">Participants</h5>
                      </div>
                    </Col>
                    <Col>
                      <Form className="d-flex my-3">
                        <Form.Control
                          type="search"
                          placeholder="Search here"
                          className="mr-3"
                          aria-label="Search"
                        />
                        <Button variant="secondary">
                          <Icon.Search size={20} />
                        </Button>
                      </Form>
                    </Col>
                  </Row>

                  <hr />

                  <Row>
                    {tournament.tournamentParticipants.length > 0 &&
                      tournament.tournamentParticipants.map((player, index) => {
                        return (
                          <Col xs={6} key={player._id} lg={3}>
                            <Link className="link-none-deco">
                              <div className="border round textColor  d-flex px-2 participant-names py-3 my-2">
                                <span className="mr-4">{player.name}</span>{" "}
                                <span>{player.surname}</span>
                              </div>
                            </Link>
                          </Col>
                        );
                      })}

                    {tournament.tournamentParticipants.length === 0 && (
                      <Col xs={6} lg={3}>
                        <span>No participants available yet</span>
                      </Col>
                    )}
                  </Row>
                  <div className="d-flex text-danger justify-content-end">
                    <span className="px-3">Total</span>
                    <span>
                      {tournament.tournamentParticipants.length}/
                      {tournament.size}
                    </span>
                  </div>
                </Container>
                {/* <PlayerList participants={tournament.tournamentParticipants} /> */}
              </Tab>
              <Tab eventKey="rules" title={<Icon.FileEarmarkText size={20} />}>
                <Rules />
              </Tab>
              <Tab eventKey="registration" title={<Icon.RCircle size={20} />}>
                {tournament.registration.activation.isRegistration &&
                new Date(
                  tournament.registration.activation.registrationClosingDate
                ) >= new Date() ? (
                  <RegistrationForm tournamentId={tournament._id} />
                ) : (
                  <h5 className="text-left mt-4 text-danger">
                    Registration closed, Please find an open tournament
                  </h5>
                )}
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};
export default TournamentDetails;
