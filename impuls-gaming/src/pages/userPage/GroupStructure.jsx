import { Container, Col, Row, Card, Button } from "react-bootstrap";
import "../../styling/tournamentBracket.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import TournamentBracket from "../../components/TournamentBracket";

const GroupStructure = () => {
  const [participantsPerGroup, setParticipantsPerGroup] = useState(null);
  const [filledGroups, setFilledGroups] = useState([]);
  const params = useParams();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );
  const groups = tournament.structures.find((group) => group.general.size > 16);
  const fillGroup = (numberOfGroups, participantsList) => {
    const groups = Array.from({ length: numberOfGroups }, () => []);

    const shuffledParticipants = participantsList.sort(
      () => Math.random() - 0.5
    );

    for (let i = 0; i < shuffledParticipants.length; i++) {
      const participant = shuffledParticipants[i];
      const groupIndex = i % groups.length;
      groups[groupIndex].push(participant);
    }

    setFilledGroups(groups);
  };
  useEffect(() => {
    if (tournament.structures.length > 0) {
      if (groups.general.participantPerGroup) {
        setParticipantsPerGroup(groups.general.participantPerGroup);
      } else {
        setParticipantsPerGroup(
          Math.floor(groups.general.size / groups.general.divisions)
        );
      }
      fillGroup(groups.general.divisions, tournament.tournamentParticipants);
    }
  }, []);

  return (
    <Row className="mt-5">
      <Col className="mb-5 ">
        <Tabs defaultActiveKey="groups" className="mb-3 rounds-robing">
          <Tab eventKey="groups" title="Groups">
            <h5 className="d-flex my-3">Groups</h5>
            <Row>
              {tournament.structures.length > 0 ? (
                <>
                  {filledGroups.map((group, index) => {
                    return (
                      <Col lg={3} key={index}>
                        <Card className="mt-3 tournament-structure-card">
                          <Card.Header>
                            <strong>Group {index + 1}</strong>
                          </Card.Header>
                          <Card.Body style={{ minWidth: "15rem" }}>
                            {tournament.tournamentParticipants.length ===
                            groups.general.size
                              ? group.map((participant, index) => {
                                  return (
                                    <span
                                      key={index}
                                      className="d-flex border-bottom py-1"
                                    >
                                      {participant.name} {participant.surname}
                                    </span>
                                  );
                                })
                              : [...Array(4)].map((placeHolder, index) => {
                                  return (
                                    <span
                                      className="d-flex flex-column"
                                      key={index}
                                    >
                                      -
                                    </span>
                                  );
                                })}
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </>
              ) : (
                <Col lg={3}>
                  <Card className="mt-3 tournament-structure-card">
                    <Card.Header>No groups available</Card.Header>
                  </Card>
                </Col>
              )}
            </Row>
          </Tab>
          <Tab eventKey="playOffs" title="PlayOffs">
            <h4 className="d-flex mt-3">Playoffs</h4>

            <Row>
              <div className="w-100">
                <TournamentBracket />
              </div>
            </Row>
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
