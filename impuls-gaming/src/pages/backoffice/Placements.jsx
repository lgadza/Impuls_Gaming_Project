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

  const playersList = tournament.tournamentParticipants;

  let containerList = generateContainers(filledGroups);

  const [lobby, setLobby] = useState(playersList);

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
      fillGroup(brackets.general.divisions, tournament.tournamentParticipants);
    }
  };
  useEffect(() => {
    handleShuffle();
  }, []);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceParticipants = [...sourceColumn.participants];
      const destParticipants = [...destColumn.participants];

      // const [removed] = sourceParticipants.slice(
      //   source.index,
      //   source.index + 1
      // );
      // destParticipants = [
      //   ...destParticipants.slice(0, destination.index),
      //   removed,
      //   ...destParticipants.slice(destination.index),
      // ];

      const [removed] = sourceParticipants.splice(source.index, 1);
      destParticipants.splice(destination.index, 0, removed);
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
      const copiedParticipants = [...column.participants];
      // const [removed] = copiedParticipants.slice(
      //   source.index,
      //   source.index + 1
      // );
      // copiedParticipants = [
      //   ...copiedParticipants.slice(0, destination.index),
      //   removed,
      //   ...copiedParticipants.slice(destination.index),
      // ];
      const [removed] = copiedParticipants.splice(source.index, 1);
      copiedParticipants.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          participants: copiedParticipants,
        },
      });
    }
  };
  // ALTANATIVE
  // const SortableList=({ items, onSort, children })=> {
  // const handleDragEnd = (result) => {
  //   if (!result.destination) {
  //     return;
  //   }

  //   const [startIndex, endIndex] = [result.source.index, result.destination.index];
  //   onSort({ startIndex, endIndex });
  // };

  // const renderListItem = (item) => (draggableProvided) => {
  //   const restProps = {
  //     innerRef: draggableProvided.innerRef,
  //     ...draggableProvided.draggableProps,
  //     ...draggableProvided.dragHandleProps,
  //   };

  //   return children(item, restProps);
  // };
  // ALTANATIVE
  const [columns, setColumns] = useState(containerList);
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
                            handleShuffle();
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
                        <Button type="submit" className="primary-btn textColor">
                          {!autoFill ? (
                            <small
                              onClick={() => {
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
                    {lobby &&
                      lobby.map((participant, index) => {
                        participant = participants[index];
                        if (participant && !autoFill) {
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
                <DragDropContext
                  onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
                >
                  {tournament.structures.length > 0 && autoFill ? (
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
