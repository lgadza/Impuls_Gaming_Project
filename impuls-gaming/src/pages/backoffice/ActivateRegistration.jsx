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
import BackOfficeNav from "./BackOfficeNav";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

import { useSelector, useDispatch } from "react-redux";
import { format, compareAsc } from "date-fns";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import { editTournament } from "../../redux/actions";

const ActivateRegistration = () => {
  const params = useParams();
  const [isRegistration, setIsRegistration] = useState(false);
  const [isAutoRegistration, setIsAutoRegistration] = useState(false);
  const [isEmailNotification, setIsEmailNotification] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [refusalMessage, setRefusalMessage] = useState("");
  const dispatch = useDispatch();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournament
  );
  const [registrationOpens, setRegistrationOpens] = useState("");
  const [registrationCloses, setRegistrationCloses] = useState("");
  const [key, setKey] = useState("activation");
  const [update, setUpdate] = useState(false);

  // const ()=>{setIsRegistration()} = () => {
  //   isRegistration ? setIsRegistration(false) : setIsRegistration(true);
  // };
  const handleValidationMessage = (e) => {
    setValidationMessage(e.target.value);
  };
  const handleRefusalMessage = (e) => {
    setRefusalMessage(e.target.value);
  };
  const handleIsEmailNotification = () => {
    isEmailNotification === false
      ? setIsEmailNotification(true)
      : setIsEmailNotification(false);
  };
  const handleIsAutoRegistration = () => {
    isAutoRegistration === false
      ? setIsAutoRegistration(true)
      : setIsAutoRegistration(false);
  };
  const registrationSettings = {
    registration: {
      activation: {
        isRegistration: isRegistration,
        registrationOpeningDate: registrationOpens.toString(),
        registrationClosingDate: registrationCloses.toString(),
      },
      options: {
        isRegistrationAutomatically: isAutoRegistration,
        isEmailNotificationAutomatically: isEmailNotification,
      },
      customization: {
        validationMessage: validationMessage,
        refusalMessage: refusalMessage,
      },
    },
  };
  const handleUpdate = () => {
    dispatch(editTournament(registrationSettings, tournament._id));
    setUpdate(true);
  };
  console.log(isRegistration);
  return (
    <Container fluid className="main-container textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav data={tournament} page={"settings"} />
        </Col>
        <Col lg={10} className="my-5 px-5">
          {update && (
            <div className="registration-card bring-top mx-auto mb-5">
              <Alert key={"success"} variant={"success"}>
                <Icon.CheckCircle size={15} />
                <span>Settings have been successfully updated.</span>
              </Alert>
            </div>
          )}
          <Card className="registration-card mx-auto">
            <Card.Header>
              <h3 className="d-flex my-2">Registration Settings</h3>
            </Card.Header>
            <Card.Body>
              <Tabs
                activeKey={key}
                defaultActiveKey="profile"
                onSelect={(k) => setKey(k)}
                className="mb-3 mx-auto d-flex justify-content-center mx-5 px-5"
              >
                <Tab eventKey="activation" title="Activation">
                  <span className=" d-flex">Enable Registration?</span>
                  <div>
                    <Form>
                      <div className="my-3 d-flex">
                        <Form.Check
                          type="radio"
                          name="register"
                          label="Yes"
                          onClick={() => {
                            setIsRegistration(true);
                          }}
                          className="mr-3"
                        />
                        <Form.Check
                          type="radio"
                          onClick={() => {
                            setIsRegistration(false);
                          }}
                          name="register"
                          label="No"
                        />
                      </div>
                    </Form>
                  </div>
                  <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                    <Form.Label className="d-flex">
                      Registration Opening
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
                      Registration Closing
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
                  <Link className="d-flex justify-content-end mt-4">
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
                <Tab eventKey="options" title="Options">
                  <span className=" d-flex align-items-center mt-5">
                    Accept registrations automatically?
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-disabled">
                          If enabled, pending registrations will automatically
                          be accepted.
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
                          onClick={handleIsAutoRegistration}
                          className="mr-3"
                        />

                        <Form.Check
                          type="radio"
                          onClick={handleIsAutoRegistration}
                          name="register"
                          label="No"
                        />
                      </div>
                    </Form>
                  </div>
                  <span className=" d-flex align-items-center mt-5">
                    Enable Organizer Notification Email?
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-disabled">
                          If enabled, users with the permission "Manage the
                          registrations" will receive an email for each new
                          request.
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
                          onClick={handleIsEmailNotification}
                          className="mr-3"
                        />

                        <Form.Check
                          type="radio"
                          onClick={handleIsEmailNotification}
                          name="register"
                          label="No"
                        />
                      </div>
                    </Form>
                  </div>
                  <Link className="d-flex justify-content-end mt-4">
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
                <Tab eventKey="customization" title="Customization">
                  <Form.Group className="mb-3 d-flex flex-column ">
                    <Form.Label className="mr-4 d-flex">
                      Validation message{" "}
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip id="tooltip-disabled">
                            This text will appear in the email sent when you
                            accept a registration request. This allows you to
                            provide, if necessary, information concerning the
                            participation in the tournament.
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
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={handleValidationMessage}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex flex-column ">
                    <Form.Label className="mr-4 d-flex">
                      Refusal message{" "}
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip id="tooltip-disabled">
                            This text will appear in the email sent when you
                            refuse a registration request. This allows you to
                            provide, if necessary, additional information
                            regarding the refusal.
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
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={handleRefusalMessage}
                    />
                  </Form.Group>
                  <Link className="d-flex justify-content-end mt-4">
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
export default ActivateRegistration;
