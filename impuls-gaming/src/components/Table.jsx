import { Col, Row, NavDropdown, Dropdown } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const Table = () => {
  const API_KEY = "043889e9ea73af9c34129e6f7d0dd4c8";

  let players = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <Col>
      <Row>
        <div className="d-flex align-items-center textColor2 mx-2">
          <div>Season</div>
          <div>
            <NavDropdown title="March/20-27 " menuVariant="dark">
              <Dropdown.Item href="#/action-1">April/01-07</Dropdown.Item>
              <Dropdown.Item href="#/action-2">April/01-07</Dropdown.Item>
              <Dropdown.Item href="#/action-3">April/01-07</Dropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </Row>
      <hr />
      <Row className="w-100 pr-0 mr-0 textColor2">
        <Col className="d-flex justify-content-between pl-3 pr-0">
          <div>
            <span>Player</span>
          </div>
          <div className="d-flex justify-content-end mr-0">
            <span className="mx-3">MP</span>
            <span className="mx-3">W</span>
            <span className="mx-3">D</span>
            <span className="mx-3">L</span>
            <span className="mx-3">Pts</span>
            <span className="ml-4">Last 3</span>
          </div>
        </Col>
      </Row>
      <hr />
      {players.map((player, index) => (
        <div>
          <Row className="w-100 pr-0 mr-0 textColor2 ">
            <Col className="d-flex justify-content-between pl-3 pr-0">
              <div>
                <span className="mr-2">{index + 1}</span>
                <span>Louis Gadza</span>
              </div>
              <div className="d-flex justify-content-end mr-0">
                <span className="mx-3">MP</span>
                <span className="mx-3">W</span>
                <span className="mx-3">D</span>
                <span className="mx-3">L</span>
                <span className="mx-3">Pts</span>
                <span className="ml-3">
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
          <hr />
        </div>
      ))}
    </Col>
  );
};
export default Table;
