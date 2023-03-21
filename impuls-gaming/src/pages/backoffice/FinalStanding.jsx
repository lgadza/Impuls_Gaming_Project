import { Button, Card, Col, Container, Row } from "react-bootstrap";
import BackOfficeNav from "./BackOfficeNav";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
const FinalStanding = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  const user = useSelector((state) => state.me.me);
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
  };
  return (
    <Container fluid className="main-container2 textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav
            data={tournament}
            user={user}
            page={"final-standing"}
          />
        </Col>
        <Col lg={10} className="my-5 px-5">
          <Card className="mx-auto mt-4">
            <Card.Header>
              <div className="d-flex ">
                <h5 className="d-flex my-1">Participants</h5>
                <div className="d-flex ml-auto">
                  <Link className="d-flex justify-content-end my-1 mr-2 link-none-deco">
                    <Button
                      type="submit"
                      onClick={() => {
                        // handleUpdate()
                        handleClick();
                      }}
                      className={`primary-btn textColor d-flex align-items-center justify-content-center ${
                        isPressed ? "pressed" : ""
                      }`}
                      onMouseDown={handleMouseDown}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    >
                      <span className={`content ${isPressed ? "pressed" : ""}`}>
                        <Icon.Plus size={20} />
                        <span className="text-small">Add</span>
                      </span>
                      <span
                        className={`particles ${isAnimated ? "animate" : ""}`}
                      >
                        <span className="particle-square-red"></span>
                        <span className="particle-circle-green"></span>
                        <span className="particle-square-yellow"></span>
                        <span className="particle-square-red"></span>
                        <span className="particle-square-yellow"></span>
                        <span className="particle-circle-green"></span>
                        <span className="particle-circle-white"></span>
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </Card.Header>
            <Card.Body>There is currently no final.</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default FinalStanding;
