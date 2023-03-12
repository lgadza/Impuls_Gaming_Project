import { useEffect, useRef } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTournamentsFixtures } from "../redux/actions";
import Avatar from "./Avatar";

const Fixtures = () => {
  const dispatch = useDispatch();
  const fixturesRef = useRef([]);
  const fixtures = useSelector((state) => state.fixtures.fixtures);

  useEffect(() => {
    dispatch(getTournamentsFixtures());
  }, []);
  useEffect(() => {
    const fixture = fixtures.find(
      (fixture) => fixture.match_status !== "Finished"
    );

    if (fixture) {
      fixturesRef.current[fixture.match_id].scrollIntoView();
    }
  }, [fixtures]);

  return (
    <Container fluid>
      <Row className="fixture-container">
        {fixtures.map((fixture, index) => (
          <Col
            md={6}
            key={index}
            ref={(element) => (fixturesRef.current[fixture.match_id] = element)}
            className="border participant-list"
          >
            <div className="d-flex d-block pb-2 mt-2 text-mute text-secondary">
              <Avatar
                height={20}
                width={50}
                alt={fixture.league_name}
                src={fixture.league_logo}
              />
              {/* <span className="ml-2">{fixture.league_name}</span> */}
            </div>
            <hr className="py-0 my-0" />
            <div className="d-flex justify-content-between  border-round p-2">
              <div className="d-flex justify-content-between ">
                <div className="d-flex flex-column match_teams mr-5">
                  <div className="d-flex">
                    <Avatar
                      height={20}
                      width={20}
                      alt={fixture.match_awayteam_name}
                      src={fixture.team_away_badge}
                    />
                    <span
                      className={`mb-2 ml-2 text-left text-nowrap ${
                        Number(fixture.match_awayteam_score) >
                        Number(fixture.match_hometeam_score)
                          ? "textColor"
                          : "text-secondary"
                      }`}
                    >
                      {fixture.match_awayteam_name}{" "}
                    </span>
                  </div>
                  <div className="d-flex">
                    <Avatar
                      height={20}
                      width={20}
                      alt={fixture.match_hometeam_name}
                      src={fixture.team_home_badge}
                    />
                    <span
                      className={`text-left ml-2 text-nowrap ${
                        Number(fixture.match_awayteam_score) <
                        Number(fixture.match_hometeam_score)
                          ? "textColor"
                          : "text-secondary"
                      } `}
                    >
                      {fixture.match_hometeam_name}
                    </span>
                  </div>
                </div>
                {fixture.match_status === "Finished" ? (
                  <div className="d-flex flex-column align-items-between justify-content-between ml-5">
                    <span
                      className={`mb-2${
                        Number(fixture.match_awayteam_score) >
                        Number(fixture.match_hometeam_score)
                          ? "textColor"
                          : "text-secondary"
                      }`}
                    >
                      {fixture.match_awayteam_score}
                    </span>
                    <span
                      className={`${
                        Number(fixture.match_awayteam_score) <
                        Number(fixture.match_hometeam_score)
                          ? "textColor"
                          : "text-secondary"
                      }`}
                    >
                      {fixture.match_hometeam_score}{" "}
                    </span>
                  </div>
                ) : (
                  <div className="d-flex   align-items-center justify-content-center ml-5">
                    <span className="text-success text-small">
                      To be played
                    </span>
                  </div>
                )}
              </div>

              <div
                className={`d-flex flex-column justify-content-center pl-4 border-left ${
                  fixture.match_status ? "" : "text-success"
                }`}
              >
                <small className="text-nowrap text-small">
                  {fixture.match_date}{" "}
                </small>
                <small className="text-small text-nowrap ">
                  {fixture.match_time}
                </small>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Fixtures;
