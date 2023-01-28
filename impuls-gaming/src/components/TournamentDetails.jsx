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
import fifa from "../../src/img/fifa23.jpg";
import Footer from "./Footer";
import GroupStructure from "../pages/userPage/GroupStructure";
import RegistrationForm from "./RegistrationForm";
import TournamentInfo from "./TournamentInfo";
import Rules from "./Rules";
import PlayerList from "./PlayerList";
import { ReactComponent as Swords } from "../img/swords.svg";

const TournamentDetails = () => {
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  console.log(tournament);
  const [key, setKey] = useState("activation");
  const [registrationOpens, setRegistrationOpens] = useState("");
  const [registrationCloses, setRegistrationCloses] = useState("");
  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setUpdate(true);
  };
  const dispatch = useDispatch();
  const [nickName, setNickName] = useState(undefined);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const isLoading = useSelector((state) => state.giftData.isLoading);
  const [email, setEmail] = useState("");
  const [termsCheck, setTermsCheck] = useState(undefined);
  const handleNickname = (e) => {
    setNickName(e.target.value);
    // dispatch(giftCardInf(userData));
  };
  const handleName = (e) => {
    setName(e.target.value);
    // dispatch(giftCardInf(userData));
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
    // dispatch(giftCardInf(userData));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // dispatch(giftCardInf(userData));
  };
  const handleTerms = (e) => {
    setTermsCheck(e.target.value);
    // dispatch(giftCardInf(userData));
  };

  const userData = {
    nickName: nickName,
    name: name,
    surname: surname,
    email: email,
    terms: termsCheck,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container fluid className="main-container textColor  px-0 ">
      <NavigationBar />
      <div className="tournament-img-cover-container ">
        <Card className="bg-dark text-white   ">
          <Card.Img src={fifa} alt="fifa" className=" tournament-img-cover" />
          <Card.ImgOverlay className="tournament-info">
            <Container>
              <Card.Text>
                <div className="d-flex mt-5 pt-5 align-items-center justify-content-between  text-white ">
                  <div>
                    <div className="d-flex">
                      <span className="mr-3 bg-secondary rounded text-white px-3 py-1">
                        XBox
                      </span>
                      <Link>Fifa 23</Link>
                    </div>
                    <h1 className="d-flex">{tournament.name}</h1>
                    <span className="d-flex">
                      9 January 2023 - 9 February 2023
                    </span>
                  </div>
                  <div className=" d-none d-lg-block     ">
                    <div className="d-flex giftcard-preview-nav register-card-top  justify-content-between py-1 px-4 ">
                      <div className="d-flex flex-column justify-content-center reg-border-right mr-4 pr-3">
                        <span className="d-flex">Registration open</span>
                        <span className="d-flex">until 6 Jan 2023,13:00</span>
                      </div>
                      <div>
                        <h3 className="border-bottom pb-2">15</h3>
                        <h3 className="mt-0">16</h3>
                        <span>Players</span>
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
                <TournamentInfo />
              </Tab>
              <Tab eventKey="matches" title="Matches">
                <GroupStructure />
              </Tab>
              <Tab eventKey="participants" title="Participants">
                <PlayerList />
              </Tab>
              <Tab eventKey="rules" title="Rules">
                <Rules />
              </Tab>
              <Tab eventKey="registration" title="Registration">
                <RegistrationForm />
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
                <PlayerList />
              </Tab>
              <Tab eventKey="rules" title={<Icon.FileEarmarkText size={20} />}>
                <Rules />
              </Tab>
              <Tab eventKey="registration" title={<Icon.RCircle size={20} />}>
                <RegistrationForm />
              </Tab>
            </Tabs>

            {update && (
              <div className="registration-card mx-auto mt-5">
                <Alert key={"success"} variant={"success"}>
                  <Icon.CheckCircle size={15} />
                  <span>Registration sent to the organizer</span>
                </Alert>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};
export default TournamentDetails;
