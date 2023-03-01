import { Col, Row, NavDropdown, Dropdown, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import fifa from "../../img/fifa23.jpg";
import { Link } from "react-router-dom";

const Tournaments = ({ tournaments }) => {
  return (
    <Col className="scoll-table gift-container pb-2 pr-0">
      <Row>
        <Col className="d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle className="textColor my-1 mr-3">
              <span className="bg-secondary text-white  px-3 py-1">Filter</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <span>All</span>
              </Dropdown.Item>
              <Dropdown.Item>
                {/* {" "}
                <Form.Check
                  type="radio"
                  className="mr-3"
                  name="query"
                  label="Past"
                /> */}
                <span>Past</span>
              </Dropdown.Item>
              <Dropdown.Item>
                <span>Ongoing</span>
              </Dropdown.Item>
              <Dropdown.Item>
                <span>Upcoming</span>
              </Dropdown.Item>
              <Dropdown.Item>
                <span>Featured</span>
              </Dropdown.Item>
              <Dropdown.Item>
                <span>Open</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      {tournaments.map((tournament, index) => (
        <div>
          {tournament.name ? (
            <>
              <hr className="my-0" />
              <Link
                to={`/tournaments/${tournament.name}`}
                className="link-none-deco"
              >
                <Row className="w-100 pr-0  mr-0 tournament-list  textColor2 container">
                  <Col className="pb-2 px-1 py-2 d-flex justify-content-between  mr-0 px-0">
                    <div className="d-flex">
                      <img
                        src={tournament.discipline_cover}
                        alt=""
                        className="tournament-preview-img mr-2"
                      />
                      <div className="d-flex flex-column justify-content-start">
                        <h5 className="text-nowrap text-left tournament-name1  ">
                          {tournament.name}
                        </h5>
                        <span className="text-nowrap span d-flex ">
                          {tournament.discipline_name}
                        </span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end mr-0">
                      <span className="span registration-label-hide  ">
                        2 Feb 2023
                      </span>
                    </div>
                    <div>
                      <div className="d-flex flex-column justify-content-end mr-0">
                        <span className="span">
                          {tournament.tournamentParticipants.length}/
                          {tournament.size}
                        </span>
                        <span className="span">Players</span>
                      </div>
                    </div>
                    <div>
                      {tournament.registration.activation.isRegistration &&
                      new Date(
                        tournament.registration.activation.registrationClosingDate
                      ) >= new Date() ? (
                        <div className="d-flex flex-column justify-content-end text-success mr-0">
                          <span className="span registration-label-hide">
                            Registration
                          </span>
                          <span className="span ">Open</span>
                        </div>
                      ) : (
                        <div className="d-flex flex-column justify-content-end text-danger mr-0">
                          <span className="span registration-label-hide">
                            Registration
                          </span>
                          <span className="span ">Closed</span>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </Link>
            </>
          ) : (
            <div>
              No competions open at the moment. We are opening a new competion
              soon! Check again in a few hours
            </div>
          )}
        </div>
      ))}
    </Col>
  );
};
export default Tournaments;
