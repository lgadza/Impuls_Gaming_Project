import { Container, Col, Form, Row, Card, Dropdown } from "react-bootstrap";

import BackOfficeNav from "../BackOfficeNav";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect } from "react";
import { editTournament, getTournaments } from "../../../redux/actions";
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
              <h3 className="d-flex mb-4">Structure</h3>
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
                <Card.Body>
                  <Icon.PlusLg size={100} color="rgba(244, 92, 93, 255)" />
                  <span className="d-flex justify-content-center  align-items-center">
                    Create new stage
                  </span>
                </Card.Body>
              </Card>
            </Col>

            <Col className="tournament-card-edit" md={9}>
              <Row>
                {[...Array(4)].map((project, index) => (
                  <Col md={4}>
                    <Card className=" mb-3">
                      <Card.Header>
                        <h5>1. League</h5>
                      </Card.Header>
                      <span>League</span>
                      <Card.Body className="d-flex justify-content-between mt-3 pb-2 align-items-center">
                        <span className="textColor3 mr-5">Configure</span>
                        <Dropdown>
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
                            <Dropdown.Item>
                              <Icon.Gear size={20} color="#0cc4f2" />
                              <span className="textColor3 link-btm-bar">
                                Configure
                              </span>
                            </Dropdown.Item>
                            <Dropdown.Item className="my-2">
                              <Icon.Search size={20} color="#0cc4f2" />
                              <span className="textColor3 link-btm-bar">
                                Results
                              </span>
                            </Dropdown.Item>
                            <hr />
                            <Dropdown.Item>
                              <Icon.Trash size={20} color="red" />
                              <span className="text-danger link-btm-bar">
                                Delete
                              </span>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
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
