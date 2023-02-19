import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import profilePic from "../../img/Louis profile .JPG";
import { CircularProgressbar } from "react-circular-progressbar";
import { userPreference } from "../../redux/actions";
import Avatar from "../../components/Avatar";

const UserProfile = ({ user }) => {
  const percentage = 80;
  const [rating, setRating] = useState(0);
  const [ratePS, setRatePS] = useState(0);
  const [rateXB, setRateXB] = useState(0);
  const [rateEN, setRateEN] = useState(0);
  const [hover, setHover] = useState(0);
  const [hoverXB, setHoverXB] = useState(0);
  const [hoverEN, setHoverEN] = useState(0);
  const [hoverPS, setHoverPS] = useState(0);
  const [key, setKey] = useState("activation");
  const dispatch = useDispatch();
  const userPreferenceData = useSelector((state) => state.preference.data);

  const [isLeagueChecked, setIsLeagueChecked] = useState(false);
  const [isTournamentChecked, setIsTournamentChecked] = useState(false);

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
  return (
    <div className="gift-container">
      <Row className="d-flex flex-column align-items-center  mt-4">
        <div>
          {/* <img className="profile-img" src={profilePic} alt="" /> */}
          <Avatar
            src={user.avatar}
            alt="Profile Avatar"
            className="avatar"
            width={100}
            height={100}
          />
          <h5 className="d-flex mt-2  ml-3 ">
            {user.name} {user.surname}
          </h5>
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
          <span className="d-flex ml-2 mb-4">Favorite platforms</span>{" "}
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
                    <Icon.StarFill className={`${star} mx-0 px-0`} size={15} />
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
                    <Icon.StarFill className={`${star} mx-0 px-0`} size={15} />
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
                    <Icon.StarFill className={`${star} mx-0 px-0`} size={15} />
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
                    <Icon.StarFill className={`${star} mx-0 px-0`} size={15} />
                  </Link>
                );
              })}
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
    </div>
  );
};
export default UserProfile;
