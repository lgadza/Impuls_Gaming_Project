import { Col, Row, NavDropdown, Dropdown } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const Table = () => {
  const API_KEY = "043889e9ea73af9c34129e6f7d0dd4c8";

  return (
    <Col className="scoll-table gift-container pb-2 pr-0">
      <Row className="w-100 d-flex mt-2 ">
        <Col className="d-flex justify-content-between pl-3 pr-0">
          <div className="d-flex align-items-center textColor2 ">
            <div>Season</div>
            <div>
              <NavDropdown title="March/20-27 " menuVariant="dark">
                <Dropdown.Item href="#/action-1">April/01-07</Dropdown.Item>
                <Dropdown.Item href="#/action-2">April/01-07</Dropdown.Item>
                <Dropdown.Item href="#/action-3">April/01-07</Dropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="w-100 pr-0 mr-0 textColor2">
        <Col className="d-flex justify-content-between pl-3 pr-0">
          <div>
            <span>Player</span>
          </div>
          <div className="d-flex justify-content-end mr-2">
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
      {[...Array(20)].map((player, index) => (
        <div>
          <Row className="w-100 pr-0  mr-0 textColor2 container">
            <Col className="participant-list pb-2 py-2 d-flex justify-content-between  mr-0 px-0">
              <div>
                <span className="mr-2">{index + 1}</span>
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
export default Table;
