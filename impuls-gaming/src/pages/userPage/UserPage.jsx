import { Col, Container, Row, Dropdown } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
import Table from "./Table";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useSelector, useDispatch } from "react-redux";
import Tournaments from "./Tournaments";
import Overview from "./Overview";
import Fixtures from "./Fixtures";
import { getMe, getTournaments, getUsers } from "../../redux/actions";
import Avatar from "../../components/Avatar";
import { logout } from "../../redux/actions";
import { io } from "socket.io-client";
import Footer from "../../components/Footer";
const DEV_URL = process.env.REACT_APP_BE_DEV_URL;
const socket = io(DEV_URL, { transports: ["websocket"] });
const UserPage = () => {
  const [isChat, setIsChat] = useState(false);
  const [tournamentToReport, setTournamentToReport] = useState("Call Of Duty");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.me.me);
  const tournaments = useSelector((state) => state.tournaments.tournaments);
  const signInCredentials = useSelector(
    (state) => state.accessToken.accessToken
  );

  useEffect(() => {
    socket.emit("newUser", { username: user.name + " " + user.surname });
  }, [socket, user.name]);
  useEffect(() => {
    dispatch(getUsers());

    dispatch(getTournaments());
    dispatch(getMe(signInCredentials.accessToken));
    if (!localStorage.getItem("accessToken")) navigate("/user-page");
    if (searchParams.get("accessToken")) {
      localStorage.setItem("accessToken", searchParams.get("accessToken"));
    }
  }, [navigate, searchParams]);
  const handleLogout = async () => {
    await dispatch(logout(user._id));
    navigate("/");
  };

  return (
    <Container fluid className="textColor px-0 user-page main-container ">
      <Row className="mb-3 px-5 py-3 d-flex align-items-center justify-content-between position-fixed giftcard-preview-nav ">
        <div>
          <Link to="/">Home</Link>
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
                    size={20}
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
                width={30}
                height={30}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <div className="d-flex ml-2 justify-content-between">
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
                <Link to="" className="textColor mx-2">
                  Registrations
                </Link>
              </Dropdown.Item>
              <hr />
              <Dropdown.Item>
                <Link to="" onClick={handleLogout} className="textColor mx-2">
                  Log out
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Row>
      <Container>
        <Row>
          {/* <Col
            lg={4}
            className=" userProfile profile-fixed d-flex flex-column  mt-5 side-bar"
          >
            <UserProfile user={user} />
          </Col> */}

          <Col
            // lg={8}
            className=" mt-5 side-bar d-none d-lg-block"
          >
            <Tabs className="navigation-tabs  d-flex justify-content-center mt-3 textColor">
              <Tab className="textColor2" eventKey="overview" title="Overview">
                <Overview
                  // tournaments={tournaments.tournaments}
                  socket={socket}
                  user={user}
                  tournamentId={tournamentToReport}
                />
              </Tab>
              <Tab className="w-100" eventKey="table" title="Table">
                <Table socket={socket} user={user} />
              </Tab>
              <Tab eventKey="fixture" title="Fixtures">
                <Fixtures socket={socket} user={user} />
              </Tab>
              <Tab eventKey="tournaments" title="Tournaments">
                <Tournaments
                  tournaments={tournaments.tournaments}
                  socket={socket}
                  user={user}
                />
              </Tab>
              {/* //**********DO NOT DELETE ME I AM CHATS  */}
              {/* <Tab
                onClick={() => setIsChat(true)}
                eventKey="friends"
                title="Chats"
              >
                <Chat user={user} clicked={isChat} socket={socket} />
              </Tab> */}
              {/* //**********DO NOT DELETE ME I AM CHATS  */}
            </Tabs>
          </Col>
          <Col sm={12} className=" mt-5 side-bar  d-lg-none">
            <Tabs defaultActiveKey="information" className="mb-3  " justify>
              <Tab
                eventKey="information"
                title={<Icon.Speedometer2 className="mx-0" size={20} />}
              >
                <Overview tournaments={tournaments.tournaments} />
              </Tab>
              <Tab
                eventKey="matches"
                title={<Icon.Table className="mx-0" size={20} />}
              >
                <Table />
              </Tab>
              <Tab
                eventKey="fixture"
                title={<FontAwesomeIcon icon={faCoffee} size="lg" />}
              >
                <Fixtures socket={socket} user={user} />
              </Tab>
              <Tab
                eventKey="participants"
                title={<Icon.Controller className="mx-0" size={20} />}
              >
                <Tournaments tournaments={tournaments.tournaments} />
              </Tab>
              {/* //**********DO NOT DELETE ME I AM CHATS  */}

              {/* <Tab
                eventKey="rules"
                title={<Icon.ChatDots className="mx-0" size={20} />}
              >
                <Chat />
              </Tab> */}
              {/* //**********DO NOT DELETE ME I AM CHATS  */}
            </Tabs>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};
export default UserPage;
