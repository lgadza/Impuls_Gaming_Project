import { Col, Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import profilePic from "../../img/Louis profile .JPG";
import { CircularProgressbar } from "react-circular-progressbar";
import Table from "./Table";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useSelector, useDispatch } from "react-redux";
import { userPreference } from "../../redux/actions";
import Tournaments from "./Tournaments";

const UserPage = () => {
  const percentage = 80;
  const [rating, setRating] = useState(0);
  const [ratePS, setRatePS] = useState(0);
  const [rateXB, setRateXB] = useState(0);
  const [rateEN, setRateEN] = useState(0);
  const [hover, setHover] = useState(0);
  const [hoverXB, setHoverXB] = useState(0);
  const [hoverEN, setHoverEN] = useState(0);
  const [hoverPS, setHoverPS] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [key, setKey] = useState("activation");
  const dispatch = useDispatch();
  const userPreferenceData = useSelector((state) => state.preference.data);
  console.log(userPreferenceData);
  const [isLeagueChecked, setIsLeagueChecked] = useState(false);
  const [isTournamentChecked, setIsTournamentChecked] = useState(false);
  const handleShowTable = () => {
    showChat ? setShowChat(false) : setShowTable(true);
  };
  const handleShowChat = () => {
    showTable ? setShowTable(false) : setShowChat(true);
  };
  const handleTournamentCheck = (e) => {
    // isTournamentChecked
    //   ? setIsTournamentChecked(false)
    //:
    setIsTournamentChecked(true);
  };
  const handleLeagueCheck = (e) => {
    // isLeagueChecked ? setIsLeagueChecked(false) :
    setIsLeagueChecked(true);
  };
  const like = isLeagueChecked
    ? "league"
    : isTournamentChecked
    ? "tournament"
    : "none";
  console.log(like);
  console.log(isTournamentChecked);
  const allRating = {
    PS: ratePS,
    PC: rating,
    XB: rateXB,
    ES: rateEN,
    like: like,
  };
  useEffect(() => {
    dispatch(userPreference(allRating));
  }, []);
  const handleLikes = () => {};
  return (
    <Container fluid className="textColor user-page main-container ">
      <Row className="mb-3 px-5 w-100 py-3 d-flex align-items-center justify-content-between position-fixed giftcard-preview-nav">
        <div>
          <Link to="/" className="textColor">
            Homepage
          </Link>
          <Icon.CaretRightFill size={10} />
          <Link className="textColor">user</Link>
          <Icon.CaretRightFill size={10} />
          <Link className="textColor">Louis Gadza</Link>
        </div>
        <div className="d-flex">
          <img src={profilePic} className="small-profile-img" alt="" />
          <Link to="/sign-in" className="textColor mx-2">
            Log out
          </Link>
        </div>
      </Row>
      <Container className="">
        <Row>
          <Col
            md={4}
            className="gift-container user-page-profile profile-info d-flex flex-column  mt-5 side-bar"
          >
            <Row className="d-flex flex-column align-items-center  mt-4">
              <div>
                <img className="profile-img" src={profilePic} alt="" />
                <h5 className="d-flex mt-2  ml-3 ">Louis Gadza</h5>
                <Row>
                  <div className="d-flex align-items-center ml-3 flex-column mt-2">
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
                  <div className="d-flex  bg-secondary text-white px-2 py-2">
                    <span className="mr-3">Joined</span>
                    <span>Dec 11, 2022</span>
                  </div>
                </Row>
              </div>
              <div>
                <hr />
                <span className="d-flex ml-2 mb-4">
                  Favorite platforms
                </span>{" "}
                <Row>
                  <Col>
                    <Icon.Display color="black" size={25} />
                    {[...Array(5)].map((star, index) => {
                      index++;
                      return (
                        <Link
                          key={index}
                          className={`${
                            index <= (hover || rating) ? "on" : "off"
                          } button-star px-0`}
                          onClick={() => {
                            setRating(index);
                            // dispatch(userPreference(allRating));
                          }}
                          onMouseEnter={() => setHover(index)}
                          onMouseLeave={() => setHover(rating)}
                        >
                          <Icon.StarFill
                            className={`${star} mx-0 px-0`}
                            size={15}
                          />
                        </Link>
                      );
                    })}
                  </Col>
                  <Col>
                    <Icon.Playstation color="red" size={25} />
                    {[...Array(5)].map((star, index) => {
                      index++;
                      return (
                        <Link
                          key={index}
                          className={`${
                            index <= (hoverPS || ratePS) ? "on" : "off"
                          }  button-star px-0`}
                          onClick={() => {
                            setRatePS(index);
                            // dispatch(userPreference(allRating));
                          }}
                          onMouseEnter={() => setHoverPS(index)}
                          onMouseLeave={() => setHoverPS(ratePS)}
                        >
                          <Icon.StarFill
                            className={`${star} mx-0 px-0`}
                            size={15}
                          />
                        </Link>
                      );
                    })}
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <Icon.Xbox color="green" size={25} />
                    {[...Array(5)].map((star, index) => {
                      index++;
                      return (
                        <Link
                          key={index}
                          className={`${
                            index <= (hoverXB || rateXB) ? "on" : "off"
                          } button-star px-0`}
                          onClick={() => {
                            setRateXB(index);
                            // dispatch(userPreference(allRating));
                          }}
                          onMouseEnter={() => setHoverXB(index)}
                          onMouseLeave={() => setHoverXB(rateXB)}
                        >
                          <Icon.StarFill
                            className={`${star} mx-0 px-0`}
                            size={15}
                          />
                        </Link>
                      );
                    })}
                  </Col>
                  <Col className="mb-3">
                    <Icon.NintendoSwitch size={25} color="black" />
                    {[...Array(5)].map((star, index) => {
                      index++;
                      return (
                        <Link
                          key={index}
                          className={`${
                            index <= (hoverEN || rateEN) ? "on" : "off"
                          } button-star px-0`}
                          onClick={() => {
                            setRateEN(index);
                            // dispatch(userPreference(allRating));
                          }}
                          onMouseEnter={() => setHoverEN(index)}
                          onMouseLeave={() => setHoverEN(rateEN)}
                        >
                          <Icon.StarFill
                            className={`${star} mx-0 px-0`}
                            size={15}
                          />
                        </Link>
                      );
                    })}
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
                      <input
                        key={"tournament"}
                        className="ml-2"
                        type="radio"
                        name="like"
                        checked={isTournamentChecked}
                        onChange={handleTournamentCheck}
                      />

                      <span className="ml-3">
                        <strong>Leagues</strong>
                      </span>
                      <input
                        key={"league"}
                        className="ml-2"
                        type="radio"
                        name="like"
                        checked={isLeagueChecked}
                        onChange={handleLeagueCheck}
                      />
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
                {/* <Row>
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
                </Row> */}
              </div>
            </Row>
          </Col>
          <Col md={8} className=" mt-5 side-bar">
            <Tabs
              activeKey={key}
              defaultActiveKey="overview"
              onSelect={(k) => setKey(k)}
              className="mb-3  d-flex justify-content-center  textColor w-100"
            >
              <Tab
                className="textColor2"
                eventKey="overview"
                title="Overview"
              ></Tab>
              <Tab className="w-100" eventKey="table" title="Table">
                <Table />
              </Tab>
              <Tab eventKey="fixture" title="Fixture"></Tab>
              <Tab eventKey="tournaments" title="Tournaments">
                <Tournaments />
              </Tab>
              <Tab eventKey="friends" title="Friends">
                <Chat />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default UserPage;