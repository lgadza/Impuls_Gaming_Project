import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styling/spinner.css";
import { Link, useNavigate } from "react-router-dom";
import giftcard from "../img/playstation_store.jpg";
import * as Icon from "react-bootstrap-icons";
import TournamentCard from "./TournamentCard";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getTournaments } from "../redux/actions";
import Spinner from "./Spinner";

const HomeUpdates = () => {
  const tournaments = useSelector((state) => state.tournaments.tournaments);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tournaments.isLoading);
  useEffect(() => {
    dispatch(getTournaments());
  }, []);
  const [showReservations, setShowReservation] = useState(false);
  const handleHideReservation = () => setShowReservation(false);
  const navigate = useNavigate();
  return (
    <Container className="textColor">
      {isLoading && <Spinner />}

      <div className="d-flex justify-content-between">
        <h1 className="d-flex mb-5 featured-leagues"> Tournaments</h1>
        <Link
          onClick={() => navigate("/reservations")}
          className="textColor3 show-reservs"
        >
          Show available stations
        </Link>
      </div>

      <Row>
        {tournaments.tournaments &&
          tournaments.tournaments.map((tournament) => (
            <Col md={6} lg={4} className="mb-4">
              <TournamentCard tournament={tournament} />
            </Col>
          ))}
      </Row>
      <h2 className="my-5 d-flex featured-league">WHAT'S NEW</h2>

      {/* <Spinner /> */}
      <Row>
        <Col lg={4} md={6} className="mb-4 ">
          <Card>
            <Card.Img variant="top" src={giftcard} />
            <Card.Body>
              <Card.Title className="textColor">Gift Cards</Card.Title>
              <Card.Text className="textColor">
                Gift Cards now available to order for your loved ones
              </Card.Text>
              <Link to={"/giftcard"}>
                {" "}
                <Button variant="danger">Buy Gift Card</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeUpdates;
