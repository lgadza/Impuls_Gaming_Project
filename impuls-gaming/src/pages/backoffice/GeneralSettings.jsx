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
import { format, compareAsc } from "date-fns";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";

const GeneralSettings = () => {
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournament.data);
  const tournament = tournamentData.find(
    (name) => name.tournament_name === params.tournamentId
  );
  console.log(tournamentData);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [key, setKey] = useState("activation");
  const [update, setUpdate] = useState(false);
  const [rules, setRules] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [name, setName] = useState(tournament.tournament_name);
  const [size, setSize] = useState(tournament.size);
  const [platform, setPlatform] = useState(tournament.platform);
  const [location, setLocation] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handlePlatform = (e) => {
    setPlatform(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleRules = (e) => {
    setRules(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleUpdate = () => {
    setUpdate(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formValues = {
    tournament_name: name,
    discipline: "FIFA 23",
    size: size,
    platform: platform,
    location: location,
    startDate: startDate,
    endDate: endDate,
    price: price,
    rules: rules,
    description: description,
  };
  return (
    <Container fluid className="main-container textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav data={tournament} page={"settings"} />
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
          <Card className="registration-card mx-auto">
            <Card.Header>
              <h3 className="d-flex my-4">General Settings</h3>
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
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label className="d-flex">Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={name}
                            onChange={handleName}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="d-flex">
                            Discipline{" "}
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip id="tooltip-disabled">
                                  This cannot be changed within a tournament. If
                                  you want to change the discipline, create a
                                  new tournament.
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
                            type="text"
                            disabled
                            value={tournament.discipline}
                            // placeholder="FIFA 23"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="d-flex">Platform</Form.Label>
                          <Form.Control
                            type="text"
                            value={platform}
                            onChange={handlePlatform}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="d-flex">Organizer</Form.Label>
                          <Form.Control
                            disabled
                            type="text"
                            placeholder="Implus Gaming"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="d-flex">
                            Size{" "}
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip id="tooltip-disabled">
                                  Number of participants at the beginning of the
                                  tournament.
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
                            value={size}
                            onChange={handleSize}
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label className="d-flex">Location</Form.Label>
                        <Form.Control type="text" onChange={handleLocation} />
                      </Form.Group>
                      <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                        <Form.Label className="d-flex">Start date</Form.Label>
                        <Form.Group className="">
                          <DatePicker
                            className="datepicker py-2 px-2 w-100"
                            selected={startDate}
                            placeholderText={new Date()}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            dateFormat="Pp"
                          />
                        </Form.Group>
                      </Form.Group>
                      <Form.Group className="mb-3 d-flex flex-column justify-content-start">
                        <Form.Label className="d-flex">End date</Form.Label>
                        <Form.Group className="">
                          <DatePicker
                            className="datepicker py-2 px-2 w-100"
                            selected={endDate}
                            placeholderText={new Date()}
                            onChange={(date) => setEndDate(date)}
                            showTimeSelect
                            dateFormat="Pp"
                          />
                        </Form.Group>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Link className="d-flex justify-content-end mt-4">
                    <Button
                      type="submit"
                      onClick={handleUpdate}
                      className="primary-btn textColor"
                    >
                      <Icon.Pencil size={20} />
                      Update
                    </Button>
                  </Link>
                </Tab>
                <Tab eventKey="details" title="Details">
                  <Row>
                    <Col>
                      <Form.Group className="mb-3 d-flex flex-column ">
                        <Form.Label className="mr-4 d-flex">
                          Description{" "}
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          onChange={handleDescription}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3 d-flex flex-column ">
                        <Form.Label className="mr-4 d-flex">Prize </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          onChange={handlePrice}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3 d-flex flex-column ">
                        <Form.Label className="mr-4 d-flex">Rules</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={10}
                          onChange={handleRules}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Link className="d-flex justify-content-end mt-4">
                    <Button
                      type="submit"
                      onClick={handleUpdate}
                      className="primary-btn textColor"
                    >
                      <Icon.Pencil size={20} />
                      Update
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
export default GeneralSettings;
