import { Col, Row, NavDropdown, Dropdown } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Avatar from "../../components/Avatar";
import profilePic from "../../img/Louis profile .JPG";
const Table = () => {
  return (
    <Col className="gift-container mb-5 pb-2 mx-2 fixture-container fixture-scroll">
      <Row className="w-100 d-flex mt-2 ">
        <Col className="d-flex justify-content-between pl-3 pr-0">
          <div className="d-flex seasons-list align-items-center justify-content-between textColor2 ">
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
        <Col className="d-flex  justify-content-between px-3  pr-0">
          <div className="player-name-sticky player">
            <span className="d-flex text-left">Player</span>
          </div>
          <div className="d-flex player-stats justify-content-end ">
            <span className="mx-3">MP</span>
            <span className="mx-3">W</span>
            <span className="mx-3">D</span>
            <span className="mx-3">L</span>
            <span className="mx-3">Pts</span>
            <span className="mx-3">Last 3</span>
          </div>
        </Col>
      </Row>

      <div className="mobile-scrolling">
        {[...Array(20)].map((player, index) => (
          <div>
            <Row className=" pr-0  mr-0 textColor2">
              <Col className="participant-list pb-2 py-2 d-flex justify-content-between  mr-0 px-0">
                <div className="d-flex align-items-center player-name-sticky">
                  <span className="px-3 player-position ">{index + 1}</span>
                  <Avatar height={20} width={20} alt="louis" src={profilePic} />
                  <span className="text-nowrap ml-1 text-left">Man UTD</span>
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
      </div>
    </Col>
  );
};
export default Table;
