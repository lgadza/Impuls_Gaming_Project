import { Col, Row, NavDropdown, Dropdown } from "react-bootstrap";

const Table = () => {
  let players = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <Col>
      <Row>
        <div className="d-flex align-items-center mx-2">
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
      <Row className="w-100 pr-0 mr-0">
        <Col className="d-flex justify-content-between pl-3 pr-0">
          <div>
            <span>Club</span>
          </div>
          <div className="d-flex justify-content-end mr-0">
            <span className="mx-3">MP</span>
            <span className="mx-3">W</span>
            <span className="mx-3">D</span>
            <span className="mx-3">L</span>
            <span className="mx-3">Pts</span>
            <span className="ml-3">Last 5</span>
          </div>
        </Col>
      </Row>
      <hr />
      {players.map((player) => (
        <div>
          <hr />
          <Row className="w-100 pr-0 mr-0">
            <Col className="d-flex justify-content-between pl-3 pr-0">
              <div>
                <span>Club</span>
              </div>
              <div className="d-flex justify-content-end mr-0">
                <span className="mx-3">MP</span>
                <span className="mx-3">W</span>
                <span className="mx-3">D</span>
                <span className="mx-3">L</span>
                <span className="mx-3">Pts</span>
                <span className="ml-3">Last 5</span>
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
