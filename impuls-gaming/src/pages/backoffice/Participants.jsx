import { Container, Col, Row, Card, Button, Alert } from "react-bootstrap";

import BackOfficeNav from "./BackOfficeNav";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { getUsers } from "../../redux/actions/index.js";

const Participants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );

  useEffect(() => {
    const URL = `${process.env.REACT_APP_BE_PROD_URL}/users?limit=10`;
    dispatch(getUsers(URL));
  }, []);

  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setUpdate(true);
  };

  //   const [key, setKey] = useState("activation");
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    search === false ? setSearch(true) : setSearch(false);
  };

  return (
    <Container fluid className="main-container textColor">
      {users && (
        <Row>
          <Col lg={2} className="px-0">
            <BackOfficeNav data={tournament} page={"participants"} />
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
            <Card className="registration-card mx-auto mb-5 main-container">
              <Card.Body>
                <div className="d-flex ">
                  <h3 className="d-flex my-1">Participants</h3>
                  <div className="d-flex ml-auto">
                    <Link className="d-flex justify-content-end my-1 mr-2 link-none-deco">
                      <Button
                        type="submit"
                        onClick={handleUpdate}
                        className="primary-btn textColor"
                      >
                        <Icon.Plus size={20} />
                        Add
                      </Button>
                    </Link>
                    <Link className="d-flex justify-content-end my-1 link-none-deco">
                      <Button
                        type="submit"
                        onClick={handleUpdate}
                        className="primary-btn textColor"
                      >
                        <Icon.ListOl size={20} />
                        Fill All
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="registration-card mx-auto mb-4">
              <Card.Body>
                <div className="d-flex ">
                  <Col className="d-flex flex-column border-right">
                    <h1>{users.totalUsers}</h1>
                    <span>participants</span>
                  </Col>
                  <Col className="d-flex flex-column  border-right">
                    <h1 className=" text-success">{users.totalUsers}</h1>
                    <span className=" text-success"> Checked-in </span>
                  </Col>
                  <Col className="d-flex flex-column ml-auto">
                    <h1>36</h1>
                    <span>Tournament size</span>
                  </Col>
                </div>
              </Card.Body>
            </Card>
            <Card className="registration-card mx-auto">
              <Card.Header>
                <div className="d-flex ">
                  <h3 className="d-flex my-1">List of participants</h3>
                  <div className="d-flex ml-auto">
                    <Link className="d-flex justify-content-end align-items-center main-container my-1 mr-2 link-none-deco">
                      <Icon.ArrowClockwise size={20} />
                      <span className="pr-3">Refresh</span>
                    </Link>
                    {search ? (
                      <Link
                        onClick={handleSearch}
                        className="d-flex justify-content-end align-items-center my-1 main-container link-none-deco"
                      >
                        <Icon.Search size={20} />
                        <span className="pr-3">Search</span>
                      </Link>
                    ) : (
                      <Link
                        onClick={handleSearch}
                        className="d-flex justify-content-end align-items-center my-1 main-container link-none-deco"
                      >
                        <Icon.X size={20} />
                        <span className="pr-3">Hide search</span>
                      </Link>
                    )}
                  </div>
                </div>
              </Card.Header>

              <Card.Body>
                <Card.Text>
                  <div className=" d-flex justify-content-between">
                    <div className="my-auto">
                      <span>
                        <strong>{users.totalUsers} participants </strong>
                        <span className="text-mute">out of 36</span>
                      </span>
                    </div>
                    <div className="ml-auto">
                      <Button
                        disabled={true}
                        type="submit"
                        //   onClick={handleUpdate}
                        className="primary-btn textColor"
                      >
                        <Icon.Trash3Fill size={20} />
                        Delete All
                      </Button>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex mb-3  justify-content-between">
                    <div className="d-flex  justify-content-between">
                      <span className="mr-5">Status</span>
                      <span className="ml-5">Name</span>
                    </div>
                    <span>Email</span>
                    <span>Created at</span>
                  </div>

                  <div>
                    {users.totalUsers > 10 && (
                      <ul className="pl-0 w-100">
                        {users.users.map((participant, index) => (
                          <li className="w-100 participant-list" key={index}>
                            <div className="d-flex justify-content-between my-3">
                              <div className="d-flex align-items-center">
                                <span className="mr-1">
                                  <Icon.CheckCircleFill
                                    size={15}
                                    color="green"
                                    className="mx-0 px-0"
                                  />
                                  <span className="text-small text-muted pl-1">
                                    Checked-in
                                  </span>
                                </span>
                                {/* <span className="mr-1">
                                <Icon.XCircleFill size={15} color="gray" />
                                <span className="text-small text-muted">
                                 Not checked in
                                </span>
                              </span> */}
                                <span className="ml-5">
                                  {participant.name} {participant.surname}
                                </span>
                              </div>

                              <div className="">
                                <span>{participant.email} </span>
                              </div>
                              <div className="">
                                <span className="mr-2">
                                  {format(
                                    new Date(participant.createdAt.toString()),
                                    "dd MMM yyyy"
                                  )}
                                </span>
                                {/* <Icon.ThreeDotsVertical /> */}
                                <input className="mr-1  px-2" type="checkbox" />
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {users.totalUsers === 0 && (
                    <>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="mx-auto my-4">
                          <strong>No participants found</strong>
                        </span>
                      </div>
                    </>
                  )}
                  <div className="d-flex justify-content-center mb-2">
                    {users.links.first && (
                      <Button
                        type="submit"
                        variant="outline-dark"
                        onClick={() => dispatch(getUsers(users.links.first))}
                        className=" mx-1 text-dark"
                      >
                        First
                      </Button>
                    )}
                    {users.links.prev && (
                      <Button
                        type="submit"
                        variant="outline-dark"
                        onClick={() => dispatch(getUsers(users.links.prev))}
                        className=" mx-1 text-dark"
                      >
                        Back
                      </Button>
                    )}
                    {users.links.next && (
                      <Button
                        type="submit"
                        variant="outline-dark"
                        onClick={() => dispatch(getUsers(users.links.next))}
                        className=" mx-1 text-dark"
                      >
                        Next
                      </Button>
                    )}
                    {users.links.last && (
                      <Button
                        type="submit"
                        variant="outline-dark"
                        onClick={() => dispatch(getUsers(users.links.last))}
                        className=" mx-1 text-dark"
                      >
                        Last
                      </Button>
                    )}
                  </div>
                  <div className="d-flex">
                    <div className="my-auto">
                      <span>
                        <strong>0 participants </strong>
                        <span className="text-mute">
                          out of {users.totalUsers}
                        </span>
                      </span>
                    </div>

                    <div className="ml-auto">
                      <Button
                        disabled={true}
                        type="submit"
                        //   onClick={handleUpdate}
                        className="primary-btn textColor"
                      >
                        <Icon.Trash3Fill size={20} />
                        Delete All
                      </Button>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default Participants;
