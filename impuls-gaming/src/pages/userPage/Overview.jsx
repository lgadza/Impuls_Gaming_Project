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
import { editTournament } from "../../redux/actions";

const Overview = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );

  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    setUpdate(true);
  };
  return (
    <Container fluid className=" textColor px-0 ">
      <Row>
        <Col className="my-5 ">
          {update && (
            <div className="registration-card bring-top mx-auto mb-5">
              <Alert key={"success"} variant={"success"}>
                <Icon.CheckCircle size={15} />
                <span>Settings have been successfully updated.</span>
              </Alert>
            </div>
          )}
          <div>
            <Card>
              <Card.Header>
                <h3 className="d-flex h3-mobile my-2">
                  Playoffs - Main Bracket-Round 1{" "}
                </h3>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-around align-items-center">
                  <h5>Louis</h5>
                  <div>
                    <span className="text-white">
                      <input
                        className="results-input text-white py-0 mr-3"
                        type="number"
                        placeholder="0"
                      />{" "}
                      <input
                        className="results-input text-white"
                        type="number"
                        placeholder="0"
                      />{" "}
                    </span>
                  </div>
                  <h5>Sage</h5>
                </div>

                <Card.Body>
                  <hr />
                  <div className="d-flex justify-content-between mt-3">
                    <h5 className=" mb-0  pb-0">Match Report</h5>
                    <div>
                      <span>Forfeit</span>
                      <span className="mx-4">Score</span>
                      <span>Results</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-3">
                    <div className="d-flex align-items-start flex-column">
                      <span>Louis</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <input type="radio" name="forfeit" />
                      <input
                        type="number"
                        className="results-input2 text-white py-0 mx-4"
                      />
                      <div>
                        <span className="loss_bar py-2">L</span>
                        <span className="draw_bar py-2 ">D</span>
                        <span className="win_bar py-2 ">W</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <div className="d-flex align-items-start flex-column">
                      <span>Sage</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <input type="radio" name="forfeit" />
                      <input
                        type="number"
                        className="results-input2 text-white py-0 mx-4"
                      />
                      <div>
                        <span className="loss_bar py-2">L</span>
                        <span className="draw_bar py-2 ">D</span>
                        <span className="win_bar py-2 ">W</span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Link
                  // to={`/backoffice/projects/overview/${tournament}`}
                  className="d-flex justify-content-end m-3 "
                >
                  <Button
                    type="submit"
                    //   onClick={handleUpdate}
                    className="primary-btn textColor"
                  >
                    Report
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
