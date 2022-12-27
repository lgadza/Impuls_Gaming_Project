import { Col, Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import profilePic from "../img/Louis profile .JPG";
import { CircularProgressbar } from "react-circular-progressbar";
import Table from "./Table";

const UserPage = () => {
  const percentage = 80;
  return (
    <Container fluid className="textColor user-page main-container">
      <Container>
        <Row className="mb-3 pt-4 d-flex align-items-center justify-content-between">
          <div>
            <Link to="/" className="textColor">
              Homepage
            </Link>
            <Icon.CaretRightFill size={10} />
            <Link className="textColor">user</Link>
            <Icon.CaretRightFill size={10} />
            <Link className="textColor">Louis Gadza</Link>
          </div>
          <div>
            <img src={profilePic} className="small-profile-img" alt="" />
          </div>
        </Row>
        <Row>
          <Col className="gift-container profile-info d-flex justify-content-center">
            <Row className="d-flex mt-4">
              <div>
                <img className="profile-img" src={profilePic} alt="" />
                <Row>
                  <div className="d-flex flex-column mt-2">
                    <span>
                      <strong>100</strong>
                    </span>
                    <span>followers</span>
                  </div>
                  <div className="d-flex flex-column mt-2 ml-3">
                    <span>
                      <strong>2</strong>
                    </span>
                    <span>following</span>
                  </div>
                </Row>
                <hr />
                <Row>
                  <div className="d-flex justify-content-between bg-secondary text-white px-2 py-2">
                    <span className="mr-3">Joined</span>
                    <span>Dec 11, 2022</span>
                  </div>
                </Row>
              </div>
              <div className="ml-5 ">
                <h5 className="d-flex ml-2 ">Louis Gadza</h5>
                <hr />
                <span className="d-flex ml-2 mb-4">
                  Favorite platforms
                </span>{" "}
                <Row>
                  <Col>
                    <Icon.Display size={25} />
                    <Icon.Star className="mx-0 px-0" size={15} />
                    <Icon.Star className="mx-1 px-0" size={15} />
                    <Icon.Star className="mx-0 px-0" size={15} />
                    <Icon.Star className="mx-1 px-0" size={15} />
                    <Icon.Star className="mx-0 px-0" size={15} />
                  </Col>
                  <Col>
                    <Icon.Playstation color="red" size={25} />
                    <Icon.Star className="mx-0 px-0" size={15} />
                    <Icon.Star className="mx-1 px-0" size={15} />
                    <Icon.Star className="mx-0 px-0" size={15} />
                    <Icon.Star className="mx-1 px-0" size={15} />
                    <Icon.Star className="mx-0 px-0" size={15} />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <Icon.Xbox color="green" size={25} />
                    <Icon.Star className="mx-0 px-0" size={15} />
                    <Icon.Star className="mx-1 px-0" size={15} />
                    <Icon.Star className="mx-0 px-0" size={15} />
                    <Icon.Star className="mx-1 px-0" size={15} />
                    <Icon.Star className="mx-0 px-0" size={15} />
                  </Col>
                  <Col className="mb-3">
                    <Icon.NintendoSwitch size={25} color="red" />
                    <Icon.Star className="mx-0 px-0" size={15} />
                    <Icon.Star className="mx-1 px-0" size={15} />
                    <Icon.Star className="mx-0 px-0" size={15} />
                    <Icon.Star className="mx-1 px-0" size={15} />
                    <Icon.Star className="mx-0 px-0" size={15} />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <span className="d-flex mt-2 ml-2 ">
                      Favorite game setup
                    </span>
                    <div className="d-flex my-2 ml-2">
                      <span>
                        <strong>Tournaments</strong>
                      </span>
                      <Icon.CheckAll className="check-tick" size={20} />

                      <span className="ml-3">
                        <strong>Leagues</strong>
                      </span>
                      <Icon.CheckAll className="check-tick" size={20} />
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col className="d-flex mt-2 ml-2 ">
                    <span>Trophies</span>
                    <Icon.TrophyFill color="gold" size={30} />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="d-flex mt-2 ml-2 ">
                    <div className="d-flex flex-column">
                      <span>
                        <strong>Wins</strong>
                      </span>
                      <span>50</span>
                    </div>
                  </Col>
                  <Col className=" mt-2  ">
                    <div className="d-flex flex-column">
                      <span>
                        <strong>Draws</strong>
                      </span>
                      <span>4</span>
                    </div>
                  </Col>
                  <Col className=" mt-2  ">
                    <div className="d-flex flex-column">
                      <span>
                        <strong>Lost</strong>
                      </span>
                      <span>10</span>
                    </div>
                  </Col>
                  <Col className=" mt-2  ">
                    <div className="d-flex flex-column">
                      <span>
                        <strong>Played</strong>
                      </span>
                      <span>104</span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="my-3 ml-2 flex-column justify-content-center">
                    <div className="d-flex">
                      <strong>Winning rate</strong>
                    </div>
                    <div style={{ width: 130, height: 130 }}>
                      <CircularProgressbar
                        className="mt-3 ml-5"
                        value={percentage}
                        text={`${percentage}%`}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
          <Col className="ml-4">
            <Row>
              <Link className="textColor mx-2">Overview</Link>
              <Link className="textColor mx-2">Table</Link>
              <Link className="textColor mx-2">Fixture</Link>
              <Link className="textColor mx-2">Tournaments</Link>
              <Link className="textColor mx-2">Next League</Link>
              <Link className="textColor mx-2">Friends</Link>
              <Link to="/sign-in" className="textColor mx-2">
                Log out
              </Link>
            </Row>
            <Row>
              <Table />
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default UserPage;
