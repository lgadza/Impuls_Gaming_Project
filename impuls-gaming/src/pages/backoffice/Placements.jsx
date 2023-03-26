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
import {
  editTournament,
  editTournamentStructure,
  getTournaments,
} from "../../redux/actions";

const Placements = () => {
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [autoFill, setAutoFill] = useState(false);
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  const user = useSelector((state) => state.me.me);
  const [participants, updateParticipants] = useState(
    tournament.tournamentParticipants
  );
  // const participants = tournament.tournamentParticipants;
  const [filledGroups, setFilledGroups] = useState([]);

  const generateContainers = (n) => {
    let containers = {};
    for (let i = 0; i < n.length; i++) {
      const key = `container${i}`;
      containers[key] = {
        name: `Container ${i}`,
        key: key,
        participants: n[i],
      };
    }
    return containers;
  };

  let containerList;

  if (tournament.structures[0].brackets[0]) {
    containerList = tournament.structures[0].brackets[0];
  } else {
    containerList = generateContainers(filledGroups);
  }

  const brackets = tournament.structures.find(
    (group) => group.general.size > 16
  );
  const fillGroup = (numberOfGroups, participantsList) => {
    const brackets = Array.from({ length: numberOfGroups }, () => []);
    const updatedBrackets = [...brackets];
    const shuffledParticipants = participantsList.sort(
      () => Math.random() - 0.5
    );

    for (let i = 0; i < shuffledParticipants.length; i++) {
      const participant = shuffledParticipants[i];
      const groupIndex = i % updatedBrackets.length;
      // brackets[groupIndex].push(participant);
      updatedBrackets[groupIndex] = [
        ...updatedBrackets[groupIndex],
        participant,
      ];
    }

    setFilledGroups(updatedBrackets);
  };
  const handleShuffle = async () => {
    if (tournament.structures.length > 0) {
      fillGroup(brackets.general.divisions, participants);
    }
  };
  useEffect(() => {
    // handleShuffle();
    // handleUpdate();
  }, []);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceParticipants = [...sourceColumn.participants];
      let destParticipants = [...destColumn.participants];

      const [removed] = sourceParticipants.splice(source.index, 1);
      destParticipants.splice(destination.index, 0, removed);
      // const [removed] = sourceParticipants.find(
      //   (item, index) => index === source.index
      // );
      // const [slicedLastHalf] = destParticipants.slice(destination.index);
      // const [slicedFirstHalf] = destParticipants.slice(0, destination.index);
      // destParticipants = slicedFirstHalf.concat(removed).concat(slicedLastHalf);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          participants: sourceParticipants,
        },
        [destination.droppableId]: {
          ...destColumn,
          participants: destParticipants,
        },
      });
    } else {
      const column = columns[source.droppableId];
      let copiedParticipants = [...column.participants];

      const [removed] = copiedParticipants.splice(source.index, 1);
      copiedParticipants.splice(destination.index, 0, removed);
      // const [removed] = copiedParticipants.find(
      //   (item, index) => index === source.index
      // );
      // const [slicedLastHalf] = copiedParticipants.slice(destination.index);
      // const [slicedFirstHalf] = copiedParticipants.slice(0, destination.index);
      // copiedParticipants = slicedFirstHalf
      //   .concat(removed)
      //   .concat(slicedLastHalf);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          participants: copiedParticipants,
        },
      });
    }
  };

  const [columns, setColumns] = useState(containerList);
  const handleUpdate = async () => {
    // const groups = Object.entries(columns);
    const payLoad = {
      brackets: columns,
    };
    await dispatch(
      editTournamentStructure(
        payLoad,
        tournament._id,
        tournament.structures[0]._id
      )
    );
    dispatch(getTournaments());
  };
  const [isPressed, setIsPressed] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const handleMouseDown = () => {
    setIsPressed(true);
    setIsAnimated(false);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleClick = () => {
    setIsAnimated(true);
    handleUpdate();
  };
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
                    <h5 className="d-flex my-1">Lobby</h5>
                    <div className="d-flex ml-auto">
                      {/* <Link className="d-flex justify-content-end my-1 mr-2 link-none-deco">
                        <Button
                          type="submit"
                          // onClick={handleUpdate}
                          className="primary-btn textColor d-flex align-items-center justify-content-center"
                        >
                          <Icon.Plus className="ml-0 pl-0" size={20} />
                          <span className="text-small"> Add</span>
                        </Button>
                      </Link> */}
                      <Link className="d-flex justify-content-end my-1 link-none-deco mr-3">
                        <Button
                          type="submit"
                          onClick={async () => {
                            await handleShuffle();
                            handleUpdate();
                            if (containerList) {
                              setColumns(containerList);
                            }
                          }}
                          className="primary-btn textColor"
                        >
                          <Icon.Shuffle size={15} />
                        </Button>
                      </Link>
                      <Link className="d-flex justify-content-end my-1 link-none-deco">
                        <Button
                          type="submit"
                          disabled={filledGroups.length === 0}
                          className="primary-btn textColor"
                        >
                          {!autoFill ? (
                            <small
                              onClick={async () => {
                                // handleShuffle();
                                setAutoFill(true);
                                if (containerList) {
                                  setColumns(containerList);
                                }
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

                  <ul>
                    {participants &&
                      participants.map((participant, index) => {
                        participant = participants[index];
                        if (
                          participant &&
                          !autoFill &&
                          !tournament.structures[0].brackets[0]
                        ) {
                          return (
                            <li className="pl-1 text-left">
                              <hr className="my-1 py-0" />
                              <span>{index + 1}</span>
                              <span className="ml-3">
                                {participant.name} {participant.surname}
                              </span>
                            </li>
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
                  </ul>
                </Card.Body>
                <Card.Header>
                  <Link className="d-flex justify-content-end my-1 mr-2 link-none-deco">
                    {/* <Button
                      disabled={Object.entries(columns).length === 0}
                      type="submit"
                      onClick={handleUpdate}
                      className="primary-btn textColor d-flex align-items-center justify-content-center"
                    >
                      <Icon.Check className="ml-0 p-0" size={20} />
                      <span className="text-small"> Save</span>
                    </Button> */}
                    <Button
                      type="submit"
                      onClick={() => {
                        handleClick();
                      }}
                      className={`primary-btn textColor d-flex align-items-center small-text justify-content-center ${
                        isPressed ? "pressed" : ""
                      }`}
                      onMouseDown={handleMouseDown}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    >
                      <span className={`content ${isPressed ? "pressed" : ""}`}>
                        <Icon.Check className="ml-0 p-0" size={20} />
                        <span className="text-small"> Save</span>
                      </span>
                      <span
                        className={`particles ${isAnimated ? "animate" : ""}`}
                      >
                        <span className="particle square red"></span>
                        <span className="particle circle green"></span>
                        <span className="particle square yellow"></span>
                        <span className="particle square red"></span>
                        <span className="particle square yellow"></span>
                        <span className="particle circle green"></span>
                        <span className="particle circle white"></span>
                      </span>
                    </Button>
                  </Link>
                </Card.Header>
              </Card>
            </Col>
            <Col md={6}>
              <Row>
                <DragDropContext
                  onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
                >
                  {tournament.structures.length > 0 &&
                  tournament.structures[0].brackets[0] ? (
                    <>
                      {Object.entries(columns).map(
                        ([groupId, group], index) => {
                          return (
                            <Droppable droppableId={groupId} key={index}>
                              {(provided, snapshot) => {
                                return (
                                  <Col md={6} className="mb-4">
                                    <Card
                                      className="border-hover textColor"
                                      style={{ height: "12rem" }}
                                    >
                                      <Card.Header>
                                        Group {index + 1}{" "}
                                      </Card.Header>
                                      <Card.Body
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                          background: snapshot.isDraggingOver
                                            ? "lightblue"
                                            : "",
                                        }}
                                        className="d-flex flex-column  justify-content-center"
                                      >
                                        <ul className="px-0 mb-0">
                                          {group.participants.map(
                                            (participant, index) => {
                                              return (
                                                <Draggable
                                                  key={participant._id}
                                                  draggableId={participant._id}
                                                  index={index}
                                                >
                                                  {(provided, snapshot) => {
                                                    return (
                                                      <li
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="pl-1 text-left"
                                                        style={{
                                                          userSelect: "none",

                                                          backgroundColor:
                                                            snapshot.isDragging
                                                              ? "#263B4A"
                                                              : "",

                                                          ...provided
                                                            .draggableProps
                                                            .style,
                                                        }}
                                                      >
                                                        <hr
                                                          style={{
                                                            display:
                                                              snapshot.isDragging
                                                                ? "none"
                                                                : "",
                                                          }}
                                                          className="my-1 py-0"
                                                        />

                                                        <span>{index + 1}</span>

                                                        <span
                                                          className="ml-3 pt-1 text-center"
                                                          style={{
                                                            borderRadius:
                                                              snapshot.isDragging
                                                                ? "5px"
                                                                : "",
                                                          }}
                                                        >
                                                          {participant.name}{" "}
                                                          {participant.surname}
                                                        </span>
                                                      </li>
                                                    );
                                                  }}
                                                </Draggable>
                                              );
                                            }
                                          )}
                                          {provided.placeholder}
                                        </ul>
                                      </Card.Body>
                                    </Card>
                                  </Col>
                                );
                              }}
                            </Droppable>
                          );
                        }
                      )}
                    </>
                  ) : tournament.structures.length > 0 && autoFill ? (
                    <>
                      {Object.entries(columns).map(
                        ([groupId, group], index) => {
                          return (
                            <Droppable droppableId={groupId} key={index}>
                              {(provided, snapshot) => {
                                return (
                                  <Col md={6} className="mb-4">
                                    <Card
                                      className="border-hover textColor"
                                      style={{ height: "12rem" }}
                                    >
                                      <Card.Header>
                                        Group {index + 1}{" "}
                                      </Card.Header>
                                      <Card.Body
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                          background: snapshot.isDraggingOver
                                            ? "lightblue"
                                            : "",
                                        }}
                                        className="d-flex flex-column  justify-content-center"
                                      >
                                        <ul className="px-0 mb-0">
                                          {group.participants.map(
                                            (participant, index) => {
                                              return (
                                                <Draggable
                                                  key={participant._id}
                                                  draggableId={participant._id}
                                                  index={index}
                                                >
                                                  {(provided, snapshot) => {
                                                    return (
                                                      <li
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="pl-1 text-left"
                                                        style={{
                                                          userSelect: "none",

                                                          backgroundColor:
                                                            snapshot.isDragging
                                                              ? "#263B4A"
                                                              : "",

                                                          ...provided
                                                            .draggableProps
                                                            .style,
                                                        }}
                                                      >
                                                        <hr
                                                          style={{
                                                            display:
                                                              snapshot.isDragging
                                                                ? "none"
                                                                : "",
                                                          }}
                                                          className="my-1 py-0"
                                                        />

                                                        <span>{index + 1}</span>

                                                        <span
                                                          className="ml-3 pt-1 text-center"
                                                          style={{
                                                            borderRadius:
                                                              snapshot.isDragging
                                                                ? "5px"
                                                                : "",
                                                          }}
                                                        >
                                                          {participant.name}{" "}
                                                          {participant.surname}
                                                        </span>
                                                      </li>
                                                    );
                                                  }}
                                                </Draggable>
                                              );
                                            }
                                          )}
                                          {provided.placeholder}
                                        </ul>
                                      </Card.Body>
                                    </Card>
                                  </Col>
                                );
                              }}
                            </Droppable>
                          );
                        }
                      )}
                    </>
                  ) : (
                    [...Array(tournament.structures[0].general.divisions)].map(
                      (group, index) => {
                        group =
                          tournament.structures[0].general.size /
                          tournament.structures[0].general.divisions;
                        return (
                          <Col md={6} className="mb-4">
                            <Card
                              className="border-hover textColor"
                              style={{ height: "12rem" }}
                            >
                              <Card.Header>Group {index + 1} </Card.Header>
                              <Card.Body className="d-flex flex-column  justify-content-center">
                                <ul className="px-0 mb-0">
                                  {[...Array(group)].map(
                                    (participant, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="pl-1 text-left"
                                        >
                                          {tournament.tournamentParticipants && (
                                            <>
                                              <hr className="my-1 py-0" />
                                              <span>{index + 1}</span>
                                              <span>
                                                <Icon.Plus
                                                  className="my-0 py-0"
                                                  color="green"
                                                  size={20}
                                                />
                                              </span>
                                            </>
                                          )}
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              </Card.Body>
                            </Card>
                          </Col>
                        );
                      }
                    )
                  )}
                </DragDropContext>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Placements;
