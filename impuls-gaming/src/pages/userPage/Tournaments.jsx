import { Col, Row, NavDropdown, Dropdown, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import fifa from "../../img/fifa23.jpg";
import { Link } from "react-router-dom";

const Tournaments = () => {
  const tournaments = useSelector((state) => state.tournaments.tournaments);
  console.log(tournaments);
  return (
    <Col className="scoll-table gift-container pb-2 pr-0">
      <Row className="w-100 playerNav pr-0 mt-0 mr-0 textColor w-100 mb-3">
        <Col className="d-flex  justify-content-between pl-3 pr-0">
          <Form>
            <div className="my-3 d-flex align-items-center">
              <Form.Check
                type="radio"
                name="query"
                label="All"
                className="mr-3"
              />
              <Form.Check
                type="radio"
                className="mr-3"
                name="query"
                label="Past"
              />
              <Form.Check
                className="mr-3"
                type="radio"
                name="query"
                label="Ongoing"
              />
              <Form.Check
                type="radio"
                className="mr-3"
                name="query"
                label="Upcoming"
              />
              <Form.Check
                type="checkbox"
                className="mr-3"
                name="query"
                label="Featured"
              />

              <Form.Check
                type="checkbox"
                className="mr-3"
                name="query"
                label="Open"
              />
            </div>
          </Form>
        </Col>
      </Row>

      {tournaments.tournaments.map((tournament, index) => (
        <div>
          {tournament.name ? (
            <Link
              to={`/tournaments/${tournament.name}`}
              className="link-none-deco"
            >
              <Row className="w-100 pr-0  mr-0 tournament-list  textColor2 container">
                <Col className="pb-2 px-1 py-2 d-flex justify-content-between  mr-0 px-0">
                  <div className="d-flex">
                    <img
                      src={fifa}
                      alt=""
                      className="tournament-preview-img mr-2"
                    />
                    <div className="d-flex flex-column justify-content-start">
                      <h5 className="text-nowrap d-flex ">{tournament.name}</h5>
                      <span className="text-nowrap span d-flex ">
                        {tournament.discipline}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mr-0">
                    <span className="span">2 Feb 2023</span>
                  </div>
                  <div>
                    <div className="d-flex flex-column justify-content-end mr-0">
                      <span className="span">23/36</span>
                      <span className="span">Players</span>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex flex-column justify-content-end text-success mr-0">
                      <span className="span">Registration</span>
                      <span className="span ">Open</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Link>
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
