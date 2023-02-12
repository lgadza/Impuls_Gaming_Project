import { Col, Container, Row, Form, Button, Nav, Alert } from "react-bootstrap";
import fifa from "../../img/fifa23.jpg";
import * as Icon from "react-bootstrap-icons";
import logo from "../../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import Organizer from "./Organizer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTournaments } from "../../redux/actions";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import OrganizerAccount from "./OrganizerAccount";
import Avatar from "../../components/Avatar";

const BackOffice = () => {
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
                  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
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
              <Link className="textColor">
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
          {organizerAccountClicked && <OrganizerAccount />}
        </Col>
      </Row>
    </Container>
  );
};
export default BackOffice;
