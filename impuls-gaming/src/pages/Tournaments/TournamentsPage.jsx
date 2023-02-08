import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import TournamentCard from "../../components/TournamentCard";
import { useSelector, useEffect } from "react-redux";

const HomeUpdates = () => {
  const tournaments = useSelector((state) => state.tournaments.tournaments);

  console.log(
    tournaments.tournaments[0].registration.activation.registrationOpeningDate
  );
  return (
    <div className="home  main-container">
      <NavigationBar />

      <Container className="textColor mt-5 tournament_page ">
        <Row className="mb-5">
          {tournaments.tournaments.map((tournament) => (
            <Col md={6} lg={3} className="mb-4 mt-5">
              <TournamentCard tournament={tournament} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default HomeUpdates;
