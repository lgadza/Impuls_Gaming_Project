import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import TournamentCard from "../../components/TournamentCard";
import { useSelector, useDispatch } from "react-redux";
import Fixtures from "../../components/Fixtures";
import { getTournaments } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Spinner from "../../components/Spinner";
import IntersectionObserverComponent from "../../components/ScollAnimation";

const FixturesPage = () => {
  const [tournamentTable, setTournamentTable] = useState(false);
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.tournaments.tournaments);

  const isLoading = useSelector((state) => state.fixtures.isLoading);
  useEffect(() => {
    dispatch(getTournaments());
  }, []);
  const handleTournamentTable = () => {
    tournamentTable ? setTournamentTable(false) : setTournamentTable(true);
  };

  return (
    <div className="home  main-container">
      <NavigationBar />

      <Container className="textColor mt-5 tournament_page ">
        <Row className="my-3">
          <h2 className="ml-3">Fixtures</h2>
        </Row>
        <Row className="my-3">
          {tournaments ? (
            <div className="d-flex justify-content-center">
              <Spinner />
            </div>
          ) : (
            <Fixtures />
          )}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default FixturesPage;
