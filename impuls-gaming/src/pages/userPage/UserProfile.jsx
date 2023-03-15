import { Col, Dropdown, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "../../styling/playerProfile.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CircularProgressbar } from "react-circular-progressbar";
import { getMe, putMe, userPreference } from "../../redux/actions";
import Avatar from "../../components/Avatar";
import { Spinner } from "react-bootstrap-v5";
import axios from "axios";

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
  const accessToken = useSelector((state) => state.accessToken.accessToken);
  const dispatch = useDispatch();
  const userPreferenceData = useSelector((state) => state.preference.data);
  const isLoading = useSelector((state) => state.putMe.isLoading);
  const [isLeagueChecked, setIsLeagueChecked] = useState(false);
  const [isTournamentChecked, setIsTournamentChecked] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [isPut, setPut] = useState(false);
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
  const updatedData = {
    email,
    name,
  };
  const updateMe = async () => {
    setPut(true);
    await dispatch(putMe(accessToken.accessToken, updatedData));
    dispatch(getMe(accessToken.accessToken));
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
  const handleAvatar = (e) => {
    setAvatar(e.target.files[0]);
  };
  const handleAvatarUpload = () => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    const URL = process.env.REACT_APP_BE_PROD_URL;
    axios
      .post(`${URL}/files/${user._id}/avatar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(getMe(accessToken.accessToken));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (avatar) {
      handleAvatarUpload();
    }
  }, [avatar]);

  const removeProfilePicture = () => {
    const formData = new FormData();
    formData.append(
      "avatar",
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
    );

    const URL = process.env.REACT_APP_BE_PROD_URL;
    axios
      .post(`${URL}/files/${user._id}/avatar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(getMe(accessToken.accessToken));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const removeProfilePicture = () => {
  //   const avatarReplacement = {
  //     avatar:
  //       "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
  //   };
  //   dispatch(putMe(avatarReplacement, accessToken.accessToken));
  // };
  return (
    <div className="gift-container card">
      <Row className="d-flex flex-column align-items-center  mt-4">
        <Col>
          {/* <img className="profile-img" src={profilePic} alt="" /> */}

          <Dropdown>
            <Dropdown.Toggle>
              <div className="profile-picture">
                <Avatar
                  src={user.avatar}
                  alt="Profile Avatar"
                  className="avatar"
                  width={130}
                  height={130}
                />
                <div className="d-flex flex-column justify-content-center align-items-center change-profile">
                  <Icon.CameraFill size={25} />
                  <small>Change</small>
                  <small>profile picture</small>
                </div>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-50">
              <Dropdown.Item as="div" className="py-1">
                <label htmlFor="profile">
                  <small>Upload Photo</small>{" "}
                </label>
                <input
                  id="profile"
                  type="file"
                  style={{ visibility: "hidden" }}
                  onChange={handleAvatar}
                />
              </Dropdown.Item>
              <Dropdown.Item onClick={removeProfilePicture} className="py-2">
                Remove Photo
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <h6 className="d-flex mt-2  ml-3 ">
            {user.name} {user.surname}
          </h6> */}
          <div className="d-flex w-100 px-3">
            <span className="text-success">Your name</span>
          </div>
          <div className="d-flex justify-content-between py-0  align-items-center">
            <Form.Group className=" w-100 px-3  nickname-text-bar mt-2 ">
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="py-0 pl-0"
              />
            </Form.Group>
            {isLoading && isPut && <Spinner animation="grow" size="sm" />}
            {!isEditing && (
              <span>
                <Icon.PencilFill onClick={() => setIsEditing(true)} size={15} />
              </span>
            )}
            {isEditing && (
              <span className="d-flex align-items-center">
                <span>{name.length}</span>

                <Icon.Check2
                  onClick={() => {
                    setIsEditing(false);
                    updateMe();
                  }}
                  size={15}
                />
              </span>
            )}
          </div>
          {isEditing && <hr className="mx-3  my-0 user-profile-name" />}

          <div className="d-flex mt-3 px-3 ">
            <span className="text-success">Email</span>
          </div>
          <div className="d-flex justify-content-between py-0     align-items-center">
            <Form.Group className=" w-100  nickname-text-bar mt-2 px-3 ">
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-0 pl-0"
              />
            </Form.Group>
            {isLoading && isPut && <Spinner animation="grow" size="sm" />}
            {!isEditingEmail && (
              <span>
                <Icon.PencilFill
                  onClick={() => setIsEditingEmail(true)}
                  size={15}
                />
              </span>
            )}
            {isEditingEmail && (
              <span className="d-flex align-items-center">
                <span>{email.length}</span>

                <Icon.Check2
                  onClick={() => {
                    setIsEditingEmail(false);
                    updateMe();
                  }}
                  size={15}
                />
              </span>
            )}
          </div>
          {isEditingEmail && <hr className="mx-3  my-0 user-profile-name" />}
          {!isEditingEmail && <hr className="mx-3 mb-0 pb-0" />}
          {/* <hr />
          <Row>
            <div className="d-flex  bg-secondary text-white px-2 py-2">
              <span className="mr-3">Joined</span>
              <span>Dec 11, 2022</span>
            </div>
          </Row> */}
        </Col>
        <div>
          <span className="d-flex ml-2 my-4">Favorite platforms</span>{" "}
          <Row className="fav-platforms">
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
              <Icon.NintendoSwitch size={25} />
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
