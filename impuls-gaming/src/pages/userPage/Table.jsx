import { useEffect } from "react";
import { Col, Row, NavDropdown, Dropdown } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../components/Avatar";
import { getTournamentsResults } from "../../redux/actions";
import { Link } from "react-router-dom";

const Table = () => {
  const date = new Date();
  const results = useSelector((state) => state.results.results);

  const dispatch = useDispatch();
  const sortedResults = results.sort(
    (player_1, player_2) =>
      player_1.overall_league_position - player_2.overall_league_position
  );
  useEffect(() => {
    dispatch(getTournamentsResults());
  }, []);
  return (
    <Col className="gift-container mb-5 pb-2 mx-2 fixture-container fixture-scroll">
      <Row className="w-100 d-flex mt-2 ">
        <Col className="d-flex justify-content-between player-name-sticky  pl-3 pr-0">
          <div className="d-flex seasons-list align-items-center justify-content-between textColor2 text-nowrap">
            <div>Season</div>
            <div>
              <NavDropdown title="March/20-27 " menuVariant="dark">
                <Dropdown.Item href="#/action-1">April/01-07</Dropdown.Item>
                <Dropdown.Item href="#/action-2">April/01-07</Dropdown.Item>
                <Dropdown.Item href="#/action-3">April/01-07</Dropdown.Item>
              </NavDropdown>
            </div>
          </div>
          <div>
            <Icon.ArrowLeftRight size={20} className="d-lg-none sm-d-block" />
          </div>
        </Col>
      </Row>
      <Row className=" playerNav textColor py-3 ">
        <Col className="d-flex  justify-content-between px-3">
          <div className="player-name-sticky player">
            <span className="d-flex text-left">Player</span>
          </div>
          <div className="d-flex player-stats justify-content-end ">
            <span className="mx-3 player-states">MP</span>
            <span className="mx-3 text-success player-states">W</span>
            <span className="mx-3 text-warning player-states">D</span>
            <span className="mx-3 text-danger player-states">L</span>
            <span className="ml-3 textColor3 player-states">Pts</span>
          </div>
        </Col>
      </Row>

      {results && (
        <div className="mobile-scrolling">
          {sortedResults.map((player, index) => (
            <div
              className={`participant-list ${
                player.team_name === "Real Madrid"
                  ? "user_current-position"
                  : ""
              }`}
            >
              <Row key={index} className=" pr-0  mr-0 textColor2">
                <Col className="pb-2 py-2 d-flex justify-content-between  mr-0 pl-3 pr-0">
                  <div className="d-flex align-items-center player-name-sticky">
                    <span className="pr-3 player-position ">
                      {player.overall_league_position}
                    </span>
                    <Avatar
                      height={20}
                      width={20}
                      alt={player.team_name}
                      src={player.team_badge}
                    />
                    <span className="text-nowrap ml-1 text-left">
                      {player.team_name}
                    </span>
                  </div>

                  <div className="d-flex justify-content-end mr-0">
                    <span className="mx-3 player-states">
                      {player.overall_league_payed}
                    </span>
                    <span className="mx-3 text-success player-states">
                      {player.overall_league_W}
                    </span>
                    <span className="mx-3 text-warning player-states">
                      {player.overall_league_D}
                    </span>
                    <span className="mx-3 text-danger player-states">
                      {player.overall_league_L}
                    </span>
                    <span className="ml-3 textColor3 player-states">
                      {player.overall_league_PTS}
                    </span>
                  </div>
                </Col>
              </Row>
              <hr className="p-0 m-0 " />
            </div>
          ))}
        </div>
      )}
      <Link className=" textColor my-3 ">
        @{date.getFullYear()} Impuls Gaming. All rights reserved
      </Link>
    </Col>
  );
};
export default Table;
