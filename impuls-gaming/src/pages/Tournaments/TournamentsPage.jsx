import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import TournamentCard from "../../components/TournamentCard";
import { useSelector, useDispatch } from "react-redux";
import Table from "../userPage/Table";
import { getTournaments } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <Row className="mt-3">
          <div className="px-3 d-flex justify-content-between w-100 align-items-center">
            <h1>Tournaments</h1>
            <Link onClick={handleTournamentTable}>
              <span className="textColor3">See Tournament table</span>
            </Link>
          </div>
        </Row>
        <Row>
          <Col
            md={12}
            className={`px-0 mt-2 table-animate ${
              !tournamentTable ? "d-none" : ""
            }`}
          >
            <Table />
          </Col>
          {tournaments.tournaments.map((tournament) => (
            <Col md={6} lg={4}>
              <TournamentCard tournament={tournament} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default HomeUpdates;
