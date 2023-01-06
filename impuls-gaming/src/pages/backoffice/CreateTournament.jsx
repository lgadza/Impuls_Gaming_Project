import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import fifa23 from "../../img/fifa23.jpg";
import { useSelector, useDispatch } from "react-redux";
import { createTournament } from "../../redux/actions";

const CreateTournament = ({ visible, onhide }) => {
  const dispatch = useDispatch();
  const handleData = () => {
    dispatch(createTournament(formValues));
    onhide();
  };
  const [tournament, setTournament] = useState("");
  const [platformChecked, setPlatformCheck] = useState("");
  const [size, setSize] = useState(undefined);
  const [disable, setDisable] = useState(true);

  const tournamentData = useSelector((state) => state.tournament.data);
  const notUnique = tournamentData.find(
    (name) => name.tournament_name === tournament
  );

  // const handleProvidedData = (e) => {
  //   tournament && size && !notUnique ? setDisable(false) : setDisable(true);
  // };
  const formValues = {
    tournament_name: tournament,
    discipline: "FIFA 23",
    platform: platformChecked,
    size: size,
  };
  const handleTournament = (e) => {
    setTournament(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };

  console.log(formValues);
  return (
    <Modal
      scrollable
      show={visible}
      size="lg"
      onHide={onhide}
      className="modal-hieght textColor"
    >
      <Modal.Header closeButton>
        <Modal.Title>Create new tournament</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0 mt-3 px-4">
        <Container>
          <Row className="mx-auto w-100  mb-5">
            <Form className="w-100">
              <Form.Group className="mb-3 w-100">
                <Form.Label>Tournament name*</Form.Label>
                <Form.Control
                  className="w-100"
                  type="text"
                  required
                  onChange={handleTournament}
                />
                {notUnique && (
                  <span className=" blink_me ml-2 mt-2 textColor">
                    Tournament name already exist
                  </span>
                )}
              </Form.Group>
            </Form>
          </Row>
          <div className="my-2">Discipline</div>
          <Row>
            {[...Array(4)].map((discipline) => (
              <Col md={2} className="mr-5">
                <img className="discipline-img" src={fifa23} alt="" />
              </Col>
            ))}
          </Row>
          <Row>
            <Col>
              <Form className="w-100">
                <Form.Group className="my-3 w-100">
                  <Form.Control
                    className="w-100"
                    type="text"
                    placeholder="chosen game"
                    value="FIFA 23"
                    onChange={handleSize}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <div className="my-2">Platform</div>
          <Row>
            <Col>
              <Button
                className="primary-btn textColor"
                size="lg"
                onClick={() => {
                  setPlatformCheck("Playstation 5");
                }}
              >
                Playstation 5
              </Button>
            </Col>
            <Col>
              {" "}
              <Button
                className="primary-btn textColor"
                size="lg"
                onClick={() => {
                  setPlatformCheck("Playstation 4");
                }}
              >
                Playstation 4
              </Button>
            </Col>
            <Col>
              {" "}
              <Button
                className="primary-btn textColor"
                size="lg"
                onClick={() => {
                  setPlatformCheck("XBox");
                }}
              >
                XBox
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className="w-100">
                <Form.Group className="my-3 w-100">
                  <Form.Label>Size*</Form.Label>
                  <Form.Control
                    className="w-100"
                    type="number"
                    min={0}
                    required
                    onChange={handleSize}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row className="my-5 ">
            <div className="ml-auto">
              <Button onClick={onhide} variant="outline-primary">
                Cancel
              </Button>
              <Link to={`/backoffice/projects/overview/${tournament}`}>
                <Button
                  disabled={notUnique}
                  type="submit"
                  onClick={handleData}
                  className="primary-btn ml-3 textColor"
                >
                  <Icon.Plus size={30} />
                  Create
                </Button>
              </Link>
            </div>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default CreateTournament;
