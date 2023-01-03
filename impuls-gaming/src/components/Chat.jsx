import { Col, Form, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import profilePic from "../img/Louis profile .JPG";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userChat } from "../redux/actions";
import ScrollToBottom from "react-scroll-to-bottom";
import Moment from "react-moment";

const Chat = () => {
  const message = useSelector((state) => state.userChat.data);
  console.log(message);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userMessage, setUserMessage] = useState(undefined);
  const dispatch = useDispatch();
  const date = new Date();

  const handleMessage = (e) => {
    setUserMessage(e.target.value);
    // dispatch(userChat(userMessage));
  };
  // useEffect(() => {
  //   dispatch(userChat(userMessage));
  // }, [userMessage === undefined]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSend = () => {
    dispatch(userChat(userMessage));
    setUserMessage("");
  };
  return (
    <Col className=" gift-container chat-section">
      <Row className="w-100 d-flex mx-auto  py-2 ">
        <Col className="inputContainer px-0   w-100">
          <Icon.Search className="search-icon textColor" size={20} />
          <input
            type="search"
            placeholder="search user by name"
            className="w-100 pr-1 pl-5 py-2 mx-3 search-field"
          />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <ScrollToBottom>
            <div className="user-chats user-profiles ">
              {[...Array(5)].map((user) => (
                <Row>
                  <Col className="d-flex justify-content-between mt-4">
                    <img
                      src={profilePic}
                      alt=""
                      className="small-profile-img mr-3"
                    />
                    <div className="d-flex flex-column text-left ">
                      <span>
                        <strong>Louis Gadza</strong>
                        <Icon.Dot />
                        <span>12 min</span>
                      </span>
                      <span className="text-chat text-background  pl-2 mr-2 py-1 ">
                        Not completely sure if Offcanvas is added to the alpha
                        yet just looking to confirm, but it appeared to be based
                        off the project board. I can successfully import and use
                        other react-bootstrap components, but Offcanvas is
                        failing to import.
                      </span>
                    </div>
                  </Col>
                </Row>
              ))}
              {message &&
                message.map((message) => (
                  <Row>
                    <Col className="d-flex justify-content-between mt-3 w-100">
                      <div className="d-flex w-100  flex-column text-left mr-auto">
                        <span className="text-chat w-100 main-container px-2 py-1">
                          {message}
                        </span>
                        <span className="d-flex justify-content-end align-items-center">
                          <span className="date ml-0 px-0">
                            <Moment format="D MMM, HH:mm">{date}</Moment>
                          </span>
                          <Icon.Dot className="mx-0 px-0" />
                          <strong className="mr-0 pr-0">Louis Gadza</strong>
                        </span>
                      </div>
                      <img
                        src={profilePic}
                        alt=""
                        className="small-profile-img mt-auto mx-3"
                      />
                    </Col>
                  </Row>
                ))}
            </div>
          </ScrollToBottom>
          <hr />
          <div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2 d-flex align-items-center main-container ">
                <Form.Control
                  className="main-container"
                  placeholder="Write a message..."
                  as="textarea"
                  rows={3}
                  onChange={handleMessage}
                  value={userMessage}
                />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Icon.Image size={20} />
                {userMessage && (
                  <button
                    className="textColor px-3 mb-1 send-btn main-container"
                    type="submit"
                    onClick={handleSend}
                  >
                    Send
                  </button>
                )}
              </div>
            </Form>
          </div>
        </Col>

        <Col md={4} className=" user-profiles   ">
          {[...Array(15)].map((user) => (
            <Row>
              <Col className="d-flex justify-content-between pl-2 my-1">
                <img
                  src={profilePic}
                  alt=""
                  className="small-profile-img2 mr-3"
                />
                <div className="d-flex flex-column text-left ">
                  <span className="text-nowrap user-fullname">
                    Louis Gadzewewea
                  </span>

                  <span className="user-time-reply ">12 min</span>
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Col>
  );
};
export default Chat;
