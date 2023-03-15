import { Container, Col, Form, Row, Card, Dropdown } from "react-bootstrap";

import BackOfficeNav from "../BackOfficeNav";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect } from "react";
import {
  deleteTournamentStructure,
  editTournament,
  getTournaments,
} from "../../../redux/actions";
const Structures = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  const user = useSelector((state) => state.me.me);
  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {};
  useEffect(() => {
    dispatch(getTournaments());
  }, []);
  return (
    <Container fluid className="main-container2 textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav data={tournament} user={user} page={"settings"} />
        </Col>
        <Col lg={10} className="my-5 px-5">
          <Row>
            <Col>
              <h4 className="d-flex mb-4">Structure</h4>
            </Col>
          </Row>
          <Row>
            <Col
              //   onClick={handleShow}
              md={3}
              className="d-flex align-items-center"
            >
              <Card
                style={{ height: "12rem" }}
                className="main-container2 plus-project w-75 mb-3"
              >
                <Card.Body className="d-flex flex-column justify-content-center  align-items-center">
                  <Link
                    to={`/backoffice/projects/structures/${tournament.name}/stages`}
                  >
                    <Icon.PlusLg size={60} color="rgba(244, 92, 93, 255)" />
                    <span className="d-flex justify-content-center  align-items-center">
                      Create new stage
                    </span>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col className="tournament-card-edit" md={9}>
              <Row>
                {tournament.structures.map((structure, index) => (
                  <Col key={index} md={6} className="structures-stage">
                    <Card className=" mb-3 card">
                      <Card.Header>
                        <h6>{structure.general.name}</h6>
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          <span className="d-flex">{structure.stage_type}</span>
                        </Card.Text>
                        <Card.Text className="d-flex justify-content-between mt-3 pb-2 align-items-center">
                          <span className="textColor3 mr-5">Configure</span>

                          <Dropdown drop="up">
                            <Dropdown.Toggle
                              variant="success"
                              className="px-0 mx-0"
                            >
                              <Icon.ThreeDotsVertical
                                size={20}
                                color="#0cc4f2"
                                className="px-0 mx-0"
                              />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item className="d-flex align-items-center">
                                <Icon.Gear size={15} color="#0cc4f2" />
                                <span className="textColor3 link-btm-bar text-small">
                                  Configure
                                </span>
                              </Dropdown.Item>

                              <hr className="py-0 my-0" />
                              <Dropdown.Item>
                                <Link
                                  onClick={async () => {
                                    await dispatch(
                                      deleteTournamentStructure(
                                        tournament._id,
                                        structure._id
                                      )
                                    );
                                    dispatch(getTournaments());
                                  }}
                                  className="d-flex align-items-center"
                                >
                                  <Icon.Trash size={13} color="red" />
                                  <span className="text-danger link-btm-bar text-small">
                                    Delete
                                  </span>
                                </Link>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Structures;
