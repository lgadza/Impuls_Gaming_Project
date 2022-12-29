import { Col, Row } from "react-bootstrap";
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
    <Row className="w-100 gift-container chat-section">
      <Col md={8}>
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

        <Row>
          <Col className="d-flex justify-content-between mt-4">
            <img src={profilePic} alt="" className="small-profile-img mr-3" />
            <div className="d-flex flex-column text-left mr-auto">
              <span>
                <strong>Louis Gadza</strong>
                <Icon.Dot />
                <span>12 min</span>
              </span>
              <span className="text-chat">
                Not completely sure if Offcanvas is added to the alpha yet just
                looking to confirm, but it appeared to be based off the project
                board. I can successfully import and use other react-bootstrap
                components, but Offcanvas is failing to import.
              </span>
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={4} className=" user-profiles mt-4  ">
        {[...Array(15)].map((user) => (
          <Row>
            <Col className="d-flex justify-content-between my-1">
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
