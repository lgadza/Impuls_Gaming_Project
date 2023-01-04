import { Col, Row, NavDropdown, Dropdown, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import fifa from "../../img/fifa23.jpg";

const Tournaments = () => {
  const tournaments = useSelector((state) => state.tournament.data);
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

      {tournaments.map((tournament, index) => (
        <div>
          <Row className="w-100 pr-0  mr-0 textColor2 container">
            <Col className="participant-list pb-2 py-2 d-flex justify-content-between  mr-0 px-0">
              <div>
                <img src={fifa} alt="" className="tournament-preview-img" />
                <span className="text-nowrap">Louis Gadza</span>
              </div>
              <div className="d-flex justify-content-end mr-0">
                <span className="mx-3">MP</span>
                <span className="mx-3">W</span>
                <span className="mx-3">D</span>
                <span className="mx-3">L</span>
                <span className="mx-3">Pts</span>
                <span className="ml-3 text-nowrap">
                  <Icon.CheckCircleFill
                    className="mx-0"
                    size={13}
                    color="green"
                  />
                  <Icon.XCircleFill className="mx-1" size={13} color="red" />
                  <Icon.DashCircleFill
                    className="mx-1"
                    color="gray"
                    size={13}
                  />
                </span>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </Col>
  );
};
export default Tournaments;
