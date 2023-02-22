import { Col, Container, Row, Button, Alert } from "react-bootstrap";
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

const BackOffice = () => {
  const navigate = useNavigate();
  const [profileClicked, setProfileClicked] = useState(false);
  const user = useSelector((state) => state.me.me);
  const [organizerAccountClicked, setOrganizerAccountClicked] = useState(false);
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
  const handleLogout = async () => {
    await dispatch(adminLogout(user._id));
    navigate("/");
  };
  return (
    <Container fluid>
      <Row>
        <Col
          md={3}
          lg={3}
          xl={2}
          className=" my-projects giftcard-preview-nav d-flex flex-column d-xs-none d-sm-none d-md-none d-lg-block"
        >
          {/* <div className="d-flex flex-column justify-content-between"> */}
          <div>
            <img className=" mt-4 logo-img" src={logo} alt="" />
            <hr className="hr" />
            <h3 className="d-flex">My Projects</h3>
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
          {!isError && (
            <Alert variant="danger" className="mt-5">
              <Alert.Heading>!You got an error!</Alert.Heading>
              <p>
                Something went wrong on our side, we are working on it, we
                apologies for the inconvenience caused
              </p>
            </Alert>
          )}
          {projects.totalTournaments && !organizerAccountClicked && (
            <Organizer projects={projects} />
          )}
          {organizerAccountClicked && <OrganizerAccount user={user} />}
        </Col>
      </Row>
    </Container>
  );
};
export default BackOffice;
