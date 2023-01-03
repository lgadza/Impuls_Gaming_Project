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

import { useState, useEffect } from "react";

const Participants = () => {
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournament.data);
  const tournament = tournamentData.find(
    (name) => name.tournament_name === params.tournamentId
  );
  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setUpdate(true);
  };
  console.log(tournamentData);
  console.log(tournament);
  //   const [key, setKey] = useState("activation");
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    search === false ? setSearch(true) : setSearch(false);
  };
  return (
    <Container fluid className="main-container textColor">
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
                  <h1>0</h1>
                  <span>participants</span>
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
                      <strong>0 participants </strong>
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
                <div className="d-flex justify-content-between">
                  <span>Name</span>
                  <span>Email</span>
                  <span>Created at</span>
                </div>
                <hr />
                <div className="d-flex ">
                  <ul className="pl-0 w-100">
                    {[...Array(10)].map((participant, index) => (
                      <li className="w-100" key={index}>
                        <div className="d-flex justify-content-between">
                          <div>
                            <input className="mr-1" type="checkbox" />
                            <span>Louis Gadza</span>
                          </div>
                          <div className="">
                            <span>date</span>
                            <Icon.ThreeDotsVertical />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <hr />
                <div className="d-flex justify-content-between">
                  <span className="mx-auto my-4">
                    <strong>No participants found</strong>
                  </span>
                </div> */}
                <hr />
                <div className="d-flex">
                  <div className="my-auto">
                    <span>
                      <strong>0 participants </strong>
                      <span className="text-mute">out of 0</span>
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
    </Container>
  );
};
export default Participants;
