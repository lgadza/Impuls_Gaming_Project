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
import BackOfficeNav from "./BackOfficeNav";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

import { useSelector, useDispatch } from "react-redux";
import { format, compareAsc } from "date-fns";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import { editTournament } from "../../redux/actions";

const DisputeReport = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tournamentData = useSelector((state) => state.tournaments.tournaments);
  const tournament = tournamentData.tournaments.find(
    (name) => name.name === params.tournamentId
  );

  const [update, setUpdate] = useState(false);
  const user = useSelector((state) => state.me.me);
  const handleUpdate = () => {
    setUpdate(true);
  };
  return (
    <Container fluid className="main-container textColor">
      <Row>
        <Col lg={2} className="px-0">
          <BackOfficeNav user={user} data={tournament} page={"settings"} />
        </Col>
        <Col lg={10} className="my-5 px-5">
          {update && (
            <div className="registration-card bring-top mx-auto mb-5">
              <Alert key={"success"} variant={"success"}>
                <Icon.CheckCircle size={15} />
                <span>Settings have been successfully updated.</span>
              </Alert>
            </div>
          )}
          <div>
            <Card className="registration-card mx-auto">
              <Card.Header>
                <h3 className="d-flex my-2">
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
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="registration-card mx-auto mt-5">
              <Card.Body>
                <h5 className="d-flex mb-0 pb-0">Match Report by Louis</h5>
                <span className="d-flex text-small mt-0">
                  Reported on 21 Aug 2023 at 20:20
                </span>
                <div className="d-flex  align-items-center">
                  <Card style={{ width: "20rem" }} className="d-flex mt-3">
                    <div className="d-flex justify-content-between">
                      <span className="pl-2">Louis</span>
                      <span className="pr-2">0</span>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <span className="pl-2">
                        <strong>Sage</strong>
                      </span>
                      <span className="pr-2 text-success ">1</span>
                    </div>
                  </Card>
                </div>
                <h5 className="d-flex mb-0 mt-4 pb-0 textColor3">
                  Match Report by Sage
                </h5>
                <span className="d-flex text-small mt-0">
                  Reported on 21 Aug 2023 at 20:20
                </span>
                <div className="d-flex  align-items-center">
                  <Card style={{ width: "20rem" }} className="d-flex mt-3">
                    <div className="d-flex justify-content-between">
                      <span className="pl-2">Louis</span>
                      <span className="pr-2">0</span>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <span className="pl-2">
                        <strong>Sage</strong>
                      </span>
                      <span className="pr-2 text-success ">3</span>
                    </div>
                  </Card>
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
                  <Icon.ArrowLeft size={25} />
                  Back
                </Button>
              </Link>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default DisputeReport;
