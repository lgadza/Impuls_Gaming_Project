import { Row, Container, Col, Button, Form } from "react-bootstrap-v5";
import * as Icon from "react-bootstrap-icons";
import "../styling/reservations.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTournament, getTournaments } from "../redux/actions";
import NavigationBar from "./NavigationBar";

const Reservations = ({ visible, onhide }) => {
  const dispatch = useDispatch();

  const handleData = async () => {
    await onhide();
  };

  return (
    <div className="home  main-container">
      <NavigationBar />
      <Container className="reservations-stations-container textColor mt-5">
        <h1 className="d-flex mb-5 px-2">Reservations</h1>
        <Row>
          {[...Array(8)].map((station, index) => {
            return (
              <Col key={index} className="pb-5">
                <div className=" mt-4 px-2 d-flex align-items-center station free station-1">
                  <div className="w-100 d-flex justify-content-between ">
                    <h6>{index + 1}</h6>
                    <span className="d-flex flex-column justify-content-end">
                      <span className="d-flex align-items-center">
                        <Icon.Watch size={15} />
                        <span>14:00</span>
                      </span>
                      <span className="d-flex align-items-center">
                        <Icon.Person size={15} />
                        <span>Louis Gadza</span>
                      </span>{" "}
                    </span>
                  </div>
                  <span className="player-chair chair-1"></span>
                  <span className="player-chair chair-2"></span>
                  <span className="player-chair chair-3"></span>
                  <span className="player-chair chair-4"></span>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default Reservations;
