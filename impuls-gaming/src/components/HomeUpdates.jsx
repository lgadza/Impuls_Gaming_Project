import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styling/spinner.css";

import { Link } from "react-router-dom";
import giftcard from "../img/playstation_store.jpg";
import fifa23 from "../img/fifa23 .jpg";
import * as Icon from "react-bootstrap-icons";
import logo from "../img/Blue_Futuristic_Gaming_Logo-removebg-preview.png";
import tournament from "../img/tournament.webp";
import mk from "../img/mk.avif";
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

  return (
    <Container className="textColor">
      {isLoading && <Spinner />}

      <h1 className="d-flex mb-5 featured-leagues"> Tournaments</h1>

      <Row>
        {tournaments.tournaments &&
          tournaments.tournaments.map((tournament) => (
            <Col md={6} lg={4} className="mb-4">
              <TournamentCard tournament={tournament} />
            </Col>
          ))}
        {/* <Col md={6} lg={4} className="mb-4">
          <Card className="featured-games">
            <Card.Img variant="top" src={mk} />
            <Card.Body>
              <Card.Title className="textColor d-flex">
                <strong>Mortal Kombat Tournament</strong>
              </Card.Title>
              <div className=" d-flex">
                <Icon.Calendar2Event size={30} />
                <span>Registration Coming Soon </span>
              </div>
              <Card.Text className="bg-dark py-2 my-3 px-2 textColor d-flex">
                Tournaments by Impuls Gaming
                <img
                  className="league-provider-img ml-2"
                  src={logo}
                  alt="logo"
                />
              </Card.Text>
              <Link
                to="/sign-up"
                className="w-100 d-flex mt-4 justify-content-end"
              >
                {" "}
                <Button disabled variant="danger">
                  Registration Opens Soon
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col> */}
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
