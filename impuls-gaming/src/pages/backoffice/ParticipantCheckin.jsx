import {
  Container,
  Col,
  Form,
  Row,
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
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

const ParticipantCheckin = () => {
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournament.data);
  const tournament = tournamentData.find(
    (name) => name.tournament_name === params.tournament
  );
  console.log(tournament);
  const [registrationOpens, setRegistrationOpens] = useState("");
  const [registrationCloses, setRegistrationCloses] = useState("");
  const [key, setKey] = useState("activation");

  return (
    <Container fluid className="main-container textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav data={tournament} page={"settings"} />
        </Col>
        <Col lg={10} className="my-5 px-5">
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
                      //   onClick={handleData}
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
export default ParticipantCheckin;
