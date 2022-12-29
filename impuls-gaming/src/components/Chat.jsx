import { Col, Form, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import profilePic from "../img/Louis profile .JPG";
import OffCanvas from "./OffCanvas";
import { Link } from "react-router-dom";
import { useState } from "react";

const Chat = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className=" gift-container chat-section">
      <Col md={8}>
        <div className="user-chats user-profiles ">
          <Row>
            <Col className="inputContainer mt-3 w-100">
              <Icon.Search className="search-icon" size={20} />
              <input
                type="search"
                placeholder="search user by name"
                className="w-100 pr-1 pl-5 py-2 mr-3 search-field"
              />
            </Col>
          </Row>

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
                    Not completely sure if Offcanvas is added to the alpha yet
                    just looking to confirm, but it appeared to be based off the
                    project board. I can successfully import and use other
                    react-bootstrap components, but Offcanvas is failing to
                    import.
                  </span>
                </div>
              </Col>
            </Row>
          ))}
          <Row>
            <Col className="d-flex justify-content-between mt-4">
              <div className="d-flex flex-column text-left mr-auto">
                <span className="text-chat main-container px-2 py-1">
                  Not completely sure if Offcanvas is added to the alpha yet{" "}
                </span>
                <span className="d-flex justify-content-end align-items-center">
                  <strong>Louis Gadza</strong>
                  <Icon.Dot />
                  <span>12 min</span>
                </span>
              </div>
              <img
                src={profilePic}
                alt=""
                className="small-profile-img mt-auto ml-3"
              />
            </Col>
          </Row>
        </div>
        <hr />
        <div>
          <Form.Group className="mb-3 d-flex align-items-center main-container ">
            <Form.Control
              className="main-container"
              placeholder="Write a message..."
              as="textarea"
              rows={3}
              // onChange={handleChange}
              // maxLength={100}
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Icon.Image size={20} />
            <button
              className="textColor px-3 send-btn main-container"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </Col>
      <Col md={4} className=" user-profiles mt-4  ">
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
  );
};
export default Chat;
