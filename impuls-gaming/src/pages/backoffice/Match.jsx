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

const Match = () => {
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const user = useSelector((state) => state.me.me);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournament
  );
  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setUpdate(true);
  };

  return (
    <Container fluid className="main-container textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav user={user} data={tournament} page={"settings"} />
        </Col>
        <Col lg={10} className="my-5 px-5">
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
              <h5 className="d-flex my-4">Match Settings</h5>
            </Card.Header>

            <Card.Body>
              <Tabs
                activeKey="match"
                defaultActiveKey="match"
                className="mb-3 mx-auto d-flex justify-content-center mx-5 px-5"
              >
                <Tab eventKey="match" title="Match">
                  <h6 className="d-flex">Participant reporting</h6>
                  <span className=" d-flex align-items-center ">
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
                          checked
                          className="mr-3"
                        />

                        <Form.Check type="radio" name="register" label="No" />
                      </div>
                    </Form>
                  </div>
                  <Form.Select
                    aria-label="Default select example"
                    className="datepicker py-2 px-4 w-100 textColor"
                  >
                    <option>Open this select menu</option>
                    <option value="1">Single game</option>
                    <option value="2">Home and away</option>
                    <option value="3">Best of 3</option>
                    <option value="3">Best of 5</option>
                    <option value="3">Fixed games</option>
                  </Form.Select>
                  <Link className="d-flex justify-content-end mt-4 link-none-deco">
                    <Button
                      type="submit"
                      onClick={handleUpdate}
                      className="primary-btn textColor d-flex align-items-center justify-content-center"
                    >
                      <Icon.Pencil size={15} />
                      <span className="text-small">Update</span>
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
