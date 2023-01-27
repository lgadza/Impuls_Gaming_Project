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
  Tabs,
  Tab,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BackOfficeNav from "../BackOfficeNav";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ConfigureStages = () => {
  const params = useParams();
  console.log(params);
  const [number, setNumber] = useState("");
  const [size, setSize] = useState("");
  const [name, setName] = useState("");
  const [numberOfMatches, setNumberOfMatches] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [key, setKey] = useState("activation");
  const [update, setUpdate] = useState(false);

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNumberOfMatches = (e) => {
    setNumberOfMatches(e.target.value);
  };
  const handleUpdate = () => {
    number && name && size && numberOfMatches
      ? setUpdate(true)
      : setUpdate(false);
    // setUpdate(true);
  };
  const formData = {
    number: number,
    size: size,
    name: size,
    total_matches: numberOfMatches,
  };

  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  console.log(tournament);
  return (
    <Container fluid className="main-container textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav data={tournament} page={"structure"} />
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
          {!update && (
            <div className="registration-card bring-top mx-auto mb-5">
              <Alert key={"warning"} variant={"danger"}>
                <Icon.InfoCircle size={20} color="red" />
                <span className="text-danger">
                  There is invalid data in the form. Please check it and submit
                  again.
                </span>
              </Alert>
            </div>
          )}
          <Card className="registration-card mx-auto">
            <Card.Header>
              <h3 className="d-flex my-2">
                Configure stage: {params.typeId} {params.configType}
              </h3>
            </Card.Header>
            <Card.Body>
              <Tabs
                activeKey={key}
                defaultActiveKey="profile"
                onSelect={(k) => setKey(k)}
                className="mb-3 mx-auto d-flex justify-content-center mx-5 px-5"
              >
                <Tab eventKey="activation" title="General">
                  <Row>
                    <Col>
                      <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                        <Form.Label className="d-flex">
                          Number
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip id="tooltip-disabled">
                                Number used to determine the order of the stages
                                in the tournament. Two stages can not have the
                                same number.
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
                        <Form.Control type="number" onChange={handleNumber} />
                        {update && !number && (
                          <span className="text-left blink_me2">
                            This field is required and the value must be between
                            1 and 30.
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                        <Form.Label className="d-flex">
                          Size
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip id="tooltip-disabled">
                                Number of participants at the beginning of the
                                stage.
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
                        <Form.Control type="number" onChange={handleSize} />
                        {!size && update && (
                          <span className="text-left blink_me2">
                            This field is required and this stage type must have
                            a size between 3 and 128
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                        <Form.Label className="d-flex align-items-center">
                          <span>Name </span>
                          <span className="text-small text-muted ml-2">
                            (max 30 characters)
                          </span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          maxLength={30}
                          onChange={handleName}
                        />
                        {!name && update && (
                          <span className="text-left blink_me2">
                            This field is required
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                        <Form.Label className="d-flex">
                          Number of divisions
                        </Form.Label>
                        <Form.Control
                          type="number"
                          onChange={handleNumberOfMatches}
                        />
                        {!numberOfMatches && update && (
                          <span className="text-left blink_me2">
                            This field is required
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Card className="text-warning warning-bg">
                    <Card.Body>
                      <Icon.ExclamationTriangleFill className="mx-1" />
                      <span className="text-left ">
                        This stage type involves a manual matching method. All
                        matches must therefore be manually entered in the
                        "matching values" found in the advanced settings of each
                        division.
                      </span>
                    </Card.Body>
                  </Card>

                  <Link className="d-flex justify-content-end mt-4">
                    <Button
                      type="submit"
                      onClick={handleUpdate}
                      className="primary-btn textColor"
                    >
                      <Icon.PlusLg className="mx-1" size={20} />
                      Create
                    </Button>
                  </Link>
                </Tab>
                <Tab eventKey="advanced" title="Advanced">
                  <Row>
                    <Col>
                      <Form className="d-flex flex-column">
                        <Form.Label className="text-left">
                          Group composition
                        </Form.Label>
                        <Form.Select className="textColor py-2">
                          <option>Adjacent</option>
                          <option value="1">Random</option>
                          <option value="2">Ranking order</option>
                        </Form.Select>
                      </Form>
                    </Col>
                    <Col>
                      <Form className="d-flex flex-column disabled">
                        <Form.Label className="text-left">
                          Matching method
                        </Form.Label>
                        <Form.Select className="textColor py-2" disabled={true}>
                          <option>Manual</option>
                          <option value="1">Home and Away</option>
                          <option value="2">Best of</option>
                        </Form.Select>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span className=" d-flex align-items-center m-4">
                        Points Attribution?
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="tooltip-disabled">
                              Choose how you want points to get distributed to
                              participants depending on their results.
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
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card className="px-4">
                        <div className="d-flex align-items-center my-3 ">
                          <input type="checkbox" className="mr-2" label="win" />
                          <span id="win">
                            Win{" "}
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip id="tooltip-disabled">
                                  Award points when a player wins a match using
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
                        </div>
                        <Card.Text className="mb-4">
                          <span className="d-flex">Points</span>
                          <Form.Control
                            type="number"
                            placeholder="3"
                            defaultValue={3}
                          />
                        </Card.Text>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="px-4">
                        <div className="d-flex align-items-center my-3 ">
                          <input
                            type="checkbox"
                            className="mr-2"
                            label="draw"
                          />
                          <span id="draw">
                            Draw{" "}
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip id="tooltip-disabled">
                                  Award points when a player draws a match using
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
                        </div>
                        <Card.Text className="mb-4">
                          <span className="d-flex">Points</span>
                          <Form.Control
                            type="number"
                            placeholder="1"
                            defaultValue={1}
                          />
                        </Card.Text>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="px-4">
                        <div className="d-flex align-items-center my-3 ">
                          <input
                            type="checkbox"
                            className="mr-2"
                            label="lost"
                          />
                          <span id="lost">
                            Lost{" "}
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip id="tooltip-disabled">
                                  Award points when a player loses a match using
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
                        </div>
                        <Card.Text className="mb-4">
                          <span className="d-flex">Points</span>
                          <Form.Control
                            type="number"
                            placeholder="0"
                            defaultValue={0}
                          />
                        </Card.Text>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card className="px-4 mt-3">
                        <div className="d-flex align-items-center my-3 ">
                          <input
                            type="checkbox"
                            className="mr-2"
                            label="forfeit"
                          />
                          <span id="forfeit">
                            Match forfeit{" "}
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip id="tooltip-disabled">
                                  Awards points when a participant is forfeit in
                                  a match (can be negative for a penalty).
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
                        </div>
                        <Card.Text className="mb-4">
                          <span className="d-flex">Points</span>
                          <Form.Control
                            type="number"
                            placeholder="0"
                            defaultValue={0}
                          />
                        </Card.Text>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card className="px-4 mt-3">
                        <div className="d-flex align-items-center my-3 ">
                          <span>
                            Tiebreakers{" "}
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip id="tooltip-disabled">
                                  Choose how you want to break a tie. You can
                                  Choose more than 1 options
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
                        </div>
                        <Card.Text className="mb-4 d-flex align-items-center">
                          <Form.Select className="  px-2 textColor py-2 w-100">
                            <option>Goals overall</option>
                            <option value="1">Least played matches</option>
                            <option value="2">
                              Least game forfeits overall
                            </option>
                          </Form.Select>
                          <Icon.Trash color="red" size={30} />
                        </Card.Text>
                        <Card.Text className="mb-4 d-flex align-items-center">
                          <Form.Select className="textColor px-2 py-2 w-100">
                            <option>Least played matches</option>
                            <option value="1">Goals overall</option>
                            <option value="2">
                              Least game forfeits overall
                            </option>
                          </Form.Select>
                          <Icon.Trash color="red" size={30} />
                        </Card.Text>
                      </Card>
                    </Col>
                  </Row>
                  <Link className="d-flex justify-content-end mt-2">
                    <Button
                      type="submit"
                      //   onClick={handleUpdate}
                      className="primary-btn textColor"
                    >
                      <Icon.PlusLg className="mx-1" size={20} />
                      Add
                    </Button>
                  </Link>
                  <Link className="d-flex justify-content-end mt-4">
                    <Button
                      type="submit"
                      //   onClick={handleUpdate}
                      className="primary-btn textColor"
                    >
                      <Icon.PlusLg className="mx-1" size={20} />
                      Create
                    </Button>
                  </Link>
                </Tab>
                <Tab eventKey="placement" title="Placement">
                  <span className=" d-flex align-items-center mt-5">
                    Place participants automatically?
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-disabled">
                          If enabled, participants will automatically be placed
                          in the stage using their creation order as seeding.
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
                          //   onClick={handleIsAutoRegistration}
                          className="mr-3"
                        />

                        <Form.Check
                          type="radio"
                          //   onClick={handleIsAutoRegistration}
                          name="register"
                          label="No"
                        />
                      </div>
                    </Form>
                  </div>
                  <Link className="d-flex justify-content-end mt-4">
                    <Button
                      type="submit"
                      //   onClick={handleUpdate}
                      className="primary-btn textColor"
                    >
                      <Icon.PlusLg className="mx-1" size={20} />
                      Create
                    </Button>
                  </Link>
                </Tab>
                <Tab eventKey="match_ettings" title="Match Settings">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3 d-flex flex-column ">
                        <Form.Label className="mr-4 d-flex">
                          Format{" "}
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip id="tooltip-disabled">
                                Define the match format to be applied to this
                                element (tournament, stage, group, round or
                                match) of the tournament, and all elements that
                                depend of it. See the{" "}
                                <Link className="textColor3">
                                  match format guide
                                </Link>{" "}
                                for more information about the structure
                                hierarchy and available formats.
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
                        <Form.Select className="textColor py-2">
                          <option>Single game</option>
                          <option value="1">Home and Away</option>
                          <option value="2">Best of</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Link className="d-flex justify-content-end mt-4">
                    <Button
                      type="submit"
                      //   onClick={handleUpdate}
                      className="primary-btn textColor"
                    >
                      <Icon.PlusLg className="mx-1" size={20} />
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
export default ConfigureStages;
