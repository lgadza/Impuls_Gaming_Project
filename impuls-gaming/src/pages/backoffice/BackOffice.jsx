import {
  Col,
  Container,
  Row,
  Button,
  Alert,
  Navbar,
  Nav,
} from "react-bootstrap";
import useLocalStorage from "use-local-storage";
import * as Icon from "react-bootstrap-icons";
import logo from "../../img/impuls logo.png";
import Organizer from "./Organizer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adminLogout, getTournaments } from "../../redux/actions";
import Spinner from "../../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import OrganizerAccount from "./OrganizerAccount";
import Avatar from "../../components/Avatar";
import ReservationList from "./ReservetionList";
import { ListGroup } from "react-bootstrap-v5";
import ReservationStations from "./ReservationStations";

const BackOffice = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const navigate = useNavigate();
  const [profileClicked, setProfileClicked] = useState(false);
  const user = useSelector((state) => state.me.me);
  const [organizerAccountClicked, setOrganizerAccountClicked] = useState(false);
  const [reservationsClicked, setReservationsClicked] = useState(false);
  const [stationsClicked, setStationClicked] = useState(false);
  const [isReservation, setIsReservation] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tournaments.isLoading);
  const isError = useSelector((state) => state.tournaments.isError);
  const projects = useSelector((state) => state.tournaments.tournaments);
  useEffect(() => {
    dispatch(getTournaments());
  }, []);
  const handleProfileClicked = () => {
    profileClicked ? setProfileClicked(false) : setProfileClicked(true);
  };
  const handleOrganizerAccountClicked = () => {
    organizerAccountClicked
      ? setOrganizerAccountClicked(false)
      : setOrganizerAccountClicked(true);
  };
  const handleReservationsClicked = () => {
    reservationsClicked
      ? setReservationsClicked(false)
      : setReservationsClicked(true);
  };
  const handleLogout = async () => {
    await dispatch(adminLogout(user._id));
    navigate("/");
  };
  return (
    <Container
      fluid
      // data-theme={theme}
    >
      <Row>
        <Col
          md={3}
          lg={3}
          xl={2}
          className=" my-projects giftcard-preview-nav d-flex flex-column d-xs-none d-sm-none d-md-none d-lg-block"
        >
          {/* <div className="d-flex flex-column justify-content-between"> */}
          <div>
            <Link
              onClick={() => {
                setOrganizerAccountClicked(false);
                setReservationsClicked(false);
              }}
            >
              <img className=" mt-4 logo-img" src={logo} alt="" />
            </Link>
            <hr className="hr" />
            <Link
              onClick={() => {
                setOrganizerAccountClicked(false);
                setReservationsClicked(false);
              }}
            >
              <h4 className="d-flex justify-content-center">Impuls Gaming</h4>
            </Link>
            <hr className="hr" />
          </div>
          <div>
            <Navbar className="d-flex flex-column align-items-start">
              <Nav className="d-flex flex-column">
                <Link
                  className="my-2 d-flex"
                  onClick={() => {
                    setOrganizerAccountClicked(false);
                    setReservationsClicked(false);
                    setStationClicked(false);
                  }}
                >
                  <span
                    className={
                      !reservationsClicked & !organizerAccountClicked &&
                      !stationsClicked
                        ? "current textColor text-small"
                        : undefined
                    }
                  >
                    {organizerAccountClicked &&
                    reservationsClicked &&
                    stationsClicked ? (
                      <Icon.Folder size={13} />
                    ) : (
                      <Icon.Folder2Open size={13} />
                    )}
                    <span className="text-small">My projects</span>
                  </span>
                </Link>
                <Link
                  className="my-2 d-flex"
                  // onClick={handleReservationsClicked}
                  onClick={() => {
                    isReservation
                      ? setIsReservation(false) && setReservationsClicked(true)
                      : setIsReservation(true);
                  }}
                >
                  <span
                    className={
                      isReservation || stationsClicked || reservationsClicked
                        ? "current textColor text-small"
                        : undefined
                    }
                  >
                    <Icon.Bookmark size={13} />
                    <span className="text-small">Reservations</span>
                    <Icon.CaretDownFill size={12} className="ml-0 pl-0" />
                    {isReservation && (
                      <ul>
                        <li className="my-3">
                          <Link
                            onClick={(e) => {
                              e.stopPropagation();
                              setStationClicked(false);
                              setReservationsClicked(true);
                            }}
                            className={
                              reservationsClicked
                                ? "current textColor text-small"
                                : "textColor3"
                            }
                          >
                            1. Reservation list
                          </Link>
                        </li>
                        <li className="text-left">
                          <Link
                            onClick={async (e) => {
                              e.stopPropagation();
                              await setReservationsClicked(false);
                              setStationClicked(true);
                            }}
                            className={
                              stationsClicked
                                ? "current textColor text-small"
                                : "textColor3"
                            }
                          >
                            2. Stations
                          </Link>
                        </li>
                      </ul>
                    )}
                  </span>
                </Link>
                <Link className="my-2 d-flex">
                  <span
                  // className={
                  //   page === "settings"
                  //     ? "current textColor text-small"
                  //     : undefined
                  // }
                  >
                    <Icon.Bell size={13} />
                    <span className="text-small">Notifications</span>
                  </span>
                </Link>
              </Nav>
            </Navbar>
          </div>
          <div
            className={`organizer-profile ${
              profileClicked ? "active" : ""
            } w-75`}
          >
            {organizerAccountClicked && (
              <Button
                onClick={() => setOrganizerAccountClicked(false)}
                className="primary-btn w-75 mr-3 textColor3"
              >
                Back
              </Button>
            )}
            <hr className="hr" />
            <Link
              onClick={handleProfileClicked}
              className="d-flex justify-content-between align-items-center textColor "
            >
              <div>
                <Avatar
                  src={user.avatar}
                  alt="Profile Avatar"
                  className="avatar"
                  width={40}
                  height={40}
                />
                <span className="ml-1">{user.nickname}</span>
              </div>
              <Icon.CaretDownFill size={15} />
            </Link>
            <div className="d-flex flex-column align-items-start">
              <Link
                onClick={handleOrganizerAccountClicked}
                className={`my-3  ${
                  organizerAccountClicked ? "" : "textColor"
                }`}
              >
                <span>Account</span>
              </Link>
              <Link onClick={handleLogout} className="textColor">
                <span>Logout</span>
              </Link>
            </div>
          </div>
          {/* </div> */}
        </Col>
        <Col lg={9} md={12} className="">
          {isLoading && (
            <div className="mt-5 spinner d-flex justify-content-center">
              {" "}
              <Spinner />
            </div>
          )}
          {isError && (
            <Alert variant="danger" className="mt-5">
              <Alert.Heading>!You got an error!</Alert.Heading>
              <p>
                Something went wrong on our side, we are working on it, we
                apologies for the inconvenience caused
              </p>
            </Alert>
          )}
          {projects.totalTournaments &&
            !organizerAccountClicked &&
            !reservationsClicked &&
            !stationsClicked && <Organizer projects={projects} />}
          {organizerAccountClicked && <OrganizerAccount user={user} />}
          {reservationsClicked && <ReservationList />}
          {stationsClicked && <ReservationStations />}
        </Col>
      </Row>
    </Container>
  );
};
export default BackOffice;
