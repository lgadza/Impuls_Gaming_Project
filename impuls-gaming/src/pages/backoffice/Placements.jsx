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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BackOfficeNav from "./BackOfficeNav";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Placements = () => {
  const params = useParams();
  // console.log(params.tournamentId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [autoShuffle, setAutoShuffle] = useState(false);
  const [autoFill, setAutoFill] = useState(false);
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  const user = useSelector((state) => state.me.me);
  const [participants, updateParticipants] = useState(
    tournament.tournamentParticipants
  );
  const [participantsPerGroup, setParticipantsPerGroup] = useState(null);
  const [filledGroups, setFilledGroups] = useState([]);
  const handleOnDragEnd = (result) => {
    console.log(result, "RESULTS");
    const items = Array.from(participants);
    const [reOrderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reOrderedItem);
    updateParticipants(items);
  };
  const generateContainers = (n) => {
    let containers = {};
    for (let i = 1; i <= n; i++) {
      const key = `container${i}`;
      containers[key] = {
        name: `Container ${i}`,
        key: key,
        participants: [],
      };
    }
    return containers;
  };
  // const dragAndDrop = () => {
  const initialData = {
    containers: {
      mainContainer: {
        name: "lobby",
        key: "main",
        participants: tournament.tournamentParticipants,
      },
      ...generateContainers(Number(tournament.structures[0].general.divisions)),
    },
  };
  // };
  const [groups, setGroups] = useState(initialData.containers);
  console.log(groups, "GROUPS");
  const lobby = Object.values(groups)[0];
  console.log(lobby, "LOBBY");
  const [waitingRoom, setWaitingRoom] = useState(lobby);
  const brackets = tournament.structures.find(
    (group) => group.general.size > 16
  );
  const fillGroup = (numberOfGroups, participantsList) => {
    const brackets = Array.from({ length: numberOfGroups }, () => []);

    const shuffledParticipants = participantsList.sort(
      () => Math.random() - 0.5
    );

    for (let i = 0; i < shuffledParticipants.length; i++) {
      const participant = shuffledParticipants[i];
      const groupIndex = i % brackets.length;
      brackets[groupIndex].push(participant);
    }

    setFilledGroups(brackets);
  };
  const handleShuffle = () => {
    if (tournament.structures.length > 0) {
      if (brackets.general.participantPerGroup) {
        setParticipantsPerGroup(brackets.general.participantPerGroup);
      } else {
        setParticipantsPerGroup(
          Math.floor(brackets.general.size / brackets.general.divisions)
        );
      }
      fillGroup(brackets.general.divisions, tournament.tournamentParticipants);
    }
  };
  useEffect(() => {
    handleShuffle();
  }, []);
  return (
    <Container fluid className="main-container textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav user={user} data={tournament} page={"placements"} />
        </Col>
        <Col lg={10} className="my-5 px-5">
          <h5 className="d-flex mb-5">Placements</h5>
          <Row className=" mb-5">
            <Col md={6}>
              <Card
                className="border-hover textColor"
                style={{ height: "35rem" }}
              >
                <Card.Header>
                  <div className="d-flex ">
                    <h5 className="d-flex my-1">Seeding</h5>
                    <div className="d-flex ml-auto">
                      <Link className="d-flex justify-content-end my-1 mr-2 link-none-deco">
                        <Button
                          type="submit"
                          // onClick={handleUpdate}
                          className="primary-btn textColor d-flex align-items-center justify-content-center"
                        >
                          <Icon.Plus className="ml-0 pl-0" size={20} />
                          <span className="text-small"> Add</span>
                        </Button>
                      </Link>
                      <Link className="d-flex justify-content-end my-1 link-none-deco mr-2">
                        <Button
                          type="submit"
                          onClick={() => {
                            setAutoShuffle(true);
                            handleShuffle();
                          }}
                          className="primary-btn textColor"
                        >
                          <Icon.Shuffle size={15} />
                        </Button>
                      </Link>
                      <Link className="d-flex justify-content-end my-1 link-none-deco">
                        <Button type="submit" className="primary-btn textColor">
                          {!autoFill ? (
                            <small
                              onClick={() => {
                                setAutoFill(true);
                              }}
                            >
                              Fill groups
                            </small>
                          ) : (
                            <small
                              onClick={() => {
                                setAutoFill(false);
                              }}
                            >
                              Clear groups
                            </small>
                          )}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body className="lobby-placement pb-2">
                  <div className="d-flex">
                    <span className="pl-1">#</span>
                    <span className="mx-4">Name</span>
                    <hr />
                  </div>
                  <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="participants">
                      {(provided) => (
                        <ul
                          className="px-0 mb-0"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {lobby.participants.map((participant, index) => {
                            participant = participants[index];
                            if (participant && !autoFill) {
                              return (
                                <Draggable
                                  key={index}
                                  draggableId={participant._id}
                                  index={index}
                                  type="participant"
                                >
                                  {(provided) => (
                                    <li
                                      className="pl-1 text-left"
                                      {...provided.dragHandleProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                    >
                                      <hr className="my-1 py-0" />
                                      <span>{index + 1}</span>
                                      <span className="ml-3">
                                        {participant.name} {participant.surname}
                                      </span>
                                    </li>
                                  )}
                                </Draggable>
                              );
                            } else {
                              return (
                                <li li key={index} className="pl-1 text-left">
                                  <hr className="my-1 py-0" />
                                  <span>{index + 1}</span>
                                  <span>
                                    <Icon.Plus
                                      className="my-0 py-0"
                                      color="green"
                                      size={30}
                                    />
                                  </span>
                                </li>
                              );
                            }
                          })}
                          {provided.placeholder}
                        </ul>
                      )}
                    </Droppable>
                  </DragDropContext>
                </Card.Body>
                <Card.Footer>
                  <Link className="d-flex justify-content-end my-1 mr-2 link-none-deco">
                    <Button
                      type="submit"
                      // onClick={handleUpdate}
                      className="primary-btn textColor d-flex align-items-center justify-content-center"
                    >
                      <Icon.Check className="ml-0 p-0" size={20} />
                      <span className="text-small"> Save</span>
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={6}>
              <Row>
                {tournament.structures.length > 0 && autoFill ? (
                  <>
                    {filledGroups.map((group, index) => {
                      return (
                        <Col md={6} key={index} className="mb-4">
                          <Card
                            className="border-hover textColor"
                            style={{ height: "12rem" }}
                          >
                            <Card.Header>Group {index + 1} </Card.Header>
                            <Card.Body className="d-flex flex-column  justify-content-center">
                              <ul className="px-0 mb-0">
                                {group.map((participant, index) => {
                                  return (
                                    <li key={index} className="pl-1 text-left">
                                      <hr className="my-1 py-0" />
                                      <span>{index + 1}</span>
                                      <span className="ml-3">
                                        {participant.name} {participant.surname}
                                      </span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {[...Array(tournament.structures[0].general.divisions)].map(
                      (group, index) => {
                        group =
                          tournament.structures[0].general.size /
                          tournament.structures[0].general.divisions;
                        return (
                          <Col md={6} key={index} className="mb-4">
                            <Card
                              className="border-hover textColor"
                              style={{ height: "12rem" }}
                            >
                              <Card.Header>Group {index + 1} </Card.Header>
                              <Card.Body className="d-flex flex-column  justify-content-center">
                                <ul className="px-0 mb-0">
                                  {[...Array(group)].map(
                                    (participant, index) => {
                                      participant =
                                        tournament.tournamentParticipants;
                                      if (participant && autoFill) {
                                        return (
                                          <li
                                            key={index}
                                            className="pl-1 text-left"
                                          >
                                            <hr className="my-1 py-0" />
                                            <span>{index + 1}</span>
                                            <span>
                                              {participant.name}{" "}
                                              {participant.surname}
                                            </span>
                                          </li>
                                        );
                                      } else {
                                        return (
                                          <li
                                            key={index}
                                            className="pl-1 text-left"
                                          >
                                            <hr className="my-1 py-0" />
                                            <span>{index + 1}</span>
                                            <span>
                                              <Icon.Plus
                                                className="my-0 py-0"
                                                color="green"
                                                size={20}
                                              />
                                            </span>
                                          </li>
                                        );
                                      }
                                    }
                                  )}
                                </ul>
                              </Card.Body>
                            </Card>
                          </Col>
                        );
                      }
                    )}
                  </>
                )}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Placements;
