import { Col, Form, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userChat } from "../../redux/actions";
import ScrollToBottom from "react-scroll-to-bottom";
import Moment from "react-moment";
import Avatar from "../../components/Avatar";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001", { transports: ["websocket"] });
const Chat = ({ user, isChat }) => {
  const messages = useSelector((state) => state.userChat.data);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState(undefined);
  const dispatch = useDispatch();
  const date = new Date();
  const [chatHistory, setChatHistory] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
    // dispatch(userChat(message));
  };
  useEffect(() => {
    socket.on("welcome", (welcomeMessage) => {
      console.log(welcomeMessage);

      socket.on("loggedIn", (onlineUsersList) => {
        console.log("logged in event:", onlineUsersList);
        //  setLoggedIn(true);
        setOnlineUsers(onlineUsersList);
      });

      socket.on("updateOnlineUsersList", (onlineUsersList) => {
        console.log("A new user connected/disconnected");
        //  setOnlineUsers(onlineUsersList);
      });

      socket.on("newMessage", (newMessage) => {
        console.log(newMessage);
        setChatHistory([...chatHistory, newMessage.message]);
      });
    });
  });
  const submitUsername = () => {
    // here we will be emitting a "setUsername" event (the server is already listening for that)
    socket.emit("setUsername", `${user.name} ${user.surname}`);
  };
  if (user && isChat) {
    submitUsername();
  }
  const sendMessage = () => {
    const newMessage = {
      sender: `${user.name} ${user.surname}`,
      text: message,
      createdAt: new Date(),
    };
    socket.emit("sendMessage", { message: newMessage });
    setChatHistory([...chatHistory, newMessage]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSend = () => {
    dispatch(userChat(message));
    setMessage("");
  };
  return (
    <Col className=" gift-container chat-section  ">
      <Row className="w-100 d-flex mx-auto  py-2 mb-3 ">
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
        <Col md={8} className="pr-0">
          <ScrollToBottom>
            <div className="user-chats user-profiles ">
              {[...Array(5)].map((user) => (
                <Row>
                  <Col className="d-flex justify-content-between mt-4">
                    <Avatar
                      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                      alt="Profile Avatar"
                      className="avatar "
                      width={30}
                      height={30}
                    />
                    <div className="d-flex ml-1 flex-column text-left ">
                      <span>
                        <strong>Player 1</strong>
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
              {messages &&
                chatHistory.map((message, index) => (
                  <Row>
                    <Col
                      key={index}
                      className="d-flex justify-content-between mt-3 w-100"
                    >
                      <div className="d-flex w-100  flex-column text-left mr-auto">
                        <span className="text-chat w-100 main-container2 px-2 py-1">
                          {message.text}
                        </span>
                        <span className="d-flex justify-content-end align-items-center">
                          <span className="date ml-0 px-0">
                            <Moment format="D MMM, HH:mm">
                              {message.createdAt}
                            </Moment>
                          </span>
                          <Icon.Dot className="mx-0 px-0" />
                          <strong className="mr-0 pr-0">
                            {message.sender}
                          </strong>
                        </span>
                      </div>
                      <Avatar
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                        alt="Profile Avatar"
                        className="avatar"
                        width={30}
                        height={30}
                      />
                    </Col>
                  </Row>
                ))}
            </div>
          </ScrollToBottom>
          <hr />
          <div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2 d-flex align-items-center main-container2 ">
                <Form.Control
                  className="main-container2"
                  placeholder="Write a message..."
                  as="textarea"
                  rows={2}
                  onChange={handleMessage}
                  value={message}
                />
              </Form.Group>
              <div className="d-flex py-2 justify-content-between">
                {/* <Icon.Image size={20} /> */}
                {message && (
                  <button
                    className="textColor px-3 mb-1 send-btn main-container2"
                    type="submit"
                    onClick={sendMessage}
                  >
                    Send
                  </button>
                )}
              </div>
            </Form>
          </div>
        </Col>

        <Col md={4} className=" user-profiles pr-0  ">
          {[...Array(15)].map((user) => (
            <Row className="user-friends">
              <Col className=" d-flex  pl-2  ">
                <Avatar
                  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                  alt="Profile Avatar"
                  className="avatar"
                  width={30}
                  height={30}
                />
                <div className="py-1  ml-1 friends-list d-flex flex-column text-left  ">
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
