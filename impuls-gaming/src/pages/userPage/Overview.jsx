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
import { editTournament, getTournaments } from "../../redux/actions";

const Overview = ({ socket, tournamentId }) => {
  const user = useSelector((state) => state.me.me);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const [update, setUpdate] = useState(false);
  const [reportMyScore, setReportMyScore] = useState("");
  const [reportHisScore, setReportHisScore] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [forfeited, setForfeited] = useState(null);
  const reportData = {
    senderName: `${user.name} ${user.surname}`,
    receiverName: receiverName,
    tournament: "63fb123704b9b9cb723ff4ab",
    score: {
      senderName: reportHisScore,
      receiverName: reportHisScore,
      forfeited: forfeited,
    },
  };
  const handleUpdate = (type) => {
    setUpdate(true);
    socket.emit("sendNotification", { reportData, type });
  };

  return (
    <Container fluid className=" textColor px-0 fixture-container">
      <Row>
        <Col className="mb-5 ">
          {update && (
            <div className="card registration-card bring-top mx-auto mb-5">
              <Alert key={"success"} variant={"success"}>
                <Icon.CheckCircle size={15} />
                <span>Your results report has been successfully updated.</span>
              </Alert>
            </div>
          )}
          <div>
            <Card>
              <Card.Header>
                <h6 className="d-flex text-nowrap h3-mobile my-2">
                  Playoffs - Main Bracket-Round 1{" "}
                </h6>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between px-3 align-items-center">
                  <div className="d-flex flex-column">
                    <h5
                      className={` d-flex user-name-reporter ${
                        Number(reportMyScore) >= Number(reportHisScore)
                          ? "text-success"
                          : "text-danger"
                      } `}
                    >
                      {user.name}
                    </h5>
                    {forfeited === user.name && (
                      <span className="text-danger text-small">
                        You forfeited
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-white">
                      <input
                        className={`results-input mr-3 ${
                          Number(reportMyScore) >= Number(reportHisScore)
                            ? "text-success"
                            : "text-danger"
                        } `}
                        type="number"
                        disabled={true}
                        placeholder="-"
                        value={Number(reportMyScore)}
                      />{" "}
                      <input
                        disabled={true}
                        className={`results-input ${
                          Number(reportHisScore) >= Number(reportMyScore)
                            ? "text-success"
                            : "text-danger"
                        } `}
                        type="number"
                        placeholder="-"
                        value={Number(reportHisScore)}
                      />{" "}
                    </span>
                  </div>
                  <div className="d-flex flex-column text-right">
                    <h5
                      className={` user-name-reporter ${
                        Number(reportHisScore) >= Number(reportMyScore)
                          ? "text-success"
                          : "text-danger"
                      } `}
                    >
                      {receiverName ? (
                        <span className="text-nowrap">{receiverName}</span>
                      ) : (
                        <span className="text-danger text-nowrap">
                          {" "}
                          Opponent
                        </span>
                      )}
                    </h5>
                    {forfeited === receiverName && (
                      <span className="text-danger text-small">
                        He forfeited
                      </span>
                    )}
                  </div>
                </div>

                <Card.Body>
                  <hr />
                  <div className="d-flex justify-content-between mt-3">
                    <h5 className=" mb-0  pb-0 textColor3">Match Report</h5>
                    <div>
                      <span>Forfeit</span>
                      <span className="ml-4">Score</span>
                      {/* <span>Results</span> */}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-3">
                    <div className="d-flex align-items-start flex-column">
                      <span>{user.name}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        onClick={() => setForfeited(user.name)}
                        name="forfeit"
                      />
                      <input
                        type="number"
                        onChange={(e) => setReportMyScore(e.target.value)}
                        className="results-input2 text-white py-0 ml-4"
                      />
                      <div>
                        {/* <span className="loss_bar py-2">L</span>
                        <span className="draw_bar py-2 ">D</span>
                        <span className="win_bar py-2 ">W</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <div className="d-flex align-items-start flex-column">
                      {tournamentId ? (
                        <Form.Select
                          onClick={(e) => setReceiverName(e.target.value)}
                          className="textColor px-2 py-1"
                          placeholder="Opponent"
                        >
                          <option value="">Opponent</option>
                          <option>Sage</option>
                          <option>Steve</option>
                          <option>Lelo</option>
                        </Form.Select>
                      ) : (
                        <span className="text-mute">No Opponent available</span>
                      )}
                    </div>
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        onClick={() => setForfeited(receiverName)}
                        name="forfeit"
                      />
                      <input
                        type="number"
                        onChange={(e) => setReportHisScore(e.target.value)}
                        className="results-input2 text-white py-0 ml-4"
                      />
                      {/* <div>
                        <span className="loss_bar py-2">L</span>
                        <span className="draw_bar py-2 ">D</span>
                        <span className="win_bar py-2 ">W</span>
                      </div> */}
                    </div>
                  </div>
                </Card.Body>
                <Link
                  // to={`/backoffice/projects/overview/${tournament}`}
                  className="d-flex justify-content-end m-3 "
                >
                  <Button
                    type="submit"
                    onClick={() => handleUpdate("reportScore")}
                    className="primary-btn textColor"
                  >
                    <small>Report</small>
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Overview;
