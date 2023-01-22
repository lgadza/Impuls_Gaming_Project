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

const TournamentDetails = () => {
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournament.data);
  const tournament = tournamentData.find(
    (name) => name.tournament_name === params.tournamentId
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
    <Container fluid className="main-container textColor  px-0">
      <NavigationBar />
      <div className="tournament-img-cover-container">
        <Card className="bg-dark text-white  ">
          <Card.Img src={fifa} alt="fifa" className=" tournament-img-cover" />
          <Card.ImgOverlay className="tournament-info">
            <Container>
              <Card.Text>
                <div className="d-flex align-items-center justify-content-between  text-white ">
                  <div>
                    <div className="d-flex">
                      <span className="mr-3 bg-secondary rounded text-white px-3 py-1">
                        XBox
                      </span>
                      <Link>Fifa 23</Link>
                    </div>
                    <h1 className="d-flex">{tournament.tournament_name}</h1>
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

      <Container>
        <Row>
          <Col className="mb-5 ">
            <Tabs defaultActiveKey="information" className="mb-3" justify>
              <Tab eventKey="information" title="Information">
                <Row>
                  <Col sm={12}>
                    <div className="d-flex  flex-column my-3">
                      <h4 className="d-flex">Description</h4>
                      <span className="d-flex mb-3">
                        FIFA tournaments between players! progress in the month
                        of January
                      </span>
                    </div>
                    <h5 className="d-flex my-3">Structure</h5>
                    <Card className="my-3 tournament-structure-card">
                      <Card.Header>
                        <strong>1.Groups</strong>
                      </Card.Header>
                      <Card.Body>
                        <span className="border-right pr-1">16 Players</span>
                        <span className="pl-1">4 Groups</span>
                      </Card.Body>
                    </Card>
                    <Card className="mb-3 tournament-structure-card">
                      <Card.Header>
                        <strong>2.PlayOffs</strong>
                      </Card.Header>
                      <Card.Body>
                        <h6>Single Elimination</h6>
                        <span>8 Players</span>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={12}>
                    <div className="d-flex  flex-column my-3">
                      <h4 className="d-flex">Prize</h4>
                      <span className="d-flex">Cash prize</span>
                    </div>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="matches" title="Matches">
                <GroupStructure />
              </Tab>
              <Tab eventKey="participants" title="Participants">
                <Row>
                  <Col>
                    <div className="d-flex  flex-column my-3">
                      <h4 className="d-flex">Participants</h4>
                    </div>
                  </Col>
                  <Col>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search a participant"
                        className="mr-3"
                        aria-label="Search"
                      />
                      <Button variant="secondary">
                        <Icon.Search size={20} />
                      </Button>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  {[...Array(19)].map((player, index) => {
                    return (
                      <Col lg={3}>
                        <Link className="link-none-deco">
                          <div className="border round textColor  d-flex px-2 participant-names py-3 my-2">
                            Louis Gadza
                          </div>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              </Tab>
              <Tab eventKey="rules" title="Rules">
                <Row>
                  <Col>
                    <div className="d-flex  flex-column my-3">
                      <h4 className="d-flex">Rules</h4>
                      <span className="d-flex">Ruleset not available.</span>
                    </div>
                  </Col>
                  <Col></Col>
                </Row>
              </Tab>
              <Tab eventKey="registration" title="Registration">
                <Row>
                  <Col>
                    <div className="d-flex  flex-column my-3">
                      <h4 className="d-flex">Tournament registration</h4>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label className="d-flex">
                          Player nickname
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter nickname"
                          onChange={handleNickname}
                        />
                        <span className="d-flex my-3">
                          <strong>Information</strong>
                        </span>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="d-flex">Player email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="email"
                          onChange={handleEmail}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="d-flex">First name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="John"
                          onChange={handleName}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="d-flex">Last name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Doe"
                          onChange={handleSurname}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3 d-flex" id="formGridCheckbox">
                        <Form.Check
                          onClick={handleTerms}
                          type="checkbox"
                          label="I agree to the
Toornament's terms of use."
                        />
                      </Form.Group>
                      <div className="d-flex">
                        <Button
                          // disabled={true}
                          type="submit"
                          onClick={handleUpdate}
                          className="primary-btn w-25   textColor"
                        >
                          Register
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
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
