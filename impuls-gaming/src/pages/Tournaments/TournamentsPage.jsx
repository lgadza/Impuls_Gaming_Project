import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import TournamentCard from "../../components/TournamentCard";
import { useSelector, useDispatch } from "react-redux";
import Table from "../userPage/Table";
import { getTournaments } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import IntersectionObserverComponent from "../../components/ScollAnimation";

const HomeUpdates = () => {
  const [tournamentTable, setTournamentTable] = useState(false);
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.tournaments.tournaments);

  console.log(
    tournaments.tournaments[0].registration.activation.registrationOpeningDate
  );
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
          <div className="px-3 d-flex justify-content-between w-100 align-items-center">
            <h2>Tournaments</h2>
            <Link onClick={handleTournamentTable}>
              <span className="textColor3">See Tournament table</span>
            </Link>
          </div>
        </Row>
        <Row className="my-3">
          <Col
            md={12}
            className={`px-0 my-3 table-animate ${
              !tournamentTable ? "d-none" : ""
            }`}
          >
            <Table />
          </Col>
          {tournaments.tournaments.map((tournament) => (
            <Col md={6} lg={4} className="my-3">
              <IntersectionObserverComponent>
                <div className="hidden">
                  <TournamentCard tournament={tournament} />
                </div>
              </IntersectionObserverComponent>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default HomeUpdates;
