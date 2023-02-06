import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import TournamentCard from "../../components/TournamentCard";
import { useSelector, useEffect } from "react-redux";

const HomeUpdates = () => {
  const tournaments = useSelector((state) => state.tournaments.tournaments);
  console.log(tournaments);
  return (
    <div className="home  main-container">
      <NavigationBar />

      <Container className="textColor mt-5 tournament_page px-0">
        <Row className="mb-5">
          {[...Array(10)].map((t) => (
            <Col md={6} lg={3} className="mb-4 mt-5">
              <TournamentCard />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default HomeUpdates;
