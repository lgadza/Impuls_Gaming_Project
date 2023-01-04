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

const TournamentDetails = () => {
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournament.data);
  const tournament = tournamentData.find(
    (name) => name.tournament_name === params.tournament
  );
  console.log(params);
  const [registrationOpens, setRegistrationOpens] = useState("");
  const [registrationCloses, setRegistrationCloses] = useState("");
  const [key, setKey] = useState("activation");
  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setUpdate(true);
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
                <div className="d-flex align-items-center justify-content-between  textColor ">
                  <div>
                    <div className="d-flex">
                      <span className="mr-3">XBox</span>
                      <Link>Fifa 23</Link>
                    </div>
                    <h1 className="d-flex">Tounament NAme</h1>
                    <span className="d-flex">
                      9 January 2023 - 9 February 2023
                    </span>
                  </div>
                  <div className="    ">
                    <div className="d-flex giftcard-preview-nav register-card-top  justify-content-between py-1 px-4">
                      <div className="d-flex flex-column justify-content-center reg-border-right mr-4 pr-3">
                        <span className="d-flex">Registration open</span>
                        <span className="d-flex">until 6 Jan 2023,13:00</span>
                      </div>
                      <div>
                        <h3>15</h3>
                        <h3>16</h3>
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
      <Row>
        <Col className="my-5 px-5">
          {update && (
            <div className="registration-card mx-auto">
              <Alert key={"success"} variant={"success"}>
                <Icon.CheckCircle size={15} />
                <span>Settings have been successfully updated.</span>
              </Alert>
            </div>
          )}
          <Card className="registration-card mx-auto">
            <Card.Header>
              <h3 className="d-flex my-4">Participant Settings</h3>
            </Card.Header>
            <Card.Body>
              <Tabs
                activeKey="general"
                defaultActiveKey="general"
                onSelect={(k) => setKey(k)}
                className="mb-3 mx-auto d-flex justify-content-center mx-5 px-5"
              >
                <Tab eventKey="general" title="General">
                  <span className=" d-flex align-items-center mt-5">
                    Enable tournament check-in?
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-disabled">
                          Enable this feature to have your participants certify
                          their presence for your tournament by checking in. It
                          will ensure you create a structure of the right size,
                          and avoid falling behind schedule at the tournament
                          launch.
                        </Tooltip>
                      }
                    >
                      <span
                        variant="light"
                        className="d-inline-flex align-items-center"
                      >
                        <Icon.QuestionCircleFill />
                      </span>
                    </OverlayTrigger>
                  </span>
                  <div>
                    <Form>
                      <div className="my-3 d-flex">
                        <Form.Check
                          type="radio"
                          name="register"
                          label="Yes"
                          className="mr-3"
                        />

                        <Form.Check type="radio" name="register" label="No" />
                      </div>
                    </Form>
                  </div>
                  <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                    <Form.Label className="d-flex">
                      Participant check-in opening
                    </Form.Label>
                    <Form.Group className="">
                      <DatePicker
                        className="datepicker py-2 px-4 w-100"
                        selected={registrationOpens}
                        placeholderText={new Date()}
                        onChange={(date) => setRegistrationOpens(date)}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                    <Form.Label className="d-flex">
                      Participant check-in closing
                    </Form.Label>
                    <Form.Group className="">
                      <DatePicker
                        className="datepicker py-2 px-4 w-100"
                        selected={registrationCloses}
                        placeholderText={new Date()}
                        onChange={(date) => setRegistrationCloses(date)}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                    </Form.Group>
                  </Form.Group>
                  <Link
                    // to={`/backoffice/projects/overview/${tournament}`}
                    className="d-flex justify-content-end mt-4"
                  >
                    <Button
                      type="submit"
                      onClick={handleUpdate}
                      className="primary-btn textColor"
                    >
                      <Icon.Pencil size={20} />
                      Update
                    </Button>
                  </Link>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default TournamentDetails;
