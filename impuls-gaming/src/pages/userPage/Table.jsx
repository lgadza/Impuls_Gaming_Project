import { Col, Row, NavDropdown, Dropdown } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const Table = () => {
  return (
    <Col className="gift-container mb-5 pb-2 mx-2 fixture-containerr">
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
      <Row className=" playerNav py-3  textColor pr-0  mr-0  ">
        <Col className="d-flex  justify-content-between pl-3 pr-0">
          <div>
            <span>Player</span>
          </div>
          <div className="d-flex justify-content-end ">
            <span className="mx-3">MP</span>
            <span className="mx-3">W</span>
            <span className="mx-3">D</span>
            <span className="mx-3">L</span>
            <span className="mx-3">Pts</span>
            <span className="ml-4">Last 3</span>
          </div>
        </Col>
      </Row>

      {[...Array(20)].map((player, index) => (
        <div>
          <Row className=" pr-0  mr-0 textColor2">
            <Col className="participant-list pb-2 py-2 d-flex justify-content-between  mr-0 px-0">
              <div>
                <span className="mx-3">{index + 1}</span>
                <span className="text-nowrap">-</span>
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
          <hr className="p-0 m-0 " />
        </div>
      ))}
    </Col>
  );
};
export default Table;
