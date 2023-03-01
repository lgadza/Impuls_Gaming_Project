import {
  Container,
  Col,
  Form,
  Row,
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
  Alert,
} from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

import { useSelector, useDispatch } from "react-redux";
import { format, compareAsc } from "date-fns";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
// import fifa from "../../src/img/fifa23.jpg";

const GroupStructure = () => {
  const params = useParams();
  // const tournamentData = useSelector((state) => state.tournaments.tournaments);
  // const tournament = tournamentData.tournaments.find(
  //   (name) => name.name === params.tournamentId
  // );
  // console.log(tournament);
  const [key, setKey] = useState("activation");
  // *******************************BRACKET FUNCTION***********
  const knockoutBoxes = (numPlayers) => {
    // Make sure the number of players is even
    if (numPlayers % 2 !== 0) {
      console.log("Number of players must be even!");
      return;
    }

    // Create initial list of players
    const players = Array.from({ length: numPlayers }, (_, i) => i + 1);

    // Keep track of each round's boxes
    const boxes = [];

    // Play rounds until there are only 2 players left
    while (players.length > 2) {
      // Create empty boxes for this round
      const roundBoxes = Array.from({ length: players.length / 2 }, () => []);

      // Fill boxes with pairs of players
      for (let i = 0; i < players.length; i += 2) {
        roundBoxes[i / 2] = [players[i], players[i + 1]];
      }

      // Update players for next round
      players.splice(0, players.length, ...roundBoxes.flat().filter(Boolean));

      // Add this round's boxes to the overall list of boxes
      boxes.push(roundBoxes);
    }

    // Add final box for the championship match
    const finalBox = [players];
    boxes.push(finalBox);

    // Print out the boxes for each round
    boxes.forEach((roundBoxes, i) => {
      console.log(`Round ${i + 1}: ${JSON.stringify(roundBoxes)}`);
    });
  };

  return (
    <Row className="mt-5">
      <Col className="mb-5 ">
        <Tabs defaultActiveKey="groups" className="mb-3 rounds-robing">
          <Tab eventKey="groups" title="Groups">
            <h4 className="d-flex my-3">Groups</h4>
            <Row>
              {[...Array(8)].map((group, index) => {
                return (
                  <Col lg={3} key={index}>
                    <Card className="mt-3 tournament-structure-card">
                      <Card.Header>
                        <strong>Group {index + 1}</strong>
                      </Card.Header>
                      <Card.Body>
                        {[...Array(4)].map((player, index) => (
                          <span
                            key={index}
                            className="d-flex border-bottom py-1"
                          >
                            _
                          </span>
                        ))}
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Tab>
          <Tab eventKey="playOffs" title="PlayOffs">
            <h4 className="d-flex mt-3">Playoffs</h4>

            <Row>
              <div className="d-flex ">
                <Button variant="secondary px-5 ml-3 mr-5">Round 1</Button>
                <Button variant="secondary px-5 mx-5">Round 2</Button>
                <Button variant="secondary px-5 mx-5">Round 3</Button>
              </div>
            </Row>
            {/* <Row>
              <Col>
                <div className="d-flex flex-column align-items-start px-0 mt-3 mb-2">
                  <h5>Qaurster Final</h5>

                  <div className="d-flex">
                    <div>
                      <div className=" mb-5 player-round-1 d-flex flex-column border round px-5 py-1 bg-white">
                        <span className=" text-nowrap  border-bottom pb-1 ">
                          Louis Gadza
                        </span>
                        <span className="text-nowrap ">Louis Gadza</span>
                      </div>
                      <div className="player-round-2  d-flex flex-column border round px-5 py-1 bg-white mb-5">
                        <span className=" text-nowrap  border-bottom pb-1">
                          Louis Gadza
                        </span>
                        <span className="text-nowrap ">Louis Gadza</span>
                      </div>
                      <div className=" mb-5 player-round-1 d-flex flex-column border round px-5 py-1 bg-white">
                        <span className=" text-nowrap  border-bottom pb-1 ">
                          Louis Gadza
                        </span>
                        <span className="text-nowrap ">Louis Gadza</span>
                      </div>
                      <div className="player-round-2  d-flex flex-column border round px-5 py-1 bg-white mb-5">
                        <span className=" text-nowrap  border-bottom pb-1">
                          Louis Gadza
                        </span>
                        <span className="text-nowrap ">Louis Gadza</span>
                      </div>
                    </div>
                    <div className="mx-5 d-flex flex-column justify-content-center">
                      <div className=" mb-5 player-round-1 d-flex flex-column border round px-5 py-1 bg-white">
                        <span className=" text-nowrap  border-bottom pb-1 ">
                          Louis Gadza
                        </span>
                        <span className="text-nowrap ">Louis Gadza</span>
                      </div>

                      <div className="mt-5 player-round-3  d-flex flex-column border round px-5 py-1 bg-white mb-5">
                        <span className=" text-nowrap  border-bottom pb-1 ">
                          Louis Gadza
                        </span>
                        <span className="text-nowrap ">Louis Gadza</span>
                      </div>
                    </div>
                    <div className="mx-5 d-flex flex-column justify-content-center">
                      <div className="mt-5 player-round-4  d-flex flex-column border round px-5 py-1 bg-white mb-5">
                        <span className=" text-nowrap  border-bottom pb-1 ">
                          Louis Gadza
                        </span>
                        <span className="text-nowrap ">Louis Gadza</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row> */}
            {/* <div>{knockoutBoxes(36)}</div> */}
          </Tab>
          <Tab eventKey="schedule" title="Schedule">
            <Row>
              <Col>
                <div className="d-flex  flex-column my-3">
                  <h4 className="d-flex">Schedule</h4>
                  <span className="d-flex">No schedule found.</span>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Tab>
          <Tab eventKey="latest-results" title="Results">
            <Row>
              <Col md={12}>
                <div className="d-flex  flex-column my-3">
                  <h4 className="d-flex">Latest results</h4>
                  <span className="d-flex">No results found.</span>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};
export default GroupStructure;
