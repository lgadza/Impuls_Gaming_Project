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

const Match = () => {
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournament.data);
  const tournament = tournamentData.find(
    (name) => name.tournament_name === params.tournament
  );
  console.log(tournament);

  //   const [key, setKey] = useState("activation");

  return (
    <Container fluid className="main-container textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav data={tournament} page={"settings"} />
        </Col>
        <Col lg={10} className="my-5 px-5">
          <Card className="registration-card mx-auto">
            <Card.Header>
              <h3 className="d-flex my-4">Match Settings</h3>
            </Card.Header>
            <Card.Body>
              <Tabs
                activeKey="match"
                defaultActiveKey="match"
                // onSelect={(k) => setKey(k)}
                className="mb-3 mx-auto d-flex justify-content-center mx-5 px-5"
              >
                <Tab eventKey="match" title="Match">
                  <span className=" d-flex align-items-center mt-5">
                    Enable Participants Reporting?
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-disabled">
                          Enable to allow participants to report their matches
                          result and score. Participant report is not possible
                          in FFA stages.
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
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
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
                      Create
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
export default Match;
