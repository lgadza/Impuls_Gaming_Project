import {
  Modal,
  Row,
  Container,
  Col,
  Button,
  Form,
  Card,
  Dropdown,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import fifa from "../../img/fifa23.jpg";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BackOfficeNav from "./BackOfficeNav";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Settings = () => {
  const params = useParams();
  console.log(params.tournamentId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  const user = useSelector((state) => state.me.me);

  return (
    <Container fluid className="main-container textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav data={tournament} user={user} page={"settings"} />
        </Col>

        <Col lg={10} className="my-5 px-5">
          <div className="d-flex justify-content-between">
            <h3 className="d-flex mb-5">Settings</h3>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span className="notification-bell">
                  <Icon.BellFill color="rgb(0, 123, 255)" size={20} />
                  <span className="notification-message text-primary text-small"></span>
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Row className=" mb-5">
            <Col>
              <Card>
                <Link
                  to={`/backoffice/projects/settings/${tournament.name}/edit`}
                  className="textColor settings-card link-none-deco"
                >
                  <Card.Header>
                    <Icon.Gear size={20} />
                    General
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Manage the highest level of information about your
                      tournament, its description, size, logo and contact
                      information for your participants to reach you.
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col>
              <Card>
                <Link
                  to={`/backoffice/projects/settings/${tournament.name}/matches`}
                  className="textColor settings-card link-none-deco"
                >
                  <Card.Header>
                    <Icon.LightningChargeFill size={20} />
                    <span>Match</span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Manage the configuration of the match format to be used in
                      your tournament, and whether you want the participants to
                      be able to report their results or not.
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col>
              <Card>
                <Link
                  to={`/backoffice/projects/settings/${tournament.name}/registration`}
                  className="textColor settings-card link-none-deco"
                >
                  <Card.Header>
                    <Icon.TicketFill size={20} />
                    <span>Registration</span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Manage the registration, to have participants be able to
                      register to your tournament during a set period, and
                      configure automated messages to be sent to them.
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Link
                  to={`/backoffice/projects/settings/${tournament.name}/participants`}
                  className="textColor settings-card link-none-deco"
                >
                  <Card.Header>
                    <Icon.PeopleFill size={20} />
                    Participant
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Manage the participant settings like the minimum and
                      maximum size of teams, and enable the check-in.
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col>
              <Card>
                <Link className="textColor settings-card link-none-deco">
                  <Card.Header>
                    <Icon.Trash3Fill size={20} />
                    <span>Delete Tournament</span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>This action is irreversible!</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col>
              {/* <Card>
                <Link className="textColor settings-card link-none-deco">
                  <Card.Header>
                    <Icon.TicketFill size={20} />
                    <span>Sponsors</span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Manage the sponsors for the tournament: order them, add
                      logos and website links.
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card> */}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Settings;
