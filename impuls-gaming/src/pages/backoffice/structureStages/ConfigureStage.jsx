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
import {
  editTournament,
  getTournaments,
  postTournamentStructure,
} from "../../../redux/actions";
const ConfigureStages = () => {
  const params = useParams();
  const [number, setNumber] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [name, setName] = useState("");
  const [groupSize, setGroupSize] = useState(undefined);
  const [numberOfWinnersPerGroup, setNumberOfWinnersPerGroup] =
    useState(undefined);
  const [numberOfDivisions, setNumberOfDivisions] = useState(undefined);
  const [groupComp, setGroupComp] = useState("");
  const [winPoints, setWinPoints] = useState(3);
  const [win, setWin] = useState(true);
  const [drawPoints, setDrawPoints] = useState(1);
  const [draw, setDraw] = useState(true);
  const [lossPoints, setLossPoints] = useState(0);
  const [loss, setLoss] = useState(true);
  const [forfeitPoints, setForfeitPoints] = useState(-1);
  const [forfeit, setForfeit] = useState(true);
  const [autoParticipantPlacement, setAutoParticipantPlacement] =
    useState(true);
  const [matchFormat, setMatchFormat] = useState("Home and Away");
  const [tiebreaker1, setTiebreaker1] = useState("");
  const [tiebreaker2, setTiebreaker2] = useState("");
  const [tiebreaker3, setTiebreaker3] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [key, setKey] = useState("activation");
  const [update, setUpdate] = useState(false);
  const user = useSelector((state) => state.me.me);
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleGroupComp = (e) => {
    setGroupComp(e.target.value);
  };
  const handleWin = (e) => {
    setWin(e.target.value);
  };
  const handleWinPoints = (e) => {
    setWinPoints(e.target.value);
  };
  const handleDraw = (e) => {
    setDraw(e.target.value);
  };
  const handleDrawPoints = (e) => {
    setDrawPoints(e.target.value);
  };
  const handleLoss = (e) => {
    setLoss(e.target.value);
  };
  const handleLossPoints = (e) => {
    setLossPoints(e.target.value);
  };
  const handleForfeit = (e) => {
    setForfeit(e.target.value);
  };
  const handleForfeitPoints = (e) => {
    setForfeitPoints(e.target.value);
  };
  const handleTiebreaker1 = (e) => {
    setTiebreaker1(e.target.value);
  };
  const handleTiebreaker2 = (e) => {
    setTiebreaker2(e.target.value);
  };
  const handleTiebreaker3 = (e) => {
    setTiebreaker3(e.target.value);
  };
  const handleFalseAutoParticipantPlacement = (e) => {
    setAutoParticipantPlacement(false);
  };
  const handleTrueAutoParticipantPlacement = (e) => {
    setAutoParticipantPlacement(true);
  };
  const handleMatchFormat = (e) => {
    setMatchFormat(e.target.value);
  };
  const handleNumberOfDivisions = (e) => {
    setNumberOfDivisions(e.target.value);
  };

  const stage_type = params.typeId + "_" + params.configType;
  console.log(stage_type);
  const formData = {
    stage_type: stage_type,
    general: {
      number: Number(number),
      size: Number(size),
      name: name,
      divisions: Number(numberOfDivisions),
      participantPerGroup: Number(groupSize),
      numberOfWinnersPerGroup: Number(numberOfWinnersPerGroup),
    },

    advanced: {
      groupComp: groupComp,
      pointsAtrribution: {
        win: { isWin: win, points: Number(winPoints) },
        draw: { isDraw: draw, points: Number(drawPoints) },
        lost: { isLost: loss, points: Number(lossPoints) },
      },
      matchForfeit: {
        isForfeit: forfeit,
        points: Number(forfeitPoints),
      },
    },
    tiebreaker: {
      option1: tiebreaker1,
      option2: tiebreaker2,
      option3: tiebreaker3,
    },
    placement: {
      isPlacement: autoParticipantPlacement,
    },
    matchSettings: {
      matchFormat: matchFormat,
    },
  };

  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );

  const handleUpdate = async () => {
    number && name && size && numberOfDivisions
      ? setUpdate(true)
      : setUpdate(false);
    if (name) {
      await dispatch(postTournamentStructure(formData, tournament._id));
      dispatch(getTournaments());
    }
  };
  return (
    <Container fluid className="main-container textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav user={user} data={tournament} page={"structure"} />
        </Col>
        <Col lg={10} className="my-5 px-5">
          {update && (
            <div className="bring-top mx-auto mb-5">
              <Alert key={"success"} variant={"success"}>
                <Icon.CheckCircle size={15} />
                <span>Settings have been successfully updated.</span>
              </Alert>
            </div>
          )}
          {/* //TODO Do NOT DELETE ME, I AM ERROR MESSAGE FROM THE BE TO BE RENDERED */}
          {/* {!update && (
            <div className="bring-top mx-auto mb-5">
              <Alert key={"warning"} variant={"danger"}>
                <Icon.InfoCircle size={20} color="red" />
                <span className="text-danger">
                  There is invalid data in the form. Please check it and submit
                  again.
                </span>
              </Alert>
            </div>
          )} */}
          <Card className="mx-auto">
            <Card.Header>
              <h5 className="d-flex my-2">
                Configure stage: {params.typeId} {params.configType}
              </h5>
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
                        <Form.Control
                          type="number"
                          required
                          onChange={handleNumber}
                        />
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
                        <Form.Control
                          type="number"
                          required
                          onChange={handleSize}
                        />
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
                          required
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
                          Number of groups
                        </Form.Label>
                        <Form.Control
                          type="number"
                          required
                          min={2}
                          onChange={handleNumberOfDivisions}
                        />
                        {!numberOfDivisions && update && (
                          <span className="text-left blink_me2">
                            This field is required
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col></Col>
                    <Col>
                      <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                        <Form.Label className="d-flex">
                          Participants per Group
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip id="tooltip-disabled">
                                Define how many participants will play in each
                                group.
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
                          type="number"
                          required
                          min={2}
                          onChange={(e) => setGroupSize(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col></Col>
                    <Col>
                      <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                        <Form.Label className="d-flex">
                          Winners per Group
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip id="tooltip-disabled">
                                Define how many participants will win in the
                                group and progress to the next round.
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
                          type="number"
                          required
                          min={2}
                          onChange={(e) =>
                            setNumberOfWinnersPerGroup(e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {params.configType === "league" && (
                    <Card className="text-warning warning-bg">
                      <Card.Body>
                        <Icon.ExclamationTriangleFill className="mx-1" />
                        <span className="text-left ">
                          This stage type involves a manual matching method. All
                          matches must therefore be manually entered in the
                          "matching values" found in the advanced settings of
                          each division.
                        </span>
                      </Card.Body>
                    </Card>
                  )}

                  <Link className="d-flex justify-content-end mt-4">
                    <Button
                      type="submit"
                      onClick={handleUpdate}
                      className="primary-btn textColor text-small d-flex align-items-center justify-content-center"
                      disabled={
                        name &&
                        size &&
                        number &&
                        numberOfDivisions &&
                        numberOfWinnersPerGroup &&
                        groupSize
                          ? false
                          : true
                      }
                    >
                      <Icon.PlusLg className="mx-1" size={15} />
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
                        <Form.Select
                          className="textColor py-2"
                          onSelect={handleGroupComp}
                        >
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
                      <Card className="match-config-card">
                        <Card.Body>
                          <div className="d-flex align-items-center my-3 ">
                            <input
                              type="checkbox"
                              className="mr-2"
                              defaultChecked
                              onChange={handleWin}
                              label="win"
                            />
                            <span id="win">
                              Win{" "}
                              <OverlayTrigger
                                placement="top"
                                overlay={
                                  <Tooltip id="tooltip-disabled">
                                    Award points when a player wins a match
                                    using
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
                              onChange={handleWinPoints}
                            />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="match-config-card">
                        <Card.Body>
                          <div className="d-flex align-items-center my-3 ">
                            <input
                              type="checkbox"
                              className="mr-2"
                              label="draw"
                              onChange={handleDraw}
                              defaultChecked
                            />
                            <span id="draw">
                              Draw{" "}
                              <OverlayTrigger
                                placement="top"
                                overlay={
                                  <Tooltip id="tooltip-disabled">
                                    Award points when a player draws a match
                                    using
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
                              onChange={handleDrawPoints}
                            />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="match-config-card">
                        <Card.Body>
                          <div className="d-flex align-items-center my-3 ">
                            <input
                              type="checkbox"
                              className="mr-2"
                              label="lost"
                              onChange={handleLoss}
                              defaultChecked
                            />
                            <span id="lost">
                              Lost{" "}
                              <OverlayTrigger
                                placement="top"
                                overlay={
                                  <Tooltip id="tooltip-disabled">
                                    Award points when a player loses a match
                                    using
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
                              defaultValue={0}
                              onChange={handleLossPoints}
                            />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card className="mt-3 match-config-card">
                        <Card.Body>
                          <div className="d-flex align-items-center my-3 ">
                            <input
                              type="checkbox"
                              className="mr-2"
                              defaultChecked
                              label="forfeit"
                              onChange={handleForfeit}
                            />
                            <span id="forfeit">
                              Match forfeit{" "}
                              <OverlayTrigger
                                placement="top"
                                overlay={
                                  <Tooltip id="tooltip-disabled">
                                    Awards points when a participant is forfeit
                                    in a match (can be negative for a penalty).
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
                              defaultValue={-1}
                              onChange={handleForfeitPoints}
                            />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card className="mt-3 match-config-card">
                        <Card.Body>
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
                            <Icon.Trash color="red" size={15} />
                          </Card.Text>
                          <Card.Text className="mb-4 d-flex align-items-center">
                            <Form.Select className="textColor px-2 py-2 w-100">
                              <option>Least played matches</option>
                              <option value="1">Goals overall</option>
                              <option value="2">
                                Least game forfeits overall
                              </option>
                            </Form.Select>
                            <Icon.Trash color="red" size={15} />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Link className="d-flex justify-content-end mt-2">
                    <Button
                      type="submit"
                      // onClick={handleUpdate}
                      className="primary-btn textColor text-small d-flex align-items-center justify-content-center"
                    >
                      <Icon.PlusLg className="mx-1" size={15} />
                      Add
                    </Button>
                  </Link>
                  <Link className="d-flex justify-content-end mt-4">
                    <Button
                      type="submit"
                      onClick={handleUpdate}
                      className="primary-btn textColor text-small d-flex align-items-center justify-content-center"
                    >
                      <Icon.PlusLg className="mx-1" size={15} />
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
                          name="autoPlacement"
                          label="Yes"
                          onClick={handleTrueAutoParticipantPlacement}
                          className="mr-3"
                          defaultChecked
                        />

                        <Form.Check
                          type="radio"
                          onClick={handleFalseAutoParticipantPlacement}
                          name="autoPlacement"
                          label="No"
                        />
                      </div>
                    </Form>
                  </div>
                  <Link className="d-flex justify-content-end mt-4">
                    <Button
                      type="submit"
                      onClick={handleUpdate}
                      className="primary-btn textColor text-small d-flex align-items-center justify-content-center"
                    >
                      <Icon.PlusLg className="mx-1" size={15} />
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
                        <Form.Select
                          className="textColor py-2"
                          onChange={handleMatchFormat}
                        >
                          <option value="Single game">Single game</option>
                          <option value="Home and Away">Home and Away</option>
                          <option value="Best of">Best of</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Link className="d-flex justify-content-end mt-4">
                    <Button
                      type="submit"
                      onClick={handleUpdate}
                      className="primary-btn textColor text-small d-flex align-items-center justify-content-center"
                    >
                      <Icon.PlusLg className="mx-1" size={15} />
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
