import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import TournamentCard from "../../components/TournamentCard";
import { useSelector, useDispatch } from "react-redux";
import Table from "../userPage/Table";
import { getTournaments } from "../../redux/actions";
import { useEffect, useState } from "react";

const HomeUpdates = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.tournaments.tournaments);

  console.log(
    tournaments.tournaments[0].registration.activation.registrationOpeningDate
  );
  useEffect(() => {
    dispatch(getTournaments());
  }, []);
  return (
    <div className="home  main-container">
      <NavigationBar />

      <Container className="textColor mt-5 tournament_page ">
        <Row className="mb-5">
          {tournaments.tournaments.map((tournament) => (
            <Col md={6} lg={4} className="mb-4 mt-5">
              <TournamentCard tournament={tournament} />
            </Col>
          ))}
          <Col md={6} lg={6}>
            <Table />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HomeUpdates;
