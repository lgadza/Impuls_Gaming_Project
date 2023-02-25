import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "../../styling/carousel.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import fifa23 from "../../img/fifa23.jpg";
import { useSelector, useDispatch } from "react-redux";
import { createTournament, getTournaments } from "../../redux/actions";
import Spinner from "../../components/Spinner";
import Carousel from "../../components/Carousel";

const CreateTournament = ({ visible, onhide }) => {
  const dispatch = useDispatch();
  const navagation = useNavigate();
  const [tournament, setTournament] = useState("");
  const [disciplineName, setDisciplineName] = useState("");
  const [platformChecked, setPlatformCheck] = useState("");
  const [size, setSize] = useState(undefined);
  const [disciplineCoverUrl, setDisciplineCoverUrl] = useState("");

  const tournaments = useSelector((state) => state.tournaments.tournaments);
  const notUnique = tournaments.tournaments.find(
    (name) => name.name === tournament
  );
  const projectImgs = useSelector((state) => state.projectImgs.projectImgs);
  const isProjectImgsLoading = useSelector(
    (state) => state.projectImgs.isLoading
  );

  const formValues = {
    name: tournament,
    discipline_name: disciplineName,
    platform: platformChecked,
    size: Number(size),
    discipline_cover: disciplineCoverUrl,
  };
  const handleTournament = (e) => {
    setTournament(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handleData = async () => {
    await dispatch(createTournament(formValues));
    await dispatch(getTournaments());
    onhide();
    navagation.navigate(`/backoffice/projects/overview/${tournament}`);
  };
  console.log("Dname Cover", disciplineCoverUrl);
  return (
    <Modal
      scrollable
      show={visible}
      size="lg"
      onHide={onhide}
      className="modal-hieght textColor"
    >
      {isProjectImgsLoading && <Spinner />}
      {!isProjectImgsLoading && (
        <>
          <Modal.Header>
            <Modal.Title className="d-flex justify-content-between w-100">
              <span>Create new tournament</span>
              <Link>
                <Icon.X
                  onClick={onhide}
                  size={30}
                  className="d-flex justify-content-end btn-close textColor"
                />
              </Link>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-0 mt-3 px-4">
            <Container>
              <Row className="mx-auto w-100  mb-5">
                <Form className="w-100">
                  <Form.Group className="mb-1 w-100">
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
              <div className="mt-2">Choose discipline</div>
              <hr className="mt-1 pt-0" />
              <div className=" ml-5 d-flex justify-content-center">
                <Carousel>
                  {projectImgs.map((discipline, index) => (
                    <Link
                      onClick={() => setDisciplineCoverUrl(discipline.url)}
                      className="image-project"
                      key={index}
                    >
                      <img
                        className="discipline-img"
                        src={discipline.url}
                        alt={discipline._id}
                      />
                    </Link>
                  ))}
                </Carousel>
              </div>
              <Row>
                <Col>
                  <Form className="w-100">
                    <Form.Group className="mt-1 mb-2 w-100">
                      <Form.Control
                        className="w-100"
                        type="text"
                        placeholder="Chosen game"
                        value={disciplineCoverUrl}
                      />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form className="w-100">
                    <Form.Group className="mt-1 mb-2 w-100">
                      <Form.Control
                        className="w-100"
                        type="text"
                        placeholder="Discipline name"
                        value={disciplineName}
                        onChange={(e) => setDisciplineName(e.target.value)}
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

                  <Button
                    disabled={
                      notUnique ||
                      !tournament ||
                      !size ||
                      !platformChecked ||
                      !disciplineName ||
                      !disciplineCoverUrl
                    }
                    type="submit"
                    onClick={handleData}
                    className="primary-btn ml-3 textColor"
                  >
                    <Icon.Plus size={30} />
                    Create
                  </Button>
                </div>
              </Row>
            </Container>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};
export default CreateTournament;
